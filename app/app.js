const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
<!DOCTYPE html>
<html>
<head>
<title>BlueGene Systems - USD to INR Converter</title>

<style>
body{
    font-family:Segoe UI,Arial,sans-serif;
    margin:0;
    background:linear-gradient(135deg,#0d47a1,#2196f3,#64b5f6);
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
}

.container{
    background:white;
    padding:40px;
    border-radius:20px;
    width:450px;
    text-align:center;
    box-shadow:0 10px 25px rgba(0,0,0,0.3);
}

h1{
    color:#0d47a1;
}

input{
    width:80%;
    padding:12px;
    margin:10px;
    border-radius:8px;
    border:1px solid #ccc;
    font-size:18px;
}

button{
    background:#1976d2;
    color:white;
    border:none;
    padding:12px 20px;
    border-radius:8px;
    cursor:pointer;
    font-size:18px;
}

button:hover{
    background:#0d47a1;
}

#result{
    margin-top:20px;
    font-size:24px;
    font-weight:bold;
    color:green;
}
</style>
</head>

<body>

<div class="container">

<h1>💱 USD to INR Converter</h1>

<h3>BlueGene Systems Finance Portal</h3>

<input
  type="number"
  id="usd"
  placeholder="Enter USD Amount"
/>

<br><br>

<button onclick="convertCurrency()">
Convert
</button>

<div id="result"></div>

<p>Exchange Rate Used: 1 USD = ₹85</p>

</div>

<script>
function convertCurrency(){

  const usd =
      parseFloat(document.getElementById("usd").value);

  const rate = 85;

  const inr = usd * rate;

  document.getElementById("result").innerHTML =
      usd + " USD = ₹ " + inr.toFixed(2);
}
</script>

</body>
</html>
  `);
});

app.listen(PORT, () => {
  console.log(\`Application Started on port \${PORT}\`);
});