'use client';

import SideNav from '../Components/sidenav'; 
import Image from 'next/image';


export default function CadastrarPage() {


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 
    console.log('Formulário de veículo enviado!');
    
  };

  return (
    <div className="flex h-screen bg-[#0D1A2E]"> 
      <SideNav />

      <main
        className="flex-1 flex flex-col items-center justify-center p-6 bg-cover bg-center"
        style={{ backgroundImage: "url('/imagempredio.png')" }}
      >
        <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col items-center">
          {/* container do formulário*/}
          <div className="bg-[#2ECC71] text-[#17B689] bg-opacity-90 p-8 md:p-10 rounded-3xl shadow-2xl w-full"> 
            
            <div className="flex justify-center mb-8"> 
              <Image
                src="/perfilveiculos.png" 
                alt="Cadastrar Veículo"
                width={120} 
                height={120}
                className="rounded-full"/>
            </div>
            {/* inputs do formulário de veiculos */}
            <div className="space-y-5">
              <div> 
                <input
                  type="text"
                  name="proprietario" 
                  placeholder=" Proprietário"
                  className="w-full pr-3 py-3 bg-white border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent"/>
              </div>

              <div>
                <input
                  type="text"
                  name="tipoVeiculo" 
                  placeholder=" Tipo (Ex: Carro, Moto, etc.)"
                  className="w-full pr-3 py-3 bg-white border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent"/>
              </div>

              <div>
                <input
                  type="text"
                  name="modeloVeiculo" 
                  placeholder=" Modelo"
                  className="w-full pr-3 py-3 bg-white border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent"
                />
              </div>

              <div>
                <input
                  type="text"
                  name=" corVeiculo" 
                  placeholder=" Cor"
                  className="w-full pr-3 py-3 bg-white border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent"
                />
              </div>

              <div>
                <input
                  type="text"
                  name="placaVeiculo" 
                  placeholder=" Placa"
                  className="w-full pr-3 py-3 bg-white border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent"
                />
              </div>

              <div className="flex space-x-4">
                <div className="w-1/2">
                  <input
                    type="text"
                    name="apartamento"
                    placeholder=" Apartamento"
                    className="w-full pr-3 py-3 bg-white border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent"
                  />
                </div>

                <div className="w-1/2">
                  <input
                    type="text"
                    name="bloco"
                    placeholder=" Bloco"
                    className="w-full pr-3 py-3 bg-white border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent"
                  />
                </div>
              </div>

            </div> 
          </div> 

          <button
            type="submit"
            className="w-full bg-[#1E8449] text-white font-semibold py-3 mt-8 rounded-none shadow-lg hover:bg-[#145A32] transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-800 focus:ring-opacity-50">
            CADASTRAR
          </button>

        </form> 
      </main>
    </div>
  );
}