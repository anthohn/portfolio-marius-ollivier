"use server";

import { Resend } from "resend";
// Make sure the file exists at the specified path, or update the import path if necessary
import EmailTemplate from "@/app/emails/index";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const formData = await request.formData();
  
  const senderFirstName = formData.get("senderFirstName") as string | null;
  const senderLastName = formData.get("senderLastName") as string | null;
  const senderEmail = formData.get("senderEmail") as string | null;
  const message = formData.get("message") as string | null;

// Vérifier si des champs sont manquants
if (!senderFirstName || !senderLastName || !senderEmail || !message) {
  return Response.json({ error: "Tous les champs sont requis." }, { status: 400 });
}

  try {
    const { data, error } = await resend.emails.send({
      from: "Contact de <onboarding@resend.dev>",
      to: "contact@marius-ollivier.ch",
      subject: "Message de votre portfolio",
      replyTo: senderEmail, // Utiliser senderEmail ici
      react: EmailTemplate({
        senderFirstName,
        senderLastName,
        message,
        senderEmail,
      }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
