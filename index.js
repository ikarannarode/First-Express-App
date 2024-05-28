const express = require("express");
require('dotenv').config();
// const PORT = 5000;
const app = express();
app.get("/", (req, res) => {
    res.send("Hello World")
})
app.get("/about", (req, res) => {
    res.send("Hello this is about page")
})
app.get("/profile", (req, res) => {
    res.send("<h1>Hello this is response page for profile</h1>")
})
app.listen(process.env.PORT, () => {
    console.log(`Server is workin on http://localhost:${process.env.PORT}`)
})