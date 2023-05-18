const Joi = require("joi")
class productValidaction {
    constructor() { }
    validateproductBodyParams(data) {
        const response = {
            isValid: true,
            message: null
        };
        const schema = Joi.object({ 
            title: Joi.string().required(),
            description: Joi.string().required(),
            price: Joi.number().required(),
            quantity: Joi.number().required(),
            categoryId: Joi.number().required(),
        });
        const validateRes = schema.validate(data)
        console.log("validateRes", validateRes);
        if (validateRes && validateRes.error && validateRes.error.details) {
            response.isValid = false;
            response.message = validateRes.error.details[0].message;
        };
        return response;
    }

}
module.exports = new productValidaction();