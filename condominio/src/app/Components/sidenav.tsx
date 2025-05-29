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

const menuItems = [
  {
    label: 'Moradores',
    icon: <Home />,
    subItems: ['Listar', 'Adicionar'],
  },
  {
    label: 'Veículos',
    icon: <Car />,
    subItems: ['Listar', 'Adicionar'],
  },
  {
    label: 'Visitantes',
    icon: <Users />,
    subItems: ['Histórico', 'Autorizar'],
  },
  {
    label: 'Encomendas',
    icon: <Package />,
    subItems: ['Pendentes', 'Entregues'],
  },
  {
    label: 'Áreas comuns',
    icon: <LayoutGrid />,
    subItems: ['Reservas', 'Cadastrar Área'],
  },
  {
    label: 'Comunicação',
    icon: <MessageCircle />,
    subItems: ['Avisos', 'Mensagens'],
  },
  {
    label: 'Dashboards',
    icon: <BarChart2 />,
    subItems: ['Relatórios', 'Indicadores'],
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
        <div className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="Logo"
            width={isOpen ? 40 : 30}
            height={isOpen ? 40 : 30}
          />
        </div>
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
                {subItems.map((sub) => (
                  <div
                    key={sub}
                    className="text-sm text-gray-300 hover:text-white cursor-pointer px-2 py-1 rounded hover:bg-[#3a3f57]"
                  >
                    {sub}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Configurações */}
        <div className="mt-8 hover:bg-[#2c3145] p-2 rounded cursor-pointer transition flex items-center space-x-3">
          <Settings />
          {isOpen && <span>Configurações</span>}
        </div>

        {/* Sair */}
        <div className="mt-2 hover:bg-[#2c3145] p-2 rounded cursor-pointer transition flex items-center space-x-3 text-red-400">
          <LogOut />
          {isOpen && <span>Sair</span>}
        </div>
      </div>
    </div>
  );
};

export default SideNav;
