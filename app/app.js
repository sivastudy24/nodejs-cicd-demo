const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {

res.send(`
<!DOCTYPE html>
<html>

<head>

<title>BlueGene Systems</title>

<style>

body{
    font-family:Segoe UI;
    margin:0;
    background:linear-gradient(135deg,#0D47A1,#42A5F5);
}

.header{
    background:#002171;
    color:white;
    text-align:center;
    padding:20px;
}

.dashboard{
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    gap:20px;
    margin-top:40px;
}

.card{
    background:white;
    width:250px;
    padding:20px;
    border-radius:15px;
    text-align:center;
    box-shadow:0 5px 15px rgba(0,0,0,0.2);
}

.card h2{
    color:#1565C0;
}

.footer{
    text-align:center;
    color:white;
    margin-top:40px;
}

</style>

</head>

<body>

<div class="header">

<h1>🚀 BlueGene Systems</h1>

<h3>Employee Self Service Portal</h3>

</div>

<div class="dashboard">

<div class="card">
<h2>👨‍💼 Employees</h2>
<h1>560</h1>
</div>

<div class="card">
<h2>🏢 Departments</h2>
<h1>12</h1>
</div>

<div class="card">
<h2>💻 Projects</h2>
<h1>34</h1>
</div>

<div class="card">
<h2>📊 Revenue</h2>
<h1>$2.4M</h1>
</div>

</div>

<div class="footer">

<h3>✅ Running on Azure App Service</h3>

<p>Docker | GitHub Actions | Azure Container Registry | Terraform</p>

</div>

</body>

</html>
`);

});

app.listen(PORT, () => {
    console.log(\`Application Started on port \${PORT}\`);
});
