import Joi from 'joi';

export const ProductSchema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required(),
    img: Joi.string().required(),
})