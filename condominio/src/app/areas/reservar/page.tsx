"use client";

import Image from "next/image";
import { useState } from "react";
import { User, Calendar, Clock, FileText } from "lucide-react";

export default function ReservarArea() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log("Reserva enviada:", data);
    // Aqui você pode fazer fetch POST para enviar ao backend
  };

  return (
    <div className="flex h-screen bg-cover bg-center bg-no-repeat justify-center items-center p-6" style={{ backgroundImage: "url('/imagempredio.png')" }}>
      <div className="bg-[#2ECC71] bg-opacity-90 p-8 md:p-10 rounded-3xl shadow-2xl w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-white text-center mb-6">Reservar Área Comum</h1>
        <form onSubmit={handleSubmit} className="space-y-4">

          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User size={20} className="text-[#17B689]" />
            </div>
            <input
              type="text"
              name="responsavel"
              placeholder="Nome completo do responsável"
              required
              className="w-full pl-10 pr-3 py-2 bg-white border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700"
            />
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FileText size={20} className="text-[#17B689]" />
            </div>
            <select
              name="area"
              required
              className="w-full pl-10 pr-3 py-2 bg-white border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700"
            >
              <option value="">Selecione a área comum</option>
              <option value="Salão de Festas">Salão de Festas</option>
              <option value="Churrasqueira">Churrasqueira</option>
              <option value="Piscina">Piscina</option>
              <option value="Quadra">Quadra</option>
            </select>
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Calendar size={20} className="text-[#17B689]" />
            </div>
            <input
              type="date"
              name="data"
              required
              className="w-full pl-10 pr-3 py-2 bg-white border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700"
            />
          </div>

          <div className="flex space-x-4">
            <div className="relative w-1/2">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Clock size={20} className="text-[#17B689]" />
              </div>
              <input
                type="time"
                name="horaInicio"
                required
                className="w-full pl-10 pr-3 py-2 bg-white border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700"
              />
            </div>
            <div className="relative w-1/2">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Clock size={20} className="text-[#17B689]" />
              </div>
              <input
                type="time"
                name="horaFim"
                required
                className="w-full pl-10 pr-3 py-2 bg-white border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700"
              />
            </div>
          </div>

          <textarea
            name="observacoes"
            placeholder="Observações (opcional)"
            className="w-full px-4 py-2 bg-white border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700"
            rows={3}
          />

          <button
            type="submit"
            className="w-full bg-[#1E8449] text-white font-semibold py-3 rounded-xl shadow-lg hover:bg-[#145A32] transition duration-300 ease-in-out"
          >
            Reservar
          </button>
        </form>
      </div>
    </div>
  );
}
