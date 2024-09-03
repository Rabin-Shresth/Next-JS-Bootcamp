import z from "zod";

export const UserSchema=z.object({
    name: z.string({required_error: "Name is required!"}).min(3,"Character should be more than 3."),
    email: z.string({required_error:"Email is required !!"}).min(3,"Email length must be more than 3 characters.")
});