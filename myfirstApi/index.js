const express = require("express");
const app = express();
require("dotenv").config();
const dbConnect = require("./config/dataBase");
const PORT = process.env.PORT || 2089;
app.listen(PORT, () => {
    console.log("We are running on " + PORT);
})
app.get("/", (req, res) => {
    res.send("Hello world");
})
dbConnect();

