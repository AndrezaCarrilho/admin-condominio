"use client";

import { User, Mail, FileText } from "lucide-react";

export default function MensagemDireta() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log("Mensagem direta enviada:", data);
    // Aqui pode ser feito um fetch POST para o backend
  };

  return (
    <div className="flex h-screen bg-[#0D1A2E]">
      <main
        className="flex-1 flex flex-col items-center justify-center min-h-screen p-6 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/imagempredio.png')" }}
      >
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md flex flex-col items-center"
        >
          <div className="bg-[#2ECC71] bg-opacity-90 p-10 rounded-3xl shadow-2xl w-full">
            <h1 className="text-2xl font-bold text-white text-center mb-6">
              Mensagem Direta
            </h1>

            <div className="space-y-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User size={20} className="text-[#17B689]" />
                </div>
                <input
                  type="text"
                  name="destinatario"
                  placeholder="Nome do morador"
                  required
                  className="w-full pl-10 pr-3 py-2 bg-white border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-green-700"
                />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail size={20} className="text-[#17B689]" />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail do morador (opcional)"
                  className="w-full pl-10 pr-3 py-2 bg-white border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-green-700"
                />
              </div>

              <div className="relative">
                <div className="absolute top-3 left-3">
                  <FileText size={20} className="text-[#17B689]" />
                </div>
                <textarea
                  name="mensagem"
                  rows={4}
                  placeholder="Mensagem"
                  required
                  className="w-full pl-10 pr-3 py-2 bg-white border border-gray-300 rounded-xl shadow-sm resize-none focus:ring-2 focus:ring-green-700"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#1E8449] text-white font-semibold py-3 mt-6 shadow-lg hover:bg-[#145A32] transition"
            >
              ENVIAR MENSAGEM
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
