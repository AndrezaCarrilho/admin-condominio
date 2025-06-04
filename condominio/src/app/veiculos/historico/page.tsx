"use client";

import { useState } from "react";
import { Search } from "lucide-react";

const veiculosMock = [
  { id: 1, nome: "José Antunes", tipo: "morador", placa: "ABC-1234", apartamento: "101" },
  { id: 2, nome: "Constância Ribeiro", tipo: "visitante", placa: "XYZ-5678", apartamento: "101", dataHora: "02/06/2025 14:30" },
  { id: 3, nome: "João Batista", tipo: "morador", placa: "JKL-3456", apartamento: "202" },
  { id: 4, nome: "Clara Lima", tipo: "visitante", placa: "DEF-2345", apartamento: "202", dataHora: "01/06/2025 18:15" },
  { id: 5, nome: "Pedro Souza", tipo: "morador", placa: "GHI-6789", apartamento: "301" },
  { id: 6, nome: "Fernanda Alves", tipo: "visitante", placa: "MNO-4321", apartamento: "301", dataHora: "03/06/2025 10:00" },
  { id: 7, nome: "Lucas Pereira", tipo: "morador", placa: "PQR-8765", apartamento: "401" },
  { id: 8, nome: "Ana Beatriz", tipo: "visitante", placa: "STU-1098", apartamento: "401", dataHora: "03/06/2025 16:45" },
];

export default function HistoricoVeiculos() {
  const [mostrarVisitantes, setMostrarVisitantes] = useState(false);
  const [busca, setBusca] = useState("");
  const [paginaAtual, setPaginaAtual] = useState(1);
  const porPagina = 5;

  const filtrados = veiculosMock.filter(v => {
    const tipo = mostrarVisitantes ? "visitante" : "morador";
    const corresponde = v.tipo === tipo && (
      v.nome.toLowerCase().includes(busca.toLowerCase()) ||
      v.placa.toLowerCase().includes(busca.toLowerCase()) ||
      v.apartamento.includes(busca)
    );
    return corresponde;
  });

  const totalPaginas = Math.ceil(filtrados.length / porPagina);
  const paginados = filtrados.slice((paginaAtual - 1) * porPagina, paginaAtual * porPagina);

  return (
    <div className="flex h-screen bg-cover bg-center bg-no-repeat justify-center items-center p-6" style={{ backgroundImage: "url('/imagempredio.png')" }}>
      <div className="bg-[#2ECC71] bg-opacity-90 p-8 md:p-10 rounded-3xl shadow-2xl w-full max-w-6xl">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-white">
            {mostrarVisitantes ? "Veículos de Visitantes" : "Veículos de Moradores"}
          </h1>
          <button
            onClick={() => setMostrarVisitantes(!mostrarVisitantes)}
            className="bg-white text-[#17B689] font-semibold px-4 py-2 rounded-full hover:bg-[#e0e0e0] transition"
          >
            {mostrarVisitantes ? "Ver Moradores" : "Ver Visitantes"}
          </button>
        </div>

        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="text-[#17B689]" size={20} />
          </div>
          <input
            type="text"
            placeholder="Buscar por nome, placa ou apto..."
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
                <th className="px-6 py-3">Placa</th>
                <th className="px-6 py-3">Apartamento</th>
                {mostrarVisitantes && <th className="px-6 py-3">Data/Hora da visita</th>}
              </tr>
            </thead>
            <tbody>
              {paginados.map((v) => (
                <tr key={v.id} className="border-b border-gray-200">
                  <td className="px-6 py-4">{v.nome}</td>
                  <td className="px-6 py-4">{v.placa}</td>
                  <td className="px-6 py-4">{v.apartamento}</td>
                  {mostrarVisitantes && <td className="px-6 py-4">{v.dataHora}</td>}
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
