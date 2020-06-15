const express = require("express");
const nunjucks = require("nunjucks");
const app = express();

app.use(express.static("public"));

nunjucks.configure("views", {
    express: app,
    noCache: true
})


app.get("/", (req, res) => {
    res.render("index.html")
})


app.post("/", (req, res) => {
    res.render("index.html")
})


app.listen(3000);