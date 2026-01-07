# SPF Checker (React)

Live Link: https://spf-checker-silk.vercel.app/

A simple and lightweight **React single-page application** that allows users to check the **SPF (Sender Policy Framework)** record of any domain.

The app performs a DNS TXT lookup using Google DNS and displays all valid SPF records (`v=spf1`) in a clean, readable format.

---

## 🚀 Features

- Check SPF records for any valid domain.
- Validates domain input before lookup.
- Highlights `include:` and `redirect=` mechanisms.
- Displays clear error messages.
- Loading indicator during DNS lookup.
- Clear button to reset input and results.
- Built with **React + Vite**

---

## 🛠️ How to Run the Application Locally

### Prerequisites

Make sure you have the following installed on your system:

- **Node.js** (v16 or later recommended)
- **npm** (comes with Node.js)

---

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/spf-checker-react.git
Navigate to the project folder

```bash
cd spf-checker-react
Install dependencies


```bash
npm install
Start the development server


```bash
npm run dev
Open the app in your browser

After running the command, Vite will show a local URL, usually:

http://localhost:5173


## **Assumptions & Limitations**

- The application uses Google DNS over HTTPS (https://dns.google/resolve) for TXT record lookups.
- Only SPF records starting with `v=spf1` are displayed.
- The app does not validate SPF syntax correctness; it only fetches and displays records.
- Multiple SPF records (if present) are shown as-is.
- DNS lookup depends on network availability and Google DNS uptime.
- This is a client-side only application—no backend is used.
- CORS policies may affect DNS lookups in restricted environments.