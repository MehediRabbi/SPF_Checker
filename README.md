# SPF Checker

## How to Run the Application Locally

### Prerequisites
- Node.js (v16 or higher)
- npm

### Steps

```bash
git clone https://github.com/MehediRabbi/SPF_Checker.git
cd SPF_Checker
npm install
npm run dev
Open the application in your browser:
http://localhost:5173

## Assumptions & Limitations
The application uses Google DNS-over-HTTPS API to perform DNS TXT lookups.

An active internet connection is required.

Browsers cannot perform native DNS queries, so a third-party DNS API is used.

The app does not recursively resolve include: or redirect= SPF mechanisms.

No backend server is involved; the app runs entirely on the client side.
