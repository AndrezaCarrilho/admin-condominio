"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter(); 

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aqui você poderia adicionar validação ou autenticação
    router.push("/Dashboard");
  };

  return (
    <div className="relative w-full h-screen text-white overflow-hidden">
      {/* Imagem de fundo cobrindo toda a tela */}
      <Image
        src="/imagempredio.png"
        alt="Imagem de fundo"
        fill
        className="object-cover object-center z-0"
        priority
      />
      {/* Sobreposição escura */}
      <div className="absolute inset-0 bg-[#071E3D]/80 z-10" />

      {/* Conteúdo sobre a imagem */}
      <div className="relative z-20 flex flex-col justify-between h-full px-8 md:px-16">
        {/* Login à esquerda, centralizado verticalmente */}
        <div className="flex-grow flex items-center">
          <div className="max-w-md">
            {/* Logo */}
            <div className="mb-6">
              <div className="rounded-full w-35 h-35 flex items-center justify-center shadow-lg border-2 border-[#00C896]">
                <Image src="/logo.png" alt="Logo" width={100} height={100} />
              </div>
            </div>

            {/* Título */}
            <h2 className="text-3xl font-bold mb-6">Usuário cadastrado</h2>

            {/* Formulário */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Digite o seu usuário"
                className="w-full px-4 py-3 bg-transparent border border-white rounded-md text-white placeholder-white focus:outline-none"
              />
              <input
                type="password"
                placeholder="Digite a sua senha"
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
            </form>
          </div>
        </div>

        {/* Rodapé fixo e centralizado */}
        <div className="text-[10px] text-center text-white pb-4">
          O nosso site é de <strong>USO RESTRITO</strong> ao condomínio e portaria<br />
          <strong>MORADORES</strong> devem utilizar o APP disponíveis na Play Store ou Apple Store
        </div>
      </div>
    </div>
  );
}
