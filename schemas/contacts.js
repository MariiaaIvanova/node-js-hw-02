const Joi = require("joi");

const addSchema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": "missing name field",
  }),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required()
    .messages({
      "any.required": "missing email field",
    }),
  phone: Joi.string().min(10).max(15).required().messages({
    "any.required": "missing phone field",
  }),
});

const addPutSchema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": "missing required name field",
  }),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required()
    .messages({
      "any.required": "missing required email field",
    }),
  phone: Joi.string().min(10).max(15).required().messages({
    "any.required": "missing required phone field",
  }),
});

module.exports = {
  addSchema,
  addPutSchema,
};