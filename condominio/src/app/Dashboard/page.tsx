import SideNav from '../Components/sidenav';

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-[#f3f7fb]">
      <SideNav />

      <main className="flex-1 p-10">
        <h1 className="text-3xl font-semibold text-gray-900 max-w-xl">
          Facilitamos a vida de <br />
          administradores, síndicos <br />
          profissionais e condôminos.
        </h1>
        <p className="mt-4 text-sm text-gray-600 max-w-md">
          Utilizamos a mais moderna tecnologia em nuvem e as melhores ferramentas para atender melhor todos os tipos de condomínios
        </p>
      </main>
    </div>
  );
}
