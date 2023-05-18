require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const fileUplode = require("express-fileupload");
const mainRouter = require("./router/")

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", mainRouter);

const port = process.env.PORT;
app.listen(port, function () {
    console.log(`servaer started at port: ${port}`);
});