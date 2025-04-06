import React from "react";

const Navbar: React.FC = () => {
  return (
    <header className="w-full bg-[var(--bg-primary)] text-[var(--text-primary)] ">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-xl font-bold tracking-wide">EzResume</h1>

        {/* Navegação + Botão de login */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="hover:text-[var(--hover)] transition-colors">
            Início
          </a>
          <a href="#" className="hover:text-[var(--hover)] transition-colors">
            Sobre
          </a>
          <a href="#" className="hover:text-[var(--hover)] transition-colors">
            Contato
          </a>

          {/* Botão de login com padding reduzido */}
          <button className="bg-[var(--indigo)] text-white px-3 py-1.5 rounded-lg hover:bg-[var(--hover)] transition text-sm">
            Entrar
          </button>
        </div>

        {/* Menu Mobile */}
        <div className="md:hidden">
          <button
            className="text-[var(--text-primary)] focus:outline-none"
            aria-label="Abrir menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
