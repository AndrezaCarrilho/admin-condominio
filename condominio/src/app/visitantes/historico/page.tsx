"use client";

import { useState } from "react";
import { Search } from "lucide-react";

const visitantesMock = [
  { id: 1, nome: "Carlos da Silva", dataVisita: "2025-06-02", horario: "14:00", apartamento: "202", tipo: "passado", documento: "123.456.789-00" },
  { id: 2, nome: "Joana Freitas", dataVisita: "2025-06-10", horario: "10:30", apartamento: "305", tipo: "agendado", documento: "987.654.321-00" },
  { id: 3, nome: "Marcos Lima", dataVisita: "2025-06-01", horario: "08:45", apartamento: "101", tipo: "passado", documento: "456.123.789-00" },
  { id: 4, nome: "Amanda Souza", dataVisita: "2025-06-15", horario: "16:00", apartamento: "402", tipo: "agendado", documento: "321.987.654-00" },
  { id: 5, nome: "Fernanda Torres", dataVisita: "2025-06-03", horario: "11:00", apartamento: "210", tipo: "passado", documento: "789.456.123-00" },
  { id: 6, nome: "Pedro Martins", dataVisita: "2025-06-12", horario: "13:30", apartamento: "112", tipo: "agendado", documento: "654.321.987-00" },
  { id: 7, nome: "Luciana Castro", dataVisita: "2025-06-04", horario: "15:15", apartamento: "309", tipo: "passado", documento: "321.654.987-00" },
  { id: 8, nome: "Bruno Teixeira", dataVisita: "2025-06-18", horario: "09:00", apartamento: "407", tipo: "agendado", documento: "159.753.486-00" },
  { id: 9, nome: "Renata Lima", dataVisita: "2025-06-05", horario: "17:45", apartamento: "504", tipo: "passado", documento: "852.456.123-00" },
  { id: 10, nome: "Diego Alves", dataVisita: "2025-06-20", horario: "12:20", apartamento: "601", tipo: "agendado", documento: "741.258.963-00" },
];

export default function HistoricoVisitantes() {
  const [mostrarAgendados, setMostrarAgendados] = useState(false);
  const [busca, setBusca] = useState("");
  const [paginaAtual, setPaginaAtual] = useState(1);
  const visitantesPorPagina = 5;

  const visitantesFiltrados = visitantesMock.filter(v => {
    const tipoCorreto = mostrarAgendados ? v.tipo === "agendado" : v.tipo === "passado";
    const correspondeBusca = v.nome.toLowerCase().includes(busca.toLowerCase()) || v.dataVisita.includes(busca);
    return tipoCorreto && correspondeBusca;
  });

  const totalPaginas = Math.ceil(visitantesFiltrados.length / visitantesPorPagina);
  const visitantesPaginados = visitantesFiltrados.slice((paginaAtual - 1) * visitantesPorPagina, paginaAtual * visitantesPorPagina);

  return (
    <div
      className="flex h-screen bg-cover bg-center bg-no-repeat justify-center items-center p-6"
      style={{ backgroundImage: "url('/imagempredio.png')" }}
    >
      <div className="bg-[#2ECC71] bg-opacity-90 p-8 md:p-10 rounded-3xl shadow-2xl w-full max-w-6xl">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-white">
            {mostrarAgendados ? "Visitantes Agendados" : "Histórico de Visitantes"}
          </h1>
          <button
            onClick={() => setMostrarAgendados(!mostrarAgendados)}
            className="bg-white text-[#17B689] font-semibold px-4 py-2 rounded-full hover:bg-[#e0e0e0] transition"
          >
            {mostrarAgendados ? "Ver Visitantes Anteriores" : "Ver Agendados"}
          </button>
        </div>

        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="text-[#17B689]" size={20} />
          </div>
          <input
            type="text"
            placeholder="Buscar por nome ou data..."
            value={busca}
            onChange={e => {
              setBusca(e.target.value);
              setPaginaAtual(1);
            }}
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent bg-white text-gray-800"
          />
        </div>

        <div className="overflow-x-auto rounded-xl">
          <table className="min-w-full text-sm bg-white bg-opacity-95 rounded-xl">
            <thead className="bg-[#17B689] text-white text-left">
              <tr>
                <th className="px-6 py-3">Nome</th>
                <th className="px-6 py-3">Documento</th>
                <th className="px-6 py-3">Data</th>
                <th className="px-6 py-3">Horário</th>
                <th className="px-6 py-3">Apartamento</th>
                <th className="px-6 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {visitantesPaginados.map((visitante) => (
                <tr key={visitante.id} className="border-b border-gray-200">
                  <td className="px-6 py-4">{visitante.nome}</td>
                  <td className="px-6 py-4">{visitante.documento}</td>
                  <td className="px-6 py-4">{visitante.dataVisita}</td>
                  <td className="px-6 py-4">{visitante.horario}</td>
                  <td className="px-6 py-4">{visitante.apartamento}</td>
                  <td className="px-6 py-4">
                    {visitante.tipo === "agendado" ? "Agendado" : "Concluído"}
                  </td>
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
