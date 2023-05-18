const { connection } = require("../../config/MySql");
class ProductModel {
    constructor() { }
    async insertProduct(product) {
        return new Promise((resolve, reject) => {
            const insertQry = `INSERT INTO products(title, description, price, quantity, categoryid) VALUES('${product.title}', '${product.description}', '${product.price}', '${product.quantity}', '${product.categoryId}')`;
            connection.query(insertQry, function (error, result) {
                if (error) {
                    reject(error);
                } else {
                    resolve(true);
                }
            });
        });
    }

    getAllProduct() {
        return new Promise((resolve, reject) => {
            const getProducts = `SELECT * FROM products`
            connection.query(getProducts, function (error, result) {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            });
        });
    }

    deleteProductById(productId) {
        return new Promise((resolve, reject) => {
            const getProducts = `DELETE FROM products WHERE id='${productId}'`;
            connection.query(getProducts, function (error, result) {
                if (error) {
                    reject(error);
                } else {
                    resolve(true);
                }
            });
        });
    }

    getProductById(productId) {
        return new Promise((resolve, reject) => {
            const getProducts = `SELECT * FROM products WHERE id='${productId}'`;
            connection.query(getProducts, function (error, result) {
                if (error) {
                    reject(error);
                } else {
                    let product = {};
                    if (result && result.length > 0) {
                        product = result[0];
                    }
                    resolve(product);
                }
            });
        });
    }
};
module.exports = new ProductModel();
