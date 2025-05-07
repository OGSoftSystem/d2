"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "./ui/form";

import { ContactSchema, ContactSchemaType } from "@/lib/validations";

import {
  CustomFormInput,
  CustomFormTextArea,
  CustomSubmitBtn,
} from "./form-inputs";
import { Separator } from "./ui/separator";
import { sendEmailToContact } from "@/mail/mail.actions";
import { toast } from "sonner";

const ContactForm = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  };
  const form = useForm<ContactSchemaType>({
    defaultValues: initialValues,
    resolver: zodResolver(ContactSchema),
  });
  const submitting = form.formState.isSubmitting;

 const onSubmitForm = async (data: ContactSchemaType) => {
    try {
      const { success }: { success: boolean } = await sendEmailToContact(data);

      if (success) {
        toast("Successful", {
          description: "Thank you for reaching out.",
        });
        form.reset();
      }
    } catch (error) {
      console.log(error);

      toast("Something went wrong", {
        description: "Could not send request",
      });
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmitForm)}
        className="rounded-4xl px-10 py-8 bg-app-black md:w-5/12 "
      >
        <h4 className="text-app-white dark:text-app-white mb-6 text-lg font-semibold">
          Contact Us
        </h4>

        <div className="mb-6">
          <CustomFormInput
            name="firstName"
            control={form.control}
            placeholder="First Name"
          />
          <Separator />
        </div>

        <div>
          <CustomFormInput
            name="lastName"
            control={form.control}
            placeholder="Last Name"
          />
          <Separator />
        </div>

        <div className="my-6">
          <CustomFormInput
            name="email"
            control={form.control}
            placeholder="Email"
          />
          <Separator />
        </div>

        <div>
          <CustomFormTextArea
            name="message"
            control={form.control}
            placeholder="Message"
          />
          <Separator />
        </div>

        <CustomSubmitBtn
          title="Send"
          isSubmitting={submitting}
          spinnerClassName="text-white"
          className="bg-app-white text-accent-foreground mt-6 cursor-pointer"
        />
      </form>
    </Form>
  );
};

export default ContactForm;
