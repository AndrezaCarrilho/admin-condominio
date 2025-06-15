"use client";

import Image from "next/image";
import { useState } from "react";
import { Package, User, Mail, Calendar, Clock, Bell } from "lucide-react";

export default function RecebimentoEncomenda() {
  const [formData, setFormData] = useState({
    nomeDestinatario: "",
    apartamento: "",
    tipoEncomenda: "",
    dataRecebimento: "",
    horaRecebimento: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Encomenda recebida:", formData);
    // Fazer POST para backend aqui
  };

  return (
    <div className="flex h-screen bg-[#0D1A2E]">
      <main
        className="flex-1 flex flex-col items-center justify-start min-h-screen p-6 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/imagempredio.png')" }}
      >
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md flex flex-col items-center"
        >
          <div className="relative w-full flex justify-center mt-24">
            <div className="bg-[#2ECC71] bg-opacity-90 p-6 md:p-8 rounded-3xl shadow-2xl w-full max-w-md">
        <h1 className="text-white text-3xl font-bold mb-9 text-center">Registrar Recebimento</h1>

              <div className="space-y-2">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User size={20} className="text-[#17B689]" />
                  </div>
                  <input
                    type="text"
                    name="nomeDestinatario"
                    placeholder="Nome do destinatário"
                    value={formData.nomeDestinatario}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-3 py-2 bg-white border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700"
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail size={20} className="text-[#17B689]" />
                  </div>
                  <input
                    type="text"
                    name="apartamento"
                    placeholder="Apartamento"
                    value={formData.apartamento}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-3 py-2 bg-white border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700"
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Package size={20} className="text-[#17B689]" />
                  </div>
                  <input
                    type="text"
                    name="tipoEncomenda"
                    placeholder="Tipo de encomenda"
                    value={formData.tipoEncomenda}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-3 py-2 bg-white border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700"
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Calendar size={20} className="text-[#17B689]" />
                  </div>
                  <input
                    type="date"
                    name="dataRecebimento"
                    value={formData.dataRecebimento}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-3 py-2 bg-white border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700"
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Clock size={20} className="text-[#17B689]" />
                  </div>
                  <input
                    type="time"
                    name="horaRecebimento"
                    value={formData.horaRecebimento}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-3 py-2 bg-white border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700"
                  />
                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#1E8449] text-white font-semibold py-3 mt-6 rounded-none shadow-lg hover:bg-[#145A32] transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-800"
          >
            REGISTRAR RECEBIMENTO
          </button>
        </form>
      </main>
    </div>
  );
}