"use client";

import Image from "next/image";
import { useState } from "react";
import { Calendar, Clock, FileText, Building2 } from "lucide-react";

export default function CancelarReserva() {
  const [formData, setFormData] = useState({
    nomeArea: "",
    data: "",
    horario: "",
    motivo: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reserva cancelada:", formData);
    // Enviar para backend aqui
  };

  return (
    <div className="flex h-screen bg-[#0D1A2E]">
      <main
        className="flex-1 flex flex-col items-center justify-start min-h-screen p-6 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/imagempredio.png')" }}
      >
        <form onSubmit={handleSubmit} className="w-full max-w-md mt-24">
      <div className="bg-[#2ECC71] bg-opacity-90 p-6 md:p-8 rounded-3xl shadow-2xl w-full max-w-md">
        <h1 className="text-white text-3xl font-bold mb-9 text-center">Cancelar Reserva</h1>

            <div className="space-y-4 mt-16">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Building2 size={20} className="text-[#17B689]" />
                </div>
                <input
                  type="text"
                  name="nomeArea"
                  placeholder="Área comum reservada"
                  value={formData.nomeArea}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-3 py-2 bg-white border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-green-700"
                />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Calendar size={20} className="text-[#17B689]" />
                </div>
                <input
                  type="date"
                  name="data"
                  value={formData.data}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-3 py-2 bg-white border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-green-700"
                />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Clock size={20} className="text-[#17B689]" />
                </div>
                <input
                  type="time"
                  name="horario"
                  value={formData.horario}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-3 py-2 bg-white border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-green-700"
                />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FileText size={20} className="text-[#17B689]" />
                </div>
                <textarea
                  name="motivo"
                  placeholder="Motivo do cancelamento (opcional)"
                  value={formData.motivo}
                  onChange={handleChange}
                  rows={3}
                  className="w-full pl-10 pr-3 py-2 bg-white border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-green-700"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#1E8449] text-white font-semibold py-3 mt-6 shadow-lg hover:bg-[#145A32] transition duration-300 ease-in-out"
          >
            CANCELAR RESERVA
          </button>
        </form>
      </main>
    </div>
  );
}
