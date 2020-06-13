const express = require("express");
const nunjucks = require("nunjucks");
const app = express();

express.static("public");

nunjucks.configure("views",
    {
        express: app
    })


app.get("/", (req, res) => {
    res.render("index.html")
})

app.listen(3000);