'use client';

import {
  Home,
  Car,
  Users,
  Package,
  LayoutGrid,
  MessageCircle,
  BarChart2,
  Settings,
  LogOut,
  ChevronDown,
  ChevronRight,
  Menu,
} from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const menuItems = [
  {
    label: 'Moradores',
    icon: <Home />,
    subItems: [
      { label: 'Cadastrar', path: '/moradores' },
      { label: 'Adicionar', path: '/moradores/adicionar' }, 
      { label: 'Histórico', path: '/moradores/historico' },
    ],
  },
  {
    label: 'Veículos',
    icon: <Car />,
    subItems: [
        { label: 'Pré-Cadastro', path: '/veiculos' },
      { label: 'Registro', path: '/veiculos/registro' },
      { label: 'Histórico', path: '/veiculos/historico' },
    ],
  },
  {
    label: 'Visitantes',
    icon: <Users />,
    subItems: [
      { label: 'Pré-Cadastro', path: '/visitantes' },
      { label: 'Registro', path: '/visitantes/registro' },
      { label: 'Histórico', path: '/visitantes/historico' },
    ],
  },
  {
    label: 'Encomendas',
    icon: <Package />,
    subItems: [
      { label: 'Recebimento', path: '/encomendas/recebimento' },
      { label: 'Notificar', path: '/encomendas/notificar' },
      { label: 'Retirada', path: '/encomendas/retirada' },
      { label: 'Historico', path: '/encomendas' },
    ],
  },
  {
    label: 'Áreas comuns',
    icon: <LayoutGrid />,
    subItems: [
      { label: 'Historico', path: '/areas' },
      { label: 'Reservar Area', path: '/areas/reservar' },
      { label: 'Cancelar Reserva', path: '/areas/cancelarreserva' },
      { label: 'Notificações', path: '/areas/notificacao' },
    ],
  },
  {
    label: 'Comunicação',
    icon: <MessageCircle />,
    subItems: [
      { label: 'Avisos', path: '/comunicacao' },
      { label: 'Mensagem Direta', path: '/comunicacao/mensagemdireta' },
    ],
  },

];

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});

  const toggleMenu = (label: string) => {
    setOpenMenus((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <div className={`bg-[#1b1f2d] text-white h-screen transition-all duration-300 ${isOpen ? 'w-64' : 'w-20'} flex flex-col`}>
      {/* Topo: logo e botão */}
      <div className="flex items-center justify-between p-4">
  <Link href="/Dashboard" className="flex items-center space-x-2">
    <Image
      src="/logo.png"
      alt="Logo"
      width={isOpen ? 40 : 30}
      height={isOpen ? 40 : 30}
      style={{ cursor: 'pointer' }}
    />
  </Link>
  <button onClick={() => setIsOpen(!isOpen)} className="text-white">
    <Menu />
  </button>
</div>

      {/* Menu principal */}
      <div className="flex-1 px-2 space-y-5 overflow-y-auto mt-4">
        {menuItems.map(({ label, icon, subItems }) => (
          <div key={label} className="space-y-1">
            <div
              className="flex items-center justify-between hover:bg-[#2c3145] p-2 rounded cursor-pointer transition"
              onClick={() => toggleMenu(label)}
            >
              <div className="flex items-center space-x-3">
                <div>{icon}</div>
                {isOpen && <span>{label}</span>}
              </div>
              {isOpen && (
                <div>
                  {openMenus[label] ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                </div>
              )}
            </div>

            {/* Subitens */}
            {isOpen && openMenus[label] && (
              <div className="ml-8 mt-1 space-y-1">
                {subItems.map(({ label: subLabel, path }) => (
                  <Link href={path} key={subLabel}>
                    <div className="text-sm text-gray-300 hover:text-white cursor-pointer px-2 py-1 rounded hover:bg-[#3a3f57]">
                      {subLabel}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Configurações */}
        <Link href="/configuracoes">
  <div className="mt-8 hover:bg-[#2c3145] p-2 rounded cursor-pointer transition flex items-center space-x-3">
    <Settings />
    {isOpen && <span>Configurações</span>}
  </div>
  </Link>

        {/* Sair */}
       <Link href="/Login">
  <div className="mt-2 hover:bg-[#2c3145] p-2 rounded cursor-pointer transition flex items-center space-x-3 text-red-400">
    <LogOut />
    {isOpen && <span>Sair</span>}
  </div>
</Link>
      </div>
    </div>
  );
};

export default SideNav;
