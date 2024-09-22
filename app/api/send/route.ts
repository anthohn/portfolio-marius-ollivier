"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from '@/lib/utils';
import EmailTemplate from "@/app/emails/index";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderFirstName = formData.get("senderFirstName");
  const senderLastName = formData.get("senderLastName");
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // simple server-side validation
  if (!validateString(senderFirstName, 100)) {
    return {
      error: "Prénom invalide",
    };
  }
  if (!validateString(senderLastName, 100)) {
    return {
      error: "Nom invalide",
    };
  }
  if (!validateString(senderEmail, 500)) {
    return {
      error: "E-mail de l'expéditeur invalide",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Message invalide",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact de <onboarding@resend.dev>",
      to: "contact@marius-ollivier.ch",
      subject: "Message du formulaire de contact",
      replyTo: senderEmail,
      react: React.createElement(EmailTemplate, {
        senderFirstName,
        senderLastName,
        message,
        senderEmail,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};