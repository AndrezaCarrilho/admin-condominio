"use client";

import Image from "next/image";
import { Car, FileText, Calendar, Clock, User } from "lucide-react";
import { useState } from "react";

export default function PreCadastroVeiculo() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log("Pré-cadastro de veículo enviado!", data);
    // Aqui pode fazer fetch POST para backend
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
            <div className="relative bg-[#2ECC71] text-[#17B689] bg-opacity-90 p-8 md:p-10 pt-20 rounded-3xl shadow-2xl w-full max-w-md">
              <div className="absolute -top-24 left-1/2 transform -translate-x-1/2 z-10">
                <Image
                  src="/perfilveiculos.png"
                  alt="Perfil Veículo"
                  width={130}
                  height={130}
                  className="rounded-full"
                />
              </div>

              <div className="space-y-2">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Car size={20} className="text-[#17B689]" />
                  </div>
                  <input
                    type="text"
                    name="modelo"
                    placeholder="Modelo do veículo"
                    className="w-full pl-10 pr-3 py-2 bg-white border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent"
                    required
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FileText size={20} className="text-[#17B689]" />
                  </div>
                  <input
                    type="text"
                    name="placa"
                    placeholder="Placa do veículo"
                    className="w-full pl-10 pr-3 py-2 bg-white border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent"
                    required
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FileText size={20} className="text-[#17B689]" />
                  </div>
                  <input
                    type="text"
                    name="cor"
                    placeholder="Cor do veículo"
                    className="w-full pl-10 pr-3 py-2 bg-white border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent"
                    required
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User size={20} className="text-[#17B689]" />
                  </div>
                  <input
                    type="text"
                    name="nomeDono"
                    placeholder="Nome do dono do veículo"
                    className="w-full pl-10 pr-3 py-2 bg-white border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent"
                    required
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Calendar size={20} className="text-[#17B689]" />
                  </div>
                  <input
                    type="date"
                    name="dataEntrada"
                    className="w-full pl-10 pr-3 py-2 bg-white border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent"
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Clock size={20} className="text-[#17B689]" />
                  </div>
                  <input
                    type="time"
                    name="horaEntrada"
                    className="w-full pl-10 pr-3 py-2 bg-white border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#1E8449] text-white font-semibold py-3 mt-6 rounded-none shadow-lg hover:bg-[#145A32] transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-800 focus:ring-opacity-50"
          >
            PRÉ-CADASTRAR
          </button>
        </form>
      </main>
    </div>
  );
}
