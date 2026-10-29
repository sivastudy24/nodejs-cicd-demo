app.get("/", (req, res) => {
  res.send(`
<!DOCTYPE html>
<html>
<head>
  <title>BlueGen Procurement Portal</title>

  <style>
    body{
      margin:0;
      font-family:Segoe UI, Arial, sans-serif;
      background:linear-gradient(135deg,#0d47a1,#1976d2,#42a5f5);
      color:white;
    }

    .header{
      background:#002171;
      padding:20px;
      text-align:center;
      font-size:32px;
      font-weight:bold;
      box-shadow:0 2px 10px rgba(0,0,0,0.3);
    }

    .container{
      max-width:1200px;
      margin:auto;
      padding:30px;
    }

    .cards{
      display:flex;
      flex-wrap:wrap;
      gap:20px;
      justify-content:center;
    }

    .card{
      background:white;
      color:#333;
      width:280px;
      padding:25px;
      border-radius:15px;
      box-shadow:0 4px 12px rgba(0,0,0,0.2);
      text-align:center;
    }

    .card h2{
      color:#1565c0;
    }

    table{
      width:100%;
      margin-top:30px;
      border-collapse:collapse;
      background:white;
      color:black;
      border-radius:10px;
      overflow:hidden;
    }

    th{
      background:#1565c0;
      color:white;
      padding:12px;
    }

    td{
      padding:12px;
      text-align:center;
      border-bottom:1px solid #ddd;
    }

    .approved{
      color:green;
      font-weight:bold;
    }

    .pending{
      color:orange;
      font-weight:bold;
    }

    .footer{
      margin-top:40px;
      text-align:center;
      color:white;
    }
  </style>
</head>

<body>

<div class="header">
🚀 BlueGen Technologies - Procurement Portal
</div>

<div class="container">

<div class="cards">

<div class="card">
<h2>📦 Total Requests</h2>
<h1>128</h1>
</div>

<div class="card">
<h2>✅ Approved</h2>
<h1>94</h1>
</div>

<div class="card">
<h2>⏳ Pending</h2>
<h1>34</h1>
</div>

<div class="card">
<h2>💰 Budget</h2>
<h1>$85K</h1>
</div>

</div>

<table>
<tr>
<th>Request ID</th>
<th>Item</th>
<th>Department</th>
<th>Amount</th>
<th>Status</th>
</tr>

<tr>
<td>PO1001</td>
<td>Laptop Procurement</td>
<td>IT</td>
<td>$12,000</td>
<td class="approved">Approved</td>
</tr>

<tr>
<td>PO1002</td>
<td>Cloud Subscription</td>
<td>DevOps</td>
<td>$8,500</td>
<td class="approved">Approved</td>
</tr>

<tr>
<td>PO1003</td>
<td>Office Furniture</td>
<td>Admin</td>
<td>$5,700</td>
<td class="pending">Pending</td>
</tr>

<tr>
<td>PO1004</td>
<td>Software Licenses</td>
<td>Security</td>
<td>$15,000</td>
<td class="approved">Approved</td>
</tr>

</table>

<div class="footer">
<h3>✅ CI/CD Deployment Successful</h3>
<p>Hosted on Azure App Service | Docker | ACR | GitHub Actions | Terraform</p>
<p>BlueGen Technologies © 2026</p>
</div>

</div>

</body>
</html>
  `);
});