import React, { FormEvent, useState } from "react";
import { MessageCircle, Send } from "lucide-react";
import { siteConfig } from "../config/site";

const initialForm = {
  name: "",
  phone: "",
  email: "",
  message: "",
};

const ContactForm: React.FC = () => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("");

  const updateField = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.name.trim() || !form.phone.trim() || !form.message.trim()) {
      setStatus("Lutfen ad, telefon ve mesaj alanlarini doldurun.");
      return;
    }

    const message = [
      "Merhaba Biz Aydin Grup, web sitesi formundan iletisim talebim var.",
      "",
      `Ad Soyad: ${form.name}`,
      `Telefon: ${form.phone}`,
      `E-posta: ${form.email || "-"}`,
      "",
      "Mesaj:",
      form.message,
    ].join("\n");

    const whatsappUrl = `https://wa.me/${
      siteConfig.whatsappNumber
    }?text=${encodeURIComponent(message)}`;

    setStatus("WhatsApp mesajiniz hazirlaniyor.");
    window.location.href = whatsappUrl;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-full rounded-lg border border-slate-200 bg-white p-6 text-slate-950 shadow-xl"
    >
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-white">
          <MessageCircle size={20} aria-hidden="true" />
        </div>
        <div>
          <h2 className="text-2xl font-bold">Iletisime Gecin</h2>
          <p className="text-sm text-slate-600">
            Projeniz icin kisa bir not birakin, WhatsApp uzerinden ulasalim.
          </p>
        </div>
      </div>

      <div className="grid min-w-0 gap-4 sm:grid-cols-2">
        <label className="min-w-0 text-sm font-semibold">
          Ad Soyad
          <input
            name="name"
            value={form.name}
            onChange={updateField}
            className="mt-2 w-full min-w-0 rounded-md border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-900 focus:ring-2 focus:ring-blue-900/20"
            autoComplete="name"
            required
          />
        </label>
        <label className="min-w-0 text-sm font-semibold">
          Telefon
          <input
            name="phone"
            value={form.phone}
            onChange={updateField}
            className="mt-2 w-full min-w-0 rounded-md border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-900 focus:ring-2 focus:ring-blue-900/20"
            autoComplete="tel"
            required
          />
        </label>
      </div>

      <label className="mt-4 block min-w-0 text-sm font-semibold">
        E-posta
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={updateField}
          className="mt-2 w-full min-w-0 rounded-md border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-900 focus:ring-2 focus:ring-blue-900/20"
          autoComplete="email"
        />
      </label>

      <label className="mt-4 block min-w-0 text-sm font-semibold">
        Mesaj
        <textarea
          name="message"
          value={form.message}
          onChange={updateField}
          rows={5}
          className="mt-2 w-full min-w-0 resize-none rounded-md border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-900 focus:ring-2 focus:ring-blue-900/20"
          required
        />
      </label>

      <button
        type="submit"
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#25D366] px-5 py-3 font-semibold text-white transition hover:bg-[#1ebe5d]"
      >
        <Send size={18} aria-hidden="true" />
        WhatsApp'a Gonder
      </button>

      {status && (
        <p className="mt-3 text-sm font-medium text-slate-700" role="status">
          {status}
        </p>
      )}
    </form>
  );
};

export default ContactForm;
