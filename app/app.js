const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello from Azure CI/CD Pipeline!");
});

app.get("/health", (req, res) => {
    res.send("Healthy");
});

app.listen(3000, () => {
    console.log("Application Started");
});