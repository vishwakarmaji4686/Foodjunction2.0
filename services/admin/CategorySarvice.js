 const CategoryModel = require("../../model/admin/CategoryModel");
class categorySarvice{
    constructor(){}
    async createcategory(req, res){
        let category = {
            title: req.body.title,
            description: req.body.description,
        };
        await CategoryModel.insertCategory(category);
        return true;
    }
    async getAllCategory(){
        let data = await CategoryModel.getAllCategory();
        console.log("data", data);
        return data;
    }
    async getSingleCategory(req, res){
        const categoryId = req.params.categoryId;
        /* console.log("categoryId", categoryId); */
        let category = await CategoryModel.getSingleCategory(categoryId)
        console.log("category", category);
        return category;
    }
    async deleteCategory(req, res){
        let categoryId = req.params.categoryId;
        console.log("categoryId", categoryId);
        await CategoryModel.deleteCategory(categoryId)
    }
}
module.exports = new categorySarvice();