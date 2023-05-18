const categoryvalidaction = require("../../validateion/Categoryvalidaction")
const categorySarvice = require("../../services/admin/CategorySarvice")
class CategoryController {
    constructor() { }
    async createCategory(req, res){
        try {
            const validateRes =   categoryvalidaction.validateCategoryBodyParams(req.body);
            console.log("validate", validateRes);
            const response = {}
            if(validateRes && !validateRes.isValid){
                response.message = validateRes;
                res.statusCode = 422;
                res.json(response);
                return;
            }
            await categorySarvice.createcategory(req, res)
            console.log("response", response);
        } catch (error) {
            console.log("createCategory page error ::::::", error);
        }
    }
}
module.exports = new CategoryController();