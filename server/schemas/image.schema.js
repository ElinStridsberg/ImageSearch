const Joi = require("joi");

const imageSchema = Joi.object({
    user: Joi.string().required(),
    image: Joi.string().uri().required()

});

module.exports = imageSchema;

