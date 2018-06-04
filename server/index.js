const express = require('express')
const app = express()
const path = require('path');

app.get("/", function (req, res) {
 res.sendFile(path.join(__dirname, "../", "main.html"));
});

app.listen(3000, () => console.log("working"))
