const express = require("express"); 
const app = express();
const productController = require("../../controller/admin/ProductController")

app.post("/", productController.createProduct)

app.get("/", productController.getAllProduct);

app.get("/:productId", productController.getProductById);

app.delete("/:productId", productController.deleteProductById);

module.exports = app;