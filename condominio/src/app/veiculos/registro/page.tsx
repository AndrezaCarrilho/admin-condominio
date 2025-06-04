'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function CadastrarPage() {
  const [formData, setFormData] = useState({
    proprietario: '',
    tipoVeiculo: '',
    modeloVeiculo: '',
    corVeiculo: '',
    placaVeiculo: '',
    apartamento: '',
    bloco: '',
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/veiculos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Veículo cadastrado com sucesso!');
        setFormData({
          proprietario: '',
          tipoVeiculo: '',
          modeloVeiculo: '',
          corVeiculo: '',
          placaVeiculo: '',
          apartamento: '',
          bloco: '',
        });
      } else {
        alert('Erro ao cadastrar veículo');
      }
    } catch (error) {
      console.error('Erro ao enviar:', error);
      alert('Erro de conexão com o servidor');
    }
  };

  return (
    <div className="flex h-screen bg-[#0D1A2E]">
      <main
        className="flex-1 flex flex-col items-center justify-center p-6 bg-cover bg-center"
        style={{ backgroundImage: "url('/imagempredio.png')" }}
      >
        <form onSubmit={handleSubmit} className="w-full max-w-sm flex flex-col items-center">
          <div className="bg-[#2ECC71] text-[#17B689] bg-opacity-90 p-4 md:p-6 rounded-3xl shadow-2xl w-full">
            <div className="flex justify-center mb-4">
              <Image
                src="/perfilveiculos.png"
                alt="Cadastrar Veículo"
                width={100}
                height={100}
                className="rounded-full"
              />
            </div>

            <div className="space-y-4">
              <input
                type="text"
                name="proprietario"
                placeholder=" Proprietário"
                value={formData.proprietario}
                onChange={(e) => setFormData({ ...formData, proprietario: e.target.value })}
                className="w-full pr-3 py-3 bg-white border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent"
              />

              <input
                type="text"
                name="tipoVeiculo"
                placeholder=" Tipo (Ex: Carro, Moto, etc.)"
                value={formData.tipoVeiculo}
                onChange={(e) => setFormData({ ...formData, tipoVeiculo: e.target.value })}
                className="w-full pr-3 py-3 bg-white border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent"
              />

              <input
                type="text"
                name="modeloVeiculo"
                placeholder=" Modelo"
                value={formData.modeloVeiculo}
                onChange={(e) => setFormData({ ...formData, modeloVeiculo: e.target.value })}
                className="w-full pr-3 py-3 bg-white border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent"
              />

              <input
                type="text"
                name="corVeiculo"
                placeholder=" Cor"
                value={formData.corVeiculo}
                onChange={(e) => setFormData({ ...formData, corVeiculo: e.target.value })}
                className="w-full pr-3 py-3 bg-white border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent"
              />

              <input
                type="text"
                name="placaVeiculo"
                placeholder=" Placa"
                value={formData.placaVeiculo}
                onChange={(e) => setFormData({ ...formData, placaVeiculo: e.target.value })}
                className="w-full pr-3 py-3 bg-white border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent"
              />

              <div className="flex space-x-4">
                <div className="w-1/2">
                  <input
                    type="text"
                    name="apartamento"
                    placeholder=" Apartamento"
                    value={formData.apartamento}
                    onChange={(e) => setFormData({ ...formData, apartamento: e.target.value })}
                    className="w-full pr-3 py-3 bg-white border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent"
                  />
                </div>

                <div className="w-1/2">
                  <input
                    type="text"
                    name="bloco"
                    placeholder=" Bloco"
                    value={formData.bloco}
                    onChange={(e) => setFormData({ ...formData, bloco: e.target.value })}
                    className="w-full pr-3 py-3 bg-white border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#1E8449] text-white font-semibold py-3 mt-8 rounded-none shadow-lg hover:bg-[#145A32] transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-800 focus:ring-opacity-50"
          >
            CADASTRAR
          </button>
        </form>
      </main>
    </div>
  );
}
