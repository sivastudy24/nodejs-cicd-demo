const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello from Azure CI/CD Pipeline!");
});

app.get("/health", (req, res) => {
    res.send("Healthy");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Application Started on port ${PORT}`);
});
