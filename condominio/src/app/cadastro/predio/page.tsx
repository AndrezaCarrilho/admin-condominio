"use client";

import Image from "next/image";
import { useState } from "react";
import { Building2, MapPin, Mail, Hash, Landmark } from "lucide-react";

export default function CadastroPredio() {
  const [form, setForm] = useState({
    nome: "",
    cep: "",
    endereco: "",
    numero: "",
    cnpj: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Dados do prédio:", form);
    // Aqui você pode fazer o POST para o backend
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex h-screen bg-[#0D1A2E]">
      <main
        className="flex-1 flex flex-col items-center justify-start p-6 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/imagempredio.png')" }}
      >
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md flex flex-col items-center mt-24"
        >
          <div className="bg-[#2ECC71] bg-opacity-90 p-8 md:p-10 rounded-3xl shadow-2xl w-full">
            <h1 className="text-white text-xl font-semibold text-center mb-6">
              Cadastro de Prédio
            </h1>

            <div className="space-y-4">
              {/* Nome do prédio */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Building2 size={20} className="text-[#17B689]" />
                </div>
                <input
                  type="text"
                  name="nome"
                  placeholder="Nome do prédio"
                  value={form.nome}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-3 py-2 bg-white border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700"
                />
              </div>

              {/* CEP */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MapPin size={20} className="text-[#17B689]" />
                </div>
                <input
                  type="text"
                  name="cep"
                  placeholder="CEP"
                  value={form.cep}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-3 py-2 bg-white border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700"
                />
              </div>

              {/* Endereço */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Landmark size={20} className="text-[#17B689]" />
                </div>
                <input
                  type="text"
                  name="endereco"
                  placeholder="Endereço"
                  value={form.endereco}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-3 py-2 bg-white border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700"
                />
              </div>

              {/* Número */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Hash size={20} className="text-[#17B689]" />
                </div>
                <input
                  type="text"
                  name="numero"
                  placeholder="Número"
                  value={form.numero}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-3 py-2 bg-white border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700"
                />
              </div>

              {/* CNPJ */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail size={20} className="text-[#17B689]" />
                </div>
                <input
                  type="text"
                  name="cnpj"
                  placeholder="CNPJ"
                  value={form.cnpj}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-3 py-2 bg-white border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#1E8449] text-white font-semibold py-3 mt-6 rounded-xl hover:bg-[#145A32] transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-800"
            >
              CADASTRAR PRÉDIO
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
