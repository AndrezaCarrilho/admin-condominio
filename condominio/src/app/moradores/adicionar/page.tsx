"use client";

import Image from 'next/image';
import { User, Mail, FileText, Lock, PlusCircle } from 'lucide-react'; 
import { useState } from 'react';

export default function AdicionarPage() {
  const [isMorador, setIsMorador] = useState(true);
  const [apartamentoCadastrado, setApartamentoCadastrado] = useState(false);
  const [moradoresAdicionais, setMoradoresAdicionais] = useState<{nome: string}[]>([]);
  const [novoMoradorNome, setNovoMoradorNome] = useState('');
  const [apartamentoParaAluguel, setApartamentoParaAluguel] = useState(true); // simula estado do apto

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    if (isMorador) {
      // Simula cadastro do dono e apartamento
      console.log('Morador dono cadastrado:', data);
      setApartamentoCadastrado(true);
    } else {
      // Inquilino só se apto está para aluguel
      if (!apartamentoParaAluguel) {
        alert('Apartamento não está disponível para aluguel!');
        return;
      }
      console.log('Inquilino cadastrado:', data);
    }
  };

  const adicionarMorador = () => {
    if (novoMoradorNome.trim() === '') return;
    setMoradoresAdicionais([...moradoresAdicionais, { nome: novoMoradorNome.trim() }]);
    setNovoMoradorNome('');
  };

  return (
    <div className="flex h-screen bg-[#0D1A2E]"> 
      <main
        className="flex-1 flex flex-col items-center justify-start min-h-screen p-6 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/imagempredio.png')" }}>
        
        <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col items-center">

          <div className="relative w-full flex justify-center mt-24">
            <div className="relative bg-[#2ECC71] text-[#17B689] bg-opacity-90 p-8 md:p-10 pt-20 rounded-3xl shadow-2xl w-full max-w-md"> 
              
              <div className="absolute -top-30 left-1/2 transform -translate-x-1/2 z-10">
                <Image
                  src="/perfilmoradores.png"
                  alt="Perfil Morador"
                  width={190}
                  height={190}
                  className="rounded-full"
                />
              </div>

              <div className="space-y-2">
                {/* Formulário comum */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User size={20} className="text-[#17B689]" />
                  </div>
                  <input
                    type="text"
                    name="nomeCompleto" 
                    placeholder="Nome completo"
                    className="w-full pl-10 pr-3 py-2 bg-white border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent"
                    required
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail size={20} className="text-[#17B689]" />
                  </div>
                  <input
                    type="email"
                    name="email" 
                    placeholder="E-mail"
                    className="w-full pl-10 pr-3 py-2 bg-white border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent"
                    required
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FileText size={20} className="text-[#17B689]" />
                  </div>
                  <input
                    type="text"
                    name="cpf" 
                    placeholder="Cpf"
                    className="w-full pl-10 pr-3 py-2 bg-white border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent"
                    required
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User size={20} className="text-[#17B689]" />
                  </div>
                  <input
                    type="text"
                    name="apartamento"
                    placeholder="Apartamento"
                    className="w-full pl-10 pr-3 py-2 bg-white border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent"
                    required
                    disabled={apartamentoCadastrado && isMorador} // bloqueia se já cadastrado para evitar mudança
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock size={20} className="text-[#17B689]" />
                  </div>
                  <input
                    type="password"
                    name="senha" 
                    placeholder="Senha"
                    className="w-full pl-10 pr-3 py-2 bg-white border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent"
                    required
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock size={20} className="text-[#17B689]" />
                  </div>
                  <input
                    type="password"
                    name="confirmarSenha" 
                    placeholder="Confirme sua senha"
                    className="w-full pl-10 pr-3 py-2 bg-white border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent"
                    required
                  />
                </div>
              </div> 
            </div> 
          </div>

          {/* Toggle Morador / Inquilino */}
          <div className="flex items-center justify-center space-x-3 mt-8 w-full">
            <span 
              className={`cursor-pointer font-medium ${isMorador ? 'text-white' : 'text-gray-400 hover:text-gray-200'}`}
              onClick={() => setIsMorador(true)}
            >
              Morador
            </span>
            <div
              className={`w-12 h-6 flex items-center rounded-full p-0.5 cursor-pointer ${isMorador ? 'bg-orange-500 justify-start' : 'bg-orange-500 justify-end'}`}
              onClick={() => setIsMorador(!isMorador)}
            >
              <div className="w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ease-in-out"></div>
            </div>
            <span 
              className={`cursor-pointer font-medium ${!isMorador ? 'text-white' : 'text-gray-400 hover:text-gray-200'}`}
              onClick={() => setIsMorador(false)}
            >
              Inquilino
            </span>
           
            <input type="hidden" name="tipoUsuario" value={isMorador ? 'morador' : 'inquilino'} />
          </div>

          <button
            type="submit"
            className="w-full bg-[#1E8449] text-white font-semibold py-3 mt-6 rounded-none shadow-lg hover:bg-[#145A32] transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-800 focus:ring-opacity-50"
            disabled={ !isMorador && !apartamentoParaAluguel } // desabilita se inquilino e apto não disponível
          >
            CADASTRAR
          </button>
        </form> 

        {/* Se apartamento cadastrado e tipo morador: adiciona moradores */}
        {apartamentoCadastrado && isMorador && (
          <section className="w-full max-w-md mt-8 bg-[#2ECC71] bg-opacity-90 p-6 rounded-3xl shadow-2xl text-[#17B689]">
            <h2 className="text-lg font-semibold mb-4 text-white">Adicionar membros da família</h2>

            <div className="flex space-x-2 mb-4">
              <input
                type="text"
                placeholder="Nome do membro"
                value={novoMoradorNome}
                onChange={(e) => setNovoMoradorNome(e.target.value)}
                className="flex-grow px-4 py-2 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent"
              />
              <button
                onClick={adicionarMorador}
                className="bg-[#1E8449] hover:bg-[#145A32] text-white px-4 rounded-xl transition duration-300"
              >
                <PlusCircle size={24} />
              </button>
            </div>

            <ul className="list-disc list-inside space-y-1 text-white">
              {moradoresAdicionais.length === 0 && <li>Nenhum membro adicionado ainda.</li>}
              {moradoresAdicionais.map((m, i) => (
                <li key={i}>{m.nome}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Aviso se inquilino e apto não disponível */}
        {!isMorador && !apartamentoParaAluguel && (
          <p className="mt-8 text-red-600 font-semibold">
            Este apartamento não está disponível para aluguel. Não é possível cadastrar inquilinos.
          </p>
        )}

      </main>
    </div>
  );
}
