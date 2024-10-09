import Joi from "joi";

export const authorValidationSchema = (req, res, next) => {
    const schema = Joi.object({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        bio: Joi.string().required(),
    });
    const {error} = schema.validate(req.body);
    if (error) return res.status(400).json({success: false, message: error.details[0].message});
    next();
}