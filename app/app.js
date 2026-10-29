const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("<h1>BlueGene Systems Procurement Portal</h1>");
});

app.listen(PORT, () => {
    console.log(`Application Started on port ${PORT}`);
});