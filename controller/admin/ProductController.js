const productValidaction = require("../../validateion/productValidaction");
const ProductServices = require("../../services/admin/ProductServices");
const httpConstants = require("../../helpers/constants/httpConstants");

class ProductController {
    async createProduct(req, res) {
        try {
            const validate = productValidaction.validateproductBodyParams(req.body);
            console.log("validate", validate);
            const response = {}
            if (validate && !validate.isValid) {
                response.message = validate;
                res.statusCode = 422;
                res.json(response);
                return;
            }
            await ProductServices.createProduct(req, res)
        } catch (error) {
            console.log("create product page error", error);
        }
    }

    async getAllProduct(req, res) {
        let product = await ProductServices.getAllProduct(req, res)
        console.log("product", product)
        res.statusCode = httpConstants.HTTP_SUCCESS
        res.json(product);
    }

    async deleteProductById(req, res) {
        try {
            await ProductServices.deleteProductById(req, res);
            res.statusCode = 204;
            res.json({});
        } catch (error) {
            console.log("Controller : deleteProductById ::  error", error);
        }
    }

    async getProductById(req, res) {
        try {
            const data = await ProductServices.getProductById(req, res);
            res.statusCode = 200;
            res.json(data);
        } catch (error) {
            console.log("Controller : getProductById ::  error", error);
        }
    }

}
module.exports = new ProductController();