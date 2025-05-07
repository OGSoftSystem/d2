"use server";

import { ContactSchema, ContactSchemaType } from "@/lib/validations";
import sendEmail from "./mail";

/**
 *
 * @bodyParam {ContactSchemaType}
 * @returns
 */

export const sendEmailToContact = async (
  data: ContactSchemaType
): Promise<{ success: boolean }> => {
  const parsedData = ContactSchema.safeParse(data);


  if (!parsedData.success) {
    return { success: false };
  }

  try {
    sendEmail({
      from: parsedData.data.email as string,
      to: process.env.EMAIL_USER as string,
      subject: "d2-feedback-form",
      text: `
      ${parsedData.data.firstName} ${parsedData.data.lastName} with  email: ${parsedData.data.email} sent a message:
      ${parsedData.data.message}.`,
    });

    return {
      success: true,
    };
  } catch (error) {
    console.log({ error });

    throw error;
  }
};
