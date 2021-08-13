import Joi from 'joi';

export const ProductSchema = Joi.object({
  
    name: Joi.string().required(),
    price: Joi.number().required(),
    img: Joi.string().required(),
})

export const PaymentSchema = Joi.object({
  
    name: Joi.string().required(),
    phone: Joi.string().required(),
    change: Joi.number().min(0).required(),
    
    
})