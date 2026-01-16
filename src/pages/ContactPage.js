import React from "react";
import ContactForm from "../components/ContactForm";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8 text-blue-800">Contact</h1>
      <ContactForm />
    </div>
  );
}
