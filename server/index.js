const express = require('express')
const app = express()
const path = require('path');
const port = 3000

app.get("/", function (req, res) {
 res.sendFile(path.join(__dirname, "../", "main.html"));
});

app.listen(process.env.PORT || port, () => console.log("working"))
