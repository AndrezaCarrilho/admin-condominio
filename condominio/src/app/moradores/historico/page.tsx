"use client";

import { useState } from "react";
import { Search } from "lucide-react";

const moradoresMock = [
  { id: 1, nome: "José Antunes", tipo: "morador", apartamento: "101", periodo: "2018 - 2022" },
  { id: 2, nome: "Constância Ribeiro", tipo: "inquilino", apartamento: "101", periodo: "2022 - 2024" },
  { id: 3, nome: "João Batista", tipo: "morador", apartamento: "202", periodo: "2017 - 2021" },
  { id: 4, nome: "Clara Lima", tipo: "inquilino", apartamento: "202", periodo: "2021 - 2023" },
  { id: 5, nome: "Pedro Souza", tipo: "morador", apartamento: "301", periodo: "2016 - 2020" },
  { id: 6, nome: "Fernanda Alves", tipo: "inquilino", apartamento: "301", periodo: "2020 - 2022" },
  { id: 7, nome: "Lucas Pereira", tipo: "morador", apartamento: "401", periodo: "2015 - 2021" },
  { id: 8, nome: "Ana Beatriz", tipo: "inquilino", apartamento: "401", periodo: "2021 - 2024" },
];

export default function HistoricoMoradores() {
  const [mostrarInquilinos, setMostrarInquilinos] = useState(false);
  const [busca, setBusca] = useState("");
  const [paginaAtual, setPaginaAtual] = useState(1);
  const porPagina = 5;

  const filtrados = moradoresMock.filter(m => {
    const tipo = mostrarInquilinos ? "inquilino" : "morador";
    const corresponde = m.tipo === tipo && (m.nome.toLowerCase().includes(busca.toLowerCase()) || m.apartamento.includes(busca));
    return corresponde;
  });

  const totalPaginas = Math.ceil(filtrados.length / porPagina);
  const paginados = filtrados.slice((paginaAtual - 1) * porPagina, paginaAtual * porPagina);

  return (
    <div className="flex h-screen bg-cover bg-center bg-no-repeat justify-center items-center p-6" style={{ backgroundImage: "url('/imagempredio.png')" }}>
      <div className="bg-[#2ECC71] bg-opacity-90 p-8 md:p-10 rounded-3xl shadow-2xl w-full max-w-6xl">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-white">
            {mostrarInquilinos ? "Histórico de Inquilinos" : "Histórico de Moradores"}
          </h1>
          <button
            onClick={() => setMostrarInquilinos(!mostrarInquilinos)}
            className="bg-white text-[#17B689] font-semibold px-4 py-2 rounded-full hover:bg-[#e0e0e0] transition"
          >
            {mostrarInquilinos ? "Ver Moradores" : "Ver Inquilinos"}
          </button>
        </div>

        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="text-[#17B689]" size={20} />
          </div>
          <input
            type="text"
            placeholder="Buscar por nome ou apto..."
            value={busca}
            onChange={e => {
              setBusca(e.target.value);
              setPaginaAtual(1);
            }}
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700 bg-white text-gray-800"
          />
        </div>

        <div className="overflow-x-auto rounded-xl">
          <table className="min-w-full text-sm bg-white bg-opacity-95 rounded-xl">
            <thead className="bg-[#17B689] text-white text-left">
              <tr>
                <th className="px-6 py-3">Nome</th>
                <th className="px-6 py-3">Apartamento</th>
                <th className="px-6 py-3">Período</th>
              </tr>
            </thead>
            <tbody>
              {paginados.map((m) => (
                <tr key={m.id} className="border-b border-gray-200">
                  <td className="px-6 py-4">{m.nome}</td>
                  <td className="px-6 py-4">{m.apartamento}</td>
                  <td className="px-6 py-4">{m.periodo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between items-center mt-4">
          <span className="text-white">
            Mostrando página {paginaAtual} de {totalPaginas}
          </span>
          <div className="flex space-x-2">
            <button
              onClick={() => setPaginaAtual(prev => Math.max(prev - 1, 1))}
              disabled={paginaAtual === 1}
              className="bg-white text-[#17B689] font-semibold px-4 py-2 rounded hover:bg-[#e0e0e0] disabled:opacity-50"
            >
              Anterior
            </button>
            <button
              onClick={() => setPaginaAtual(prev => Math.min(prev + 1, totalPaginas))}
              disabled={paginaAtual === totalPaginas}
              className="bg-white text-[#17B689] font-semibold px-4 py-2 rounded hover:bg-[#e0e0e0] disabled:opacity-50"
            >
              Próxima
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
