'use client';

import SideNav from '../Components/sidenav';
import Image from 'next/image';

export default function DashboardHome() {
  return (
    <div className="flex min-h-screen">
      <SideNav />
      <main className="flex-1 bg-[#F5F8FF] p-10 flex flex-col justify-between">
        {/* Texto e espaçamento */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 mb-12">
          <div className="max-w-xl">
            <h1 className="text-4xl font-bold text-[#111827] mb-6 leading-tight">
              Facilitamos a vida de<br />
              administradores, síndicos<br />
              profissionais e condôminos.
            </h1>
            <p className="text-[#4B5563] text-lg">
              Utilizamos a mais moderna tecnologia em nuvem e as melhores<br />
              ferramentas para atender melhor todos os tipos de condomínios
            </p>
          </div>
        </div>

        {/* Faixa verde com logo integrada */}
        <div className="mt-8">
          <div className="flex text-white items-stretch">
            {/* Logo integrada à faixa */}
            <div className="bg-[#029664] p-4 flex items-center justify-center rounded-tl-lg rounded-bl-lg">
              <Image
                src="/logo.png"
                alt="Logo"
                width={120}
                height={120}

              />
            </div>

            {/* Blocos de texto */}
            <div className="bg-[#029664] w-full grid grid-cols-3">
              <div className="p-6">
                <h2 className="font-bold text-lg mb-2">Segurança</h2>
                <p>Garantimos total sigilo de seus dados. Nenhuma informação é compartilhada.</p>
              </div>
              <div className="p-6">
                <h2 className="font-bold text-lg mb-2">Suporte</h2>
                <p>Oferecemos auxílio ilimitado. Conte com consultores especialistas.</p>
              </div>
              <div className="p-6 rounded-tr-lg">
                <h2 className="font-bold text-lg mb-2">Agilidade</h2>
                <p>Dispomos de relatórios dinâmicos, controle de consumo e muito mais.</p>
              </div>
            </div>
          </div>
          <div className="h-4 bg-[#F97316] rounded-b-lg" />
        </div>
      </main>
    </div>
  );
}
