"use client"; // apenas se estiver usando app router

import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="relative w-full h-screen bg-[#071E3D] flex items-center justify-center text-white overflow-hidden">
      {/* Fundo do prédio */}
      <Image
        src="/imagempredio.png"
        alt="Imagem de fundo"
        fill
        className="object-cover object-bottom opacity-80"
        priority
      />

      {/* Camada escura por cima do fundo */}
      <div className="absolute inset-0 bg-[#071E3D]/80 z-0" />

      {/* Container central */}
      <div className="relative z-10 w-full max-w-md p-8">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="bg-white rounded-full p-3 w-20 h-20 flex items-center justify-center">
            <Image src="/logo.png" alt="Logo" width={50} height={50} />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-center mb-6">Usuário cadastrado</h2>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Digite o seu usuário"
            className="w-full px-4 py-2 bg-transparent border border-white rounded text-white placeholder-white focus:outline-none"
          />
          <input
            type="password"
            placeholder="Digite a sua senha"
            className="w-full px-4 py-2 bg-transparent border border-white rounded text-white placeholder-white focus:outline-none"
          />

          <div className="text-xs text-white text-center">
            <p>Política de privacidade</p>
            <p>Acordo de confidencialidade</p>
          </div>

          <button
            type="submit"
            className="w-full bg-[#00C896] hover:bg-[#00b087] text-white py-2 rounded mt-2"
          >
            Entrar
          </button>
        </form>

        <p className="mt-6 text-[10px] text-center text-white">
          O nosso site é de <strong>USO RESTRITO</strong> ao condomínio e portaria <br />
          <strong>MORADORES</strong> devem utilizar o APP disponíveis na Play Store ou Apple Store
        </p>
      </div>
    </div>
  );
}
