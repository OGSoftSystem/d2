import { z } from "zod";

export const ContactSchema = z.object({
  firstName: z
    .string()
    .min(3, { message: "first name can not be less than 3 characters" })
    .max(20, { message: "name can not exceed 20 characters" }),
  lastName: z
    .string()
    .min(3, { message: "last name can not be less than 3 characters" })
    .max(20, { message: "name can not exceed 20 characters" }),
  email: z.string().email({ message: "Enter a valid email address" }),
  // phone: z
  //   .string()
  //   .min(11, { message: "phone can not be less than 11 characters" })
  //   .max(15, { message: "phone can not exceed 15 characters" }),

  message: z
    .string()
    .min(10, { message: "message can not be less than 10 characters" })
    .max(1000, { message: "message can not exceed 1000 characters" }),
});

export type ContactSchemaType = z.infer<typeof ContactSchema>;
