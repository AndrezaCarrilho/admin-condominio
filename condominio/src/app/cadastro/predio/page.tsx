"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Building2, MapPin, Home, Hash, FileText } from "lucide-react";

export default function CadastroPredio() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    nome: "",
    cep: "",
    endereco: "",
    numero: "",
    cnpj: ""
  });

  const [predioId, setPredioId] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8080/predios", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        const data = await res.json();
        setPredioId(data.id);
        alert("Prédio cadastrado com sucesso!");
      } else {
        alert("Erro ao cadastrar prédio.");
      }
    } catch (err) {
      alert("Erro de conexão com o servidor.");
    }
  };

  return (
    <div className="flex h-screen bg-[#0D1A2E]">
      <main
        className="flex-1 flex flex-col items-center justify-start min-h-screen p-6 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/imagempredio.png')" }}
      >
        <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col items-center">
          <div className="relative w-full flex justify-center mt-24">
            <div className="relative bg-[#2ECC71] text-[#17B689] bg-opacity-90 p-8 md:p-4 pt-10 rounded-3xl shadow-2xl w-full max-w-md">
              <div className="absolute -top-24 left-1/2 transform -translate-x-1/2 z-10">
  <Image
    src="/perfilmoradores.png"
    alt="Logo Prédio"
    width={190}
    height={190}
    className="rounded-full"
  />
</div>

<h2 className="text-center text-xl font-bold mb-4 text-white mt-12">Cadastrar Prédio</h2>

              <div className="space-y-2">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                    <Building2 size={20} className="text-[#17B689]" />
                  </div>
                  <input
                    name="nome"
                    placeholder="Nome do Prédio"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-3 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-700"
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MapPin size={20} className="text-[#17B689]" />
                  </div>
                  <input
                    name="cep"
                    placeholder="CEP"
                    value={formData.cep}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-3 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-700"
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Home size={20} className="text-[#17B689]" />
                  </div>
                  <input
                    name="endereco"
                    placeholder="Endereço"
                    value={formData.endereco}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-3 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-700"
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Hash size={20} className="text-[#17B689]" />
                  </div>
                  <input
                    name="numero"
                    placeholder="Número"
                    value={formData.numero}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-3 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-700"
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FileText size={20} className="text-[#17B689]" />
                  </div>
                  <input
                    name="cnpj"
                    placeholder="CNPJ"
                    value={formData.cnpj}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-3 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-700"
                  />
                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#1E8449] text-white font-semibold py-3 mt-6 rounded-none shadow-lg hover:bg-[#145A32] transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-800"
          >
            CADASTRAR
          </button>

          <button
            type="button"
            onClick={() => router.push("/")}
            className="mt-4 w-full text-sm text-white underline"
          >
            Voltar para o login
          </button>

          {predioId && (
            <p className="text-white mt-4 text-center">
              ID do prédio cadastrado: <span className="font-bold">{predioId}</span>
            </p>
          )}
        </form>
      </main>
    </div>
  );
}
