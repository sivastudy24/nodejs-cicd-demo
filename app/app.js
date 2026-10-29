const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html>
  <head>
    <title>BlueGene Procurement Portal</title>
    <style>
      body{
        margin:0;
        font-family:Segoe UI, Arial;
        background:linear-gradient(135deg,#0d47a1,#1976d2,#42a5f5);
        color:white;
      }

      .header{
        background:#002171;
        padding:20px;
        text-align:center;
        font-size:32px;
        font-weight:bold;
      }

      .container{
        padding:30px;
        text-align:center;
      }

      .card{
        background:white;
        color:black;
        padding:20px;
        border-radius:12px;
        width:300px;
        margin:auto;
      }
    </style>
  </head>

  <body>

    <div class="header">
      🚀 BlueGene Systems Procurement Portal
    </div>

    <div class="container">
      <div class="card">
        <h2>Total Requests</h2>
        <h1>128</h1>

        <h2>Approved</h2>
        <h1>94</h1>

        <h2>Pending</h2>
        <h1>34</h1>

        <h2>Budget</h2>
        <h1>$85K</h1>
      </div>
    </div>

  </body>
  </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Application Started on port ${PORT}`);
});