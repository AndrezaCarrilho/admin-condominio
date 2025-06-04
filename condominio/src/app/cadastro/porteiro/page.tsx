"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { User, Mail, FileText, Lock, Building2 } from "lucide-react";

export default function CadastroPorteiro() {
  const router = useRouter();
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [predioId, setPredioId] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const novoPorteiro = {
      nomeCompleto,
      cpf,
      email,
      senha,
      predioId: parseInt(predioId),
    };

    try {
      const response = await fetch("http://localhost:8080/porteiros", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(novoPorteiro),
      });

      if (response.ok) {
        alert("Porteiro cadastrado com sucesso!");
        router.push("/");
      } else {
        alert("Erro ao cadastrar porteiro.");
      }
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
      alert("Erro ao conectar com o servidor.");
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
            <div className="relative bg-[#2ECC71] text-[#17B689] bg-opacity-90 p-8 md:p-10 pt-20 rounded-3xl shadow-2xl w-full max-w-md">
              <div className="absolute -top-30 left-1/2 transform -translate-x-1/2 z-10">
                <Image
                  src="/perfilmoradores.png"
                  alt="Perfil Porteiro"
                  width={190}
                  height={190}
                  className="rounded-full"
                />
              </div>

              <div className="space-y-2">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User size={20} className="text-[#17B689]" />
                  </div>
                  <input
                    type="text"
                    placeholder="Nome completo"
                    value={nomeCompleto}
                    onChange={(e) => setNomeCompleto(e.target.value)}
                    className="w-full pl-10 pr-3 py-3 bg-white border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700"
                    required
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail size={20} className="text-[#17B689]" />
                  </div>
                  <input
                    type="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-3 py-3 bg-white border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700"
                    required
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FileText size={20} className="text-[#17B689]" />
                  </div>
                  <input
                    type="text"
                    placeholder="CPF"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                    className="w-full pl-10 pr-3 py-3 bg-white border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700"
                    required
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock size={20} className="text-[#17B689]" />
                  </div>
                  <input
                    type="password"
                    placeholder="Senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    className="w-full pl-10 pr-3 py-3 bg-white border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700"
                    required
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Building2 size={20} className="text-[#17B689]" />
                  </div>
                  <input
                    type="text"
                    placeholder="ID do Prédio"
                    value={predioId}
                    onChange={(e) => setPredioId(e.target.value)}
                    className="w-full pl-10 pr-3 py-3 bg-white border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700"
                    required
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
        </form>
      </main>
    </div>
  );
}