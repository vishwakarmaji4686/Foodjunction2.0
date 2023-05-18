const express = require("express"); 
const app = express();
const productRouter = require("./productRouter");
const categoryRouter = require("./CategoryRouter") 

app.use("/product", productRouter);

app.use("/category", categoryRouter);

module.exports = app;