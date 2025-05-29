'use client';

export default function CadastrarMoradorPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-[#009f4d] mb-4">Cadastrar Morador</h1>
      <p className="text-gray-700">Preencha os dados do novo morador abaixo. 🧑‍🦱🏡</p>

      <form className="mt-6 space-y-4 max-w-md">
        <input
          type="text"
          placeholder="Nome completo"
          className="w-full p-2 border border-gray-300 rounded-xl"
        />
        <input
          type="text"
          placeholder="CPF"
          className="w-full p-2 border border-gray-300 rounded-xl"
        />
        <input
          type="text"
          placeholder="Número do apartamento"
          className="w-full p-2 border border-gray-300 rounded-xl"
        />
        <input
          type="text"
          placeholder="Bloco"
          className="w-full p-2 border border-gray-300 rounded-xl"
        />
        <input
          type="tel"
          placeholder="Telefone"
          className="w-full p-2 border border-gray-300 rounded-xl"
        />
        <button
          type="submit"
          className="w-full bg-[#009f4d] text-white font-semibold py-2 rounded-xl hover:brightness-110 transition"
        >
          Cadastrar Morador
        </button>
      </form>
    </div>
  );
}
