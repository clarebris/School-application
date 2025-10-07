// validations/userValidation.js
import Joi from "joi";

export const registerValidation = Joi.object({
  name: Joi.string()
    .min(3)
    .max(50)
    .regex(/^[A-Za-z\s]+$/)
    .message("Name must only contain letters and spaces")
    .required(),

  email: Joi.string()
    .email()
    .required()
    .messages({
      "string.email": "Email must be a valid address and contain '@'",
    }),

  password: Joi.string()
    .min(8)
    .max(32)
    .pattern(
      new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$"
      )
    )
    .required()
    .messages({
      "string.pattern.base":
        "Password must include at least 1 uppercase, 1 lowercase, 1 number, and 1 special character.",
    }),
});

// ✅ Fixed: Added proper closing brackets here
export const loginValidation = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).max(32).required(),
});
