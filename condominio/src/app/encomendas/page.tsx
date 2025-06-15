"use client";

import { Search, Package, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function HistoricoEncomendas() {
  const [filtro, setFiltro] = useState("");
  const [paginaAtual, setPaginaAtual] = useState(1);

  const historicoMockado = [
    {
      id: 1,
      morador: "Joana Lima - Apto 204",
      dataRecebimento: "2025-06-10",
      dataRetirada: "2025-06-11",
      status: "Retirada",
    },
    {
      id: 2,
      morador: "Carlos Souza - Apto 101",
      dataRecebimento: "2025-06-13",
      dataRetirada: "",
      status: "Pendente",
    },
    {
      id: 3,
      morador: "Ana Beatriz - Apto 305",
      dataRecebimento: "2025-06-12",
      dataRetirada: "2025-06-12",
      status: "Retirada",
    },
    {
      id: 4,
      morador: "Lucas Mendes - Apto 502",
      dataRecebimento: "2025-06-14",
      dataRetirada: "",
      status: "Pendente",
    },
  ];

  const itensPorPagina = 2;

  const encomendasFiltradas = historicoMockado.filter((encomenda) =>
    encomenda.morador.toLowerCase().includes(filtro.toLowerCase())
  );

  const totalPaginas = Math.ceil(encomendasFiltradas.length / itensPorPagina);

  const encomendasPaginadas = encomendasFiltradas.slice(
    (paginaAtual - 1) * itensPorPagina,
    paginaAtual * itensPorPagina
  );

  const mudarPagina = (novaPagina: number) => {
    if (novaPagina >= 1 && novaPagina <= totalPaginas) {
      setPaginaAtual(novaPagina);
    }
  };

  return (
    <div className="flex h-screen bg-[#0D1A2E]">
      <main
        className="flex-1 flex flex-col items-center justify-start min-h-screen p-6 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/imagempredio.png')" }}
      >
        <div className="w-full max-w-3xl bg-[#2ECC71] bg-opacity-90 p-8 mt-20 rounded-3xl shadow-2xl">
          <h1 className="text-2xl font-bold text-white text-center mb-6">
            Histórico de Encomendas
          </h1>

          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={20} className="text-[#17B689]" />
            </div>
            <input
              type="text"
              placeholder="Buscar por nome do morador ou apartamento"
              value={filtro}
              onChange={(e) => {
                setFiltro(e.target.value);
                setPaginaAtual(1);
              }}
              className="w-full pl-10 pr-3 py-2 bg-white border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-green-700"
            />
          </div>

          <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
            {encomendasPaginadas.length > 0 ? (
              encomendasPaginadas.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-4 rounded-xl border border-gray-200 shadow flex flex-col gap-1"
                >
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Package size={18} className="text-[#17B689]" />
                    <span className="font-semibold">{item.morador}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar size={16} className="text-[#17B689]" />
                    Recebida em: {item.dataRecebimento}
                  </div>
                  {item.dataRetirada && (
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar size={16} className="text-[#17B689]" />
                      Retirada em: {item.dataRetirada}
                    </div>
                  )}
                  <div
                    className={`text-xs font-medium mt-1 w-fit px-2 py-1 rounded ${
                      item.status === "Retirada"
                        ? "bg-green-200 text-green-800"
                        : "bg-yellow-200 text-yellow-800"
                    }`}
                  >
                    {item.status}
                  </div>
                </div>
              ))
            ) : (
              <p className="text-white text-center mt-6">
                Nenhuma encomenda encontrada.
              </p>
            )}
          </div>

          {/* Paginação */}
          {totalPaginas > 1 && (
            <div className="mt-6 flex justify-between items-center text-white text-sm">
              <button
                onClick={() => mudarPagina(paginaAtual - 1)}
                disabled={paginaAtual === 1}
                className="flex items-center gap-1 disabled:opacity-50"
              >
                <ChevronLeft size={18} />
                Anterior
              </button>
              <span>
                Página {paginaAtual} de {totalPaginas}
              </span>
              <button
                onClick={() => mudarPagina(paginaAtual + 1)}
                disabled={paginaAtual === totalPaginas}
                className="flex items-center gap-1 disabled:opacity-50"
              >
                Próxima
                <ChevronRight size={18} />
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
