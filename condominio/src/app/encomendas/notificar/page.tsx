"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, User, FileText } from "lucide-react";

export default function NotificarEncomenda() {
  const [form, setForm] = useState({ nome: "", apto: "", email: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Encomenda notificada:", form);
    // Enviar notificação para backend
  };

  return (
    <div className="flex h-screen bg-[#0D1A2E]">
      <main
        className="flex-1 flex flex-col items-center justify-start min-h-screen p-6 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/imagempredio.png')" }}
      >
        <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col items-center">
          <div className="relative w-full flex justify-center mt-24">
            <div className="bg-[#2ECC71] bg-opacity-90 p-6 md:p-8 rounded-3xl shadow-2xl w-full max-w-md">
        <h1 className="text-white text-3xl font-bold mb-9 text-center">Notificar</h1>

              <div className="space-y-4">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User size={20} className="text-[#17B689]" />
                  </div>
                  <input
                    type="text"
                    name="nome"
                    placeholder="Nome do destinatário"
                    value={form.nome}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 py-2 bg-white border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-green-700"
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FileText size={20} className="text-[#17B689]" />
                  </div>
                  <input
                    type="text"
                    name="apto"
                    placeholder="Apartamento"
                    value={form.apto}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 py-2 bg-white border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-green-700"
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail size={20} className="text-[#17B689]" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="E-mail para notificação"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 py-2 bg-white border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-green-700"
                  />
                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#1E8449] text-white font-semibold py-3 mt-6 shadow-lg hover:bg-[#145A32] transition"
          >
            NOTIFICAR DESTINATÁRIO
          </button>
        </form>
      </main>
    </div>
  );
}