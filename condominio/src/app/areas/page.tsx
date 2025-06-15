"use client";

import { useState } from "react";
import { Search } from "lucide-react";

const reservasMock = [
  { id: 1, nome: "José Antunes", area: "Churrasqueira", data: "2025-06-10", hora: "18:00" },
  { id: 2, nome: "Maria Silva", area: "Salão de Festas", data: "2025-06-12", hora: "20:00" },
  { id: 3, nome: "Carlos Pereira", area: "Quadra", data: "2025-06-15", hora: "09:00" },
  { id: 4, nome: "Ana Beatriz", area: "Churrasqueira", data: "2025-06-18", hora: "14:00" },
  { id: 5, nome: "Fernanda Alves", area: "Salão de Festas", data: "2025-06-20", hora: "19:00" },
  { id: 6, nome: "Lucas Pereira", area: "Quadra", data: "2025-06-22", hora: "08:00" },
];

export default function HistoricoReservas() {
  const [busca, setBusca] = useState("");
  const [paginaAtual, setPaginaAtual] = useState(1);
  const porPagina = 4;

  const filtrados = reservasMock.filter(r => 
    r.nome.toLowerCase().includes(busca.toLowerCase()) ||
    r.area.toLowerCase().includes(busca.toLowerCase()) ||
    r.data.includes(busca)
  );

  const totalPaginas = Math.ceil(filtrados.length / porPagina);
  const paginados = filtrados.slice((paginaAtual - 1) * porPagina, paginaAtual * porPagina);

  return (
    <div className="flex h-screen bg-cover bg-center bg-no-repeat justify-center items-center p-6" style={{ backgroundImage: "url('/imagempredio.png')" }}>
      <div className="bg-[#2ECC71] bg-opacity-90 p-8 md:p-10 rounded-3xl shadow-2xl w-full max-w-5xl">
        <h1 className="text-white text-3xl font-bold mb-6 text-center">Histórico de Reservas</h1>

        <div className="relative mb-6 max-w-sm mx-auto">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="text-[#17B689]" size={20} />
          </div>
          <input
            type="text"
            placeholder="Buscar por nome, área ou data..."
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
                <th className="px-6 py-3">Área</th>
                <th className="px-6 py-3">Data</th>
                <th className="px-6 py-3">Hora</th>
              </tr>
            </thead>
            <tbody>
              {paginados.map(r => (
                <tr key={r.id} className="border-b border-gray-200">
                  <td className="px-6 py-4">{r.nome}</td>
                  <td className="px-6 py-4">{r.area}</td>
                  <td className="px-6 py-4">{r.data}</td>
                  <td className="px-6 py-4">{r.hora}</td>
                </tr>
              ))}
              {paginados.length === 0 && (
                <tr>
                  <td colSpan={4} className="text-center p-4 text-gray-500">Nenhuma reserva encontrada.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between items-center mt-4">
          <span className="text-white">
            Mostrando página {paginaAtual} de {totalPaginas}
          </span>
          <div className="flex space-x-2">
            <button
              onClick={() => setPaginaAtual(p => Math.max(p - 1, 1))}
              disabled={paginaAtual === 1}
              className="bg-white text-[#17B689] font-semibold px-4 py-2 rounded hover:bg-[#e0e0e0] disabled:opacity-50"
            >
              Anterior
            </button>
            <button
              onClick={() => setPaginaAtual(p => Math.min(p + 1, totalPaginas))}
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
