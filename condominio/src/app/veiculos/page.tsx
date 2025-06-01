'use client';

export default function CadastrarVeiculoPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-[#009f4d] mb-4">Cadastrar Veículo</h1>
      <p className="text-gray-700">Preencha as informações do veículo abaixo. 🚙</p>

      <form className="mt-6 space-y-4 max-w-md">
        <input
          type="text"
          placeholder="Placa do veículo"
          className="w-full p-2 border border-gray-300 rounded-xl"
        />
        <input
          type="text"
          placeholder="Modelo"
          className="w-full p-2 border border-gray-300 rounded-xl"
        />
        <input
          type="text"
          placeholder="Cor"
          className="w-full p-2 border border-gray-300 rounded-xl"
        />
        <input
          type="text"
          placeholder="Nome do proprietário"
          className="w-full p-2 border border-gray-300 rounded-xl"
        />
        <button
          type="submit"
          className="w-full bg-[#009f4d] text-white font-semibold py-2 rounded-xl hover:brightness-110 transition"
        >
          Cadastrar Veículo
        </button>
      </form>
    </div>
  );
}
