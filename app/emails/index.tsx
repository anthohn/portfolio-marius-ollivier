import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  senderFirstName: string,
  senderLastName: string,
  message: string;
  senderEmail: string;
};

export default function EmailTemplate ({
  senderFirstName,
  senderLastName,
  message,
  senderEmail,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Nouveau message de votre site portfolio</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">
                Vous avez reçu un message de {senderFirstName} {" "} {senderLastName} suivant depuis votre  <a href="marius-ollivier.ch" >portfolio</a>
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>L&apos;e-mail de l&apos;expéditeur est :{senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}