const ProductModel = require("../../model/admin/ProductModel")
class ProductServices {
    constructor() { }
    async createProduct(req, res) {
        const product = {
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            quantity: req.body.quantity,
            categoryId: req.body.categoryId,
        };
        await ProductModel.insertProduct(product)
        return true;
    }

    async getAllProduct(req, res) {
        let data = await ProductModel.getAllProduct()
        return data;
    }

    async deleteProductById(req, res) {
        const productId = req.params.productId;
        console.log("productId", productId);
        await ProductModel.deleteProductById(productId);
        return true;
    }
    
    async getProductById(req, res) {
        const productId = req.params.productId;
        console.log("productId", productId);
        const product = await ProductModel.getProductById(productId);
        return product;
    }

}
module.exports = new ProductServices();