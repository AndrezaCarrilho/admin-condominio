'use client';

export default function AdicionarMoradorPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-[#009f4d] mb-4">Adicionar Morador</h1>
      <p className="text-gray-700">Essa é uma tela de teste para adicionar um morador! 🏠</p>

      <form className="mt-6 space-y-4 max-w-md">
        <input
          type="text"
          placeholder="Nome do morador"
          className="w-full p-2 border border-gray-300 rounded-xl"
        />
        <input
          type="text"
          placeholder="Apartamento"
          className="w-full p-2 border border-gray-300 rounded-xl"
        />
        <input
          type="email"
          placeholder="E-mail"
          className="w-full p-2 border border-gray-300 rounded-xl"
        />
        <button
          type="submit"
          className="w-full bg-[#009f4d] text-white font-semibold py-2 rounded-xl hover:brightness-110 transition"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}
