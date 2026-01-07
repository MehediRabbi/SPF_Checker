import { useState } from "react";
import "./App.css";

function App() {
  const [domain, setDomain] = useState("");
  const [spfRecords, setSpfRecords] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const isValidDomain = (value) =>
    /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);

  const checkSPF = async (e) => {
    e.preventDefault();

    setError("");
    setSpfRecords([]);

    if (!isValidDomain(domain)) {
      setError("Invalid domain name");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(
        `https://dns.google/resolve?name=${domain}&type=TXT`
      );
      const data = await res.json();

      if (!data.Answer) {
        setError("No TXT records found");
        return;
      }

      const records = data.Answer
        .map((r) => r.data.replace(/"/g, ""))
        .filter((txt) => txt.startsWith("v=spf1"));

      if (records.length === 0) {
        setError("No SPF record found");
        return;
      }

      setSpfRecords(records);
    } catch {
      setError("DNS lookup failed");
    } finally {
      setLoading(false);
    }
  };

  const clearAll = () => {
    setDomain("");
    setSpfRecords([]);
    setError("");
    setLoading(false);
  };

  const highlightSPF = (record) => {
    return record.replace(
      /(include:[^\s]+|redirect=[^\s]+)/g,
      '<span class="highlight">$1</span>'
    );
  };

  return (
    <div className="container">
      <h1>SPF Checker</h1>

      <form onSubmit={checkSPF}>
        <input
          type="text"
          placeholder="example.com"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
        />
        <button type="submit">Check SPF</button>
        <button type="button" onClick={clearAll}>
          Clear
        </button>
      </form>

      {loading && <p className="loading">Checking DNS records...</p>}

      {error && <p className="error">{error}</p>}

      {spfRecords.map((record, index) => (
        <div
          key={index}
          className="record"
          dangerouslySetInnerHTML={{
            __html: highlightSPF(record),
          }}
        />
      ))}
    </div>
  );
}

export default App;
