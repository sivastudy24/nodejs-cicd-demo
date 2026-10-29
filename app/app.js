<!DOCTYPE html>
<html>
<head>
<title>BlueGene Systems</title>

<style>

body{
    margin:0;
    font-family:'Segoe UI';
    background:#f4f8fc;
}

.header{
    background:#0f172a;
    color:white;
    padding:20px;
    text-align:center;
}

.cards{
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    gap:20px;
    margin:30px;
}

.card{
    background:white;
    width:250px;
    padding:20px;
    border-radius:15px;
    box-shadow:0 5px 15px rgba(0,0,0,0.1);
    text-align:center;
}

.number{
    font-size:40px;
    color:#2563eb;
    font-weight:bold;
}

.status{
    margin:30px;
    background:white;
    padding:20px;
    border-radius:15px;
    box-shadow:0 5px 15px rgba(0,0,0,0.1);
}

.online{
    color:green;
    font-weight:bold;
}

.footer{
    text-align:center;
    margin-top:40px;
    color:#555;
}

</style>

</head>

<body>

<div class="header">

<h1>🚀 BlueGene Systems</h1>

<h3>Cloud Operations Dashboard</h3>

</div>

<div class="cards">

<div class="card">
<h2>Virtual Machines</h2>
<div class="number">28</div>
</div>

<div class="card">
<h2>Containers</h2>
<div class="number">145</div>
</div>

<div class="card">
<h2>Deployments</h2>
<div class="number">312</div>
</div>

<div class="card">
<h2>Availability</h2>
<div class="number">99.99%</div>
</div>

</div>

<div class="status">

<h2>System Status</h2>

<p class="online">✅ Azure Infrastructure Healthy</p>
<p class="online">✅ GitHub Actions Available</p>
<p class="online">✅ App Service Running</p>
<p class="online">✅ Docker Containers Healthy</p>

</div>

<div class="footer">

<h3>DevOps Pipeline Demonstration</h3>

<p>
Terraform | Azure | Docker | GitHub Actions | ACR | App Service
</p>

</div>

</body>
</html>