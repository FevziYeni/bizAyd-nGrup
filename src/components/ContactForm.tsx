import React, { FormEvent, useState } from "react";
import { Mail, Send } from "lucide-react";
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
      setStatus("Lütfen ad, telefon ve mesaj alanlarını doldurun.");
      return;
    }

    const subject = encodeURIComponent("Biz Aydın Grup iletişim talebi");
    const body = encodeURIComponent(
      `Ad Soyad: ${form.name}\nTelefon: ${form.phone}\nE-posta: ${
        form.email || "-"
      }\n\nMesaj:\n${form.message}`
    );

    setStatus("E-posta uygulamanız açılıyor.");
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg border border-slate-200 bg-white p-6 text-slate-950 shadow-xl"
    >
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-950 text-white">
          <Mail size={20} aria-hidden="true" />
        </div>
        <div>
          <h2 className="text-2xl font-bold">İletişime Geçin</h2>
          <p className="text-sm text-slate-600">
            Projeniz için kısa bir not bırakın, size dönüş yapalım.
          </p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-semibold">
          Ad Soyad
          <input
            name="name"
            value={form.name}
            onChange={updateField}
            className="mt-2 w-full rounded-md border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-900 focus:ring-2 focus:ring-blue-900/20"
            autoComplete="name"
            required
          />
        </label>
        <label className="text-sm font-semibold">
          Telefon
          <input
            name="phone"
            value={form.phone}
            onChange={updateField}
            className="mt-2 w-full rounded-md border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-900 focus:ring-2 focus:ring-blue-900/20"
            autoComplete="tel"
            required
          />
        </label>
      </div>

      <label className="mt-4 block text-sm font-semibold">
        E-posta
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={updateField}
          className="mt-2 w-full rounded-md border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-900 focus:ring-2 focus:ring-blue-900/20"
          autoComplete="email"
        />
      </label>

      <label className="mt-4 block text-sm font-semibold">
        Mesaj
        <textarea
          name="message"
          value={form.message}
          onChange={updateField}
          rows={5}
          className="mt-2 w-full resize-none rounded-md border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-900 focus:ring-2 focus:ring-blue-900/20"
          required
        />
      </label>

      <button
        type="submit"
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-blue-950 px-5 py-3 font-semibold text-white transition hover:bg-gold hover:text-black"
      >
        <Send size={18} aria-hidden="true" />
        Gönder
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
