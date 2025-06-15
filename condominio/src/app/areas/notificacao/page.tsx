"use client";

import { useState } from "react";
import { Calendar, Clock, FileText } from "lucide-react";

export default function NotificarReserva() {
  const [nome, setNome] = useState("");
  const [area, setArea] = useState("");
  const [data, setData] = useState("");
  const [hora, setHora] = useState("");
  const [descricao, setDescricao] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const dados = { nome, area, data, hora, descricao };
    console.log("Notificação enviada:", dados);
    // Aqui pode enviar para backend
  };

  return (
    <div className="flex h-screen bg-cover bg-center bg-no-repeat justify-center items-center p-6" style={{ backgroundImage: "url('/imagempredio.png')" }}>
      <div className="bg-[#2ECC71] bg-opacity-90 p-8 md:p-10 rounded-3xl shadow-2xl w-full max-w-md">
        <h1 className="text-white text-3xl font-bold mb-6 text-center">Notificar Reserva</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <label htmlFor="nome" className="sr-only">Nome</label>
            <input
              id="nome"
              type="text"
              placeholder="Nome completo"
              value={nome}
              onChange={e => setNome(e.target.value)}
              required
              className="w-full pl-3 pr-3 py-2 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700 bg-white text-gray-800"
            />
          </div>

          <div className="relative">
            <label htmlFor="area" className="sr-only">Área</label>
            <input
              id="area"
              type="text"
              placeholder="Área reservada"
              value={area}
              onChange={e => setArea(e.target.value)}
              required
              className="w-full pl-3 pr-3 py-2 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700 bg-white text-gray-800"
            />
          </div>

          <div className="relative">
            <label htmlFor="data" className="sr-only">Data</label>
            <div className="flex items-center">
              <Calendar className="text-[#17B689] mr-2" />
              <input
                id="data"
                type="date"
                value={data}
                onChange={e => setData(e.target.value)}
                required
                className="w-full pl-2 pr-3 py-2 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700 bg-white text-gray-800"
              />
            </div>
          </div>

          <div className="relative">
            <label htmlFor="hora" className="sr-only">Hora</label>
            <div className="flex items-center">
              <Clock className="text-[#17B689] mr-2" />
              <input
                id="hora"
                type="time"
                value={hora}
                onChange={e => setHora(e.target.value)}
                required
                className="w-full pl-2 pr-3 py-2 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700 bg-white text-gray-800"
              />
            </div>
          </div>

          <div className="relative">
            <label htmlFor="descricao" className="sr-only">Descrição (opcional)</label>
            <textarea
              id="descricao"
              placeholder="Descrição (opcional)"
              value={descricao}
              onChange={e => setDescricao(e.target.value)}
              rows={3}
              className="w-full pl-3 pr-3 py-2 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700 bg-white text-gray-800 resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#1E8449] text-white font-semibold py-3 rounded-xl shadow-lg hover:bg-[#145A32] transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-800 focus:ring-opacity-50"
          >
            ENVIAR NOTIFICAÇÃO
          </button>
        </form>
      </div>
    </div>
  );
}
