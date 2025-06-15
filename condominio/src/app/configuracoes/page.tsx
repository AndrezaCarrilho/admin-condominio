"use client";

import { Settings2, UserCog, Lock, Bell, Building2 } from "lucide-react";

export default function TelaConfiguracoes() {
  const botoes = [
    { icon: <Settings2 size={32} />, label: "Sistema" },
    { icon: <UserCog size={32} />, label: "Administrador" },
    { icon: <Lock size={32} />, label: "Segurança" },
    { icon: <Bell size={32} />, label: "Notificações" },
    { icon: <Building2 size={32} />, label: "Estrutura" },
  ];

  return (
    <div className="flex h-screen bg-[#0D1A2E]">
      <main
        className="flex-1 flex flex-col items-center justify-start p-6 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/imagempredio.png')" }}
      >
        <div className="w-full max-w-lg mt-20 bg-[#2ECC71] bg-opacity-90 rounded-3xl p-8 shadow-2xl">
          <h1 className="text-white text-xl font-semibold text-center mb-6">
            Configurações
          </h1>

          <div className="grid grid-cols-3 gap-6 justify-items-center">
            {botoes.map((botao, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-white p-4 rounded-2xl shadow-md w-24 h-24 justify-center hover:bg-[#17B689] hover:text-white transition-colors text-[#17B689]"
              >
                {botao.icon}
                <span className="mt-2 text-xs font-semibold text-center">{botao.label}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
