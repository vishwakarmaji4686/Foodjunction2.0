const { connection } = require("../../config/MySql");
class CategoryModel {
    constructor() { }
    insertCategory(data){
        return new Promise((resolve, reject) => {
            const insertQry = `INSERT INTO category (title, description) VALUES('${data.title}', '${data.description}')`;
            connection.query(insertQry, function (error, result) {
                if (error) {
                    reject(error);
                } else {
                    resolve(true);
                }
            });
        });
    }
    getAllCategory(){
        return new Promise((resolve, reject) => {
            const getCategory = `SELECT * FROM category`
            connection.query(getCategory, function (error, result) {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            });
        });
    }
    getSingleCategory(id){
        return new Promise((resolve, reject) => {
            const getCategory = `SELECT * FROM category WHERE id ='${id}'`
            connection.query(getCategory, function (error, result) {
                if (error) {
                    reject(error);
                } else {
                    let category = {}
                    if(result && result.length > 0){
                        category = result[0]
                    }
                    resolve(category);
                }
            });
        });
    }
    deleteCategory(id){
        return new Promise((resolve, reject) => {
            const getCategory = `delete FROM category WHERE id ='${id}'`
            connection.query(getCategory, function (error, result) {
                if (error) {
                    reject(error);
                } else {
                    resolve(true);
                }
            });
        });
    }
}
module.exports = new CategoryModel();