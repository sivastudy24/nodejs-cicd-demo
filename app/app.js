const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {

res.send(`
<!DOCTYPE html>
<html>

<head>

<style>

body{
    margin:0;
    font-family:Arial;
    background:linear-gradient(135deg,#2563eb,#06b6d4);
    color:white;
    text-align:center;
}

.container{
    margin-top:120px;
}

.card{
    background:white;
    color:black;
    width:500px;
    margin:auto;
    padding:30px;
    border-radius:20px;
}

</style>

</head>

<body>

<div class="container">

<div class="card">

<h1>🚀 BlueGene Systems</h1>

<h2>Cloud Operations Dashboard</h2>

<p>✅ Azure App Service Running</p>

<p>✅ GitHub Actions Connected</p>

<p>✅ Docker Running</p>

<p>✅ Terraform Infrastructure Active</p>

</div>

</div>

</body>

</html>
`);

});

app.listen(PORT, () => {
    console.log(`Application Started on port ${PORT}`);
});