const joi = require("joi");
class Categoryvalidaction {
    constructor() { }
    validateCategoryBodyParams(data){
        const response = {
            isValid: true,
            message: null
        };
        const schema = joi.object({
            title: joi.string().required(),
            description: joi.string().required()
        });
        const validateRes = schema.validate(data);
        if(validateRes && validateRes.error && validateRes.error.details){
            response.isValid = false,
            response.message = validateRes.error.details[0].message
        }
        console.log("response", response);
        return response;
    }

}
module.exports = new Categoryvalidaction();