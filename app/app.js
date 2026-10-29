const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html>
  <head>
      <title>Azure DevOps Demo</title>
      <style>
          body {
              font-family: Arial, sans-serif;
              margin: 0;
              height: 100vh;
              display: flex;
              justify-content: center;
              align-items: center;
              background: linear-gradient(135deg, #0078d4, #00b7ff, #36d1dc);
              color: white;
              text-align: center;
          }

          .card {
              background: rgba(255,255,255,0.1);
              padding: 40px;
              border-radius: 20px;
              backdrop-filter: blur(10px);
              box-shadow: 0 8px 20px rgba(0,0,0,0.2);
          }

          h1 {
              font-size: 3rem;
              margin-bottom: 10px;
          }

          h2 {
              font-weight: normal;
              color: #ffe082;
          }

          .status {
              margin-top: 20px;
              font-size: 20px;
              color: #90ee90;
          }

          .footer {
              margin-top: 30px;
              font-size: 14px;
              color: #f5f5f5;
          }
      </style>
  </head>
  <body>
      <div class="card">
          <h1>🚀 Azure CI/CD Pipeline</h1>
          <h2>Node.js + Docker + GitHub Actions + Azure</h2>

          <div class="status">
              ✅ Deployment Successful
          </div>

          <p>
              Application deployed automatically through GitHub Actions
          </p>

          <div class="footer">
              Built by Siva | Terraform | ACR | App Service
          </div>
      </div>
  </body>
  </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Application Started on port ${PORT}`);
});