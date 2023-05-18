const express = require("express"); 
const app = express();
const adminrouter = require("./admin/adminRouter");

app.use("/admin", adminrouter);

module.exports = app;