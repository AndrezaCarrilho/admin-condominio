"use client";

import Image from "next/image";
import Link from "next/link";
import { Building2, Shield, Users, Clock, Phone, Mail } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="relative w-full min-h-screen text-white overflow-hidden">
      {/* Imagem de fundo */}
      <Image
        src="/imagempredio.png"
        alt="Imagem de fundo"
        fill
        className="object-cover object-center z-0"
        priority
      />
      
      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-[#071E3D]/80 z-10" />

      <div className="relative z-20 flex flex-col min-h-screen px-8 md:px-16">
        {/* Header */}
        <header className="flex justify-between items-center py-6">
          <div className="flex items-center space-x-3">
            <div className="rounded-full w-16 h-16 flex items-center justify-center shadow-lg border-2 border-[#00C896]">
              <Image src="/logo.png" alt="Logo" width={40} height={40} />
            </div>
            <h1 className="text-2xl font-bold">Admin Condomínio</h1>
          </div>
          
          <Link 
            href="https://willi4m14.pythonanywhere.com/painel"
            className="bg-[#00C896] hover:bg-[#00b087] text-white py-2 px-6 font-bold rounded transition-colors"
          >
            Acessar Sistema
          </Link>
        </header>

        {/* Conteúdo Principal */}
        <main className="flex-grow flex flex-col justify-center">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Gestão Completa
              <br />
              <span className="text-[#00C896]">para seu Condomínio</span>
            </h2>
            
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
              Sistema moderno e intuitivo para administração de condomínios.
              Controle total de moradores, visitantes, veículos e muito mais.
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
              <Link 
                href="/cadastro/predio"
                className="bg-[#00C896] hover:bg-[#00b087] text-white py-4 px-8 font-bold rounded-lg text-lg transition-colors"
              >
                Cadastrar Prédio
              </Link>
              <Link 
                href="/login"
                className="border-2 border-white hover:bg-white hover:text-[#071E3D] text-white py-4 px-8 font-bold rounded-lg text-lg transition-colors"
              >
                Fazer Login
              </Link>
            </div>
          </div>

          {/* Cards de Funcionalidades */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
              <Users className="w-12 h-12 text-[#00C896] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Gestão de Moradores</h3>
              <p className="text-gray-300">Controle completo de moradores e inquilinos</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
              <Shield className="w-12 h-12 text-[#00C896] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Controle de Acesso</h3>
              <p className="text-gray-300">Registro e monitoramento de visitantes</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
              <Building2 className="w-12 h-12 text-[#00C896] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Gestão de Veículos</h3>
              <p className="text-gray-300">Cadastro e controle de veículos</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
              <Clock className="w-12 h-12 text-[#00C896] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Relatórios</h3>
              <p className="text-gray-300">Históricos e dashboards completos</p>
            </div>
          </div>

          {/* Seção de Benefícios */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 max-w-4xl mx-auto border border-white/20">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">Por que escolher nosso sistema?</h3>
              <p className="text-gray-300 text-lg">Tecnologia moderna para uma gestão eficiente</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-[#00C896] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-2">Segurança Total</h4>
                <p className="text-gray-300">Seus dados protegidos com criptografia avançada</p>
              </div>

              <div className="text-center">
                <div className="bg-[#00C896] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-2">Disponível 24/7</h4>
                <p className="text-gray-300">Acesso ao sistema a qualquer hora, em qualquer lugar</p>
              </div>

              <div className="text-center">
                <div className="bg-[#00C896] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-2">Suporte Especializado</h4>
                <p className="text-gray-300">Equipe dedicada para auxiliar sua gestão</p>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="py-8 border-t border-white/20 mt-16">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <Phone className="w-5 h-5 text-[#00C896]" />
              <span className="text-sm">Suporte: (11) 99999-9999</span>
              <Mail className="w-5 h-5 text-[#00C896] ml-6" />
              <span className="text-sm">contato@admincondominio.com</span>
            </div>
            
            <div className="text-center">
              <p className="text-xs text-gray-300">
                Sistema de <strong>USO RESTRITO</strong> para administração condominial
              </p>
              <p className="text-xs text-gray-300 mt-1">
                <strong>MORADORES:</strong> Utilizem o APP disponível na Play Store
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}