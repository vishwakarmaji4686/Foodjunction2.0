const express = require("express"); 
const app = express();
const categoryController = require("../../controller/admin/CategoryController");

app.post("/", categoryController.createCategory)
app.get("/", categoryController.getAllcategory)
app.get("/:categoryId", categoryController.getSingleCategory)
app.delete("/:categoryId", categoryController.deleteCategory)

module.exports = app;