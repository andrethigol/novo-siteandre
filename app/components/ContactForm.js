"use client";
import { useState } from "react";
import { site } from "@/lib/site";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", service: "Desenvolvimento de Sites", message: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const text = `Olá! Meu nome é ${form.name}.\nTelefone: ${form.phone}\nInteresse: ${form.service}\nMensagem: ${form.message || "Sem mensagem adicional."}`;
    const url = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="name">Nome</label>
        <input id="name" name="name" required value={form.name} onChange={handleChange} placeholder="Seu nome" />
      </div>
      <div className="form-field">
        <label htmlFor="phone">Telefone / WhatsApp</label>
        <input id="phone" name="phone" required value={form.phone} onChange={handleChange} placeholder="(00) 00000-0000" />
      </div>
      <div className="form-field">
        <label htmlFor="service">Serviço de interesse</label>
        <select id="service" name="service" value={form.service} onChange={handleChange}>
          <option>Desenvolvimento de Sites</option>
          <option>Lojas Virtuais</option>
          <option>Gestão de Tráfego Pago</option>
          <option>Ainda não sei — quero orientação</option>
        </select>
      </div>
      <div className="form-field">
        <label htmlFor="message">Mensagem</label>
        <textarea id="message" name="message" rows={4} value={form.message} onChange={handleChange} placeholder="Conte um pouco sobre seu projeto ou objetivo" />
      </div>
      <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
        Enviar pelo WhatsApp
      </button>
    </form>
  );
}
