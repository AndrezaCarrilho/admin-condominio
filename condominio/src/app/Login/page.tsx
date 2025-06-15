"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [predioId, setPredioId] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ predioId, senha }),
      });

      if (response.ok) {
        router.push("/Dashboard");
      } else {
        alert("ID do prédio ou senha inválidos");
      }
    } catch (error) {
      alert("Erro ao conectar com o servidor");
    }
  };

  return (
    <div className="relative w-full h-screen text-white overflow-hidden">
      <Image
        src="/imagempredio.png"
        alt="Imagem de fundo"
        fill
        className="object-cover object-center z-0"
        priority
      />
      <div className="absolute inset-0 bg-[#071E3D]/80 z-10" />

      <div className="relative z-20 flex flex-col justify-between h-full px-8 md:px-16">
        <div className="flex-grow flex items-center">
          <div className="max-w-md w-full">
            <div className="mb-6">
              <div className="rounded-full w-35 h-35 flex items-center justify-center shadow-lg border-2 border-[#00C896]">
                <Image src="/logo.png" alt="Logo" width={100} height={100} />
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6">Login</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Digite o ID do prédio"
                value={predioId}
                onChange={(e) => setPredioId(e.target.value)}
                className="w-full px-4 py-3 bg-transparent border border-white rounded-md text-white placeholder-white focus:outline-none"
              />
              <input
                type="password"
                placeholder="Digite a sua senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className="w-full px-4 py-3 bg-transparent border border-white rounded-md text-white placeholder-white focus:outline-none"
              />

              <div className="text-xs text-white mt-2">
                <p>Política de privacidade</p>
                <p>Acordo de confidencialidade</p>
              </div>

              <button
                type="submit"
                className="bg-[#00C896] hover:bg-[#00b087] text-white py-2 px-8 font-bold rounded mt-4"
              >
                Entrar
              </button>

              <div className="flex justify-between mt-4 text-sm underline">
                <Link href="/cadastro/porteiro">Cadastrar Porteiro</Link>
                <Link href="/cadastro/predio">Cadastrar Prédio</Link>
              </div>
            </form>
          </div>
        </div>

        <div className="text-[10px] text-center text-white pb-4">
          O nosso site é de <strong>USO RESTRITO</strong> ao condomínio e portaria
          <br />
          <strong>MORADORES</strong> devem utilizar o APP disponíveis na Play Store ou Apple Store
        </div>
      </div>
    </div>
  );
}
