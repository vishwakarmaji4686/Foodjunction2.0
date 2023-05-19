const categoryvalidaction = require("../../validateion/Categoryvalidaction")
const categorySarvice = require("../../services/admin/CategorySarvice")
class CategoryController {
    constructor() { }
    async createCategory(req, res) {
        try {
            const validateRes = categoryvalidaction.validateCategoryBodyParams(req.body);
            console.log("validate", validateRes);
            const response = {}
            if (validateRes && !validateRes.isValid) {
                response.message = validateRes;
                res.statusCode = 422;
                res.json(response);
                return;
            }
            let resp = await categorySarvice.createcategory(req, res)
            console.log("res", resp);
        } catch (error) {
            console.log("createCategory page error ::::::", error);
        }
    }
    async getAllcategory(req, res) {
        try {
            let category = await categorySarvice.getAllCategory();
        res.statusCode = 200;
        res.json(category);
        } catch (error) {
            console.log("getAllcategory", getAllcategory);
        };
    }
    async getSingleCategory(req, res) {
        try {
            let category = await categorySarvice.getSingleCategory(req, res)
            res.statusCode = 200;
            res.json(category);
        } catch (error) {
            console.log("get single category by id :::", error);
        }
    };
    async deleteCategory(req, res){
        try {
            await categorySarvice.deleteCategory(req, res)
            res.statusCode = 204
            res.json(true);
        } catch (error) {
            
        }
    }
}
module.exports = new CategoryController();