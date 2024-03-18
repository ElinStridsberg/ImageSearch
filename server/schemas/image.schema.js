const Joi = require("joi");

const imageSchema = Joi.object({
    url: Joi.string().required()
});

module.exports = imageSchema;
