const express = require("express"); 
const app = express();
const categoryController = require("../../controller/admin/CategoryController")

app.post("/", categoryController.createCategory)
/* app.get("/", categoryController.getAllCategory) */

module.exports = app;