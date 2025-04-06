import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const isLoginPage = pathname === "/login";
  const isSobrePage = pathname === "/sobre";

  return (
    <header className="w-full bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="group text-2xl duration-300 hover:text-[var(--hover)] transition-colors cursor-pointer"
        >
          EzResume
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-[var(--hover)]"></span>
        </Link>

        {/* Navegação dinâmica */}
        <div className="hidden md:flex items-center space-x-4">
          {isLoginPage && (
            <>
              <Link
                to="/"
                className="group duration-300 hover:text-[var(--hover)] transition-colors"
              >
                Home
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-[var(--hover)]"></span>
              </Link>
              <Link
                to="/sobre"
                className="group duration-300 hover:text-[var(--hover)] transition-colors"
              >
                Sobre
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-[var(--hover)]"></span>
              </Link>
            </>
          )}

          {isSobrePage && (
            <>
              <Link
                to="/"
                className="group duration-300 hover:text-[var(--hover)] transition-colors"
              >
                Home
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-[var(--hover)]"></span>
              </Link>
              <Link
                to="/login"
                className="group duration-300 hover:text-[var(--hover)] transition-colors"
              >
                Login
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-[var(--hover)]"></span>
              </Link>
            </>
          )}

          {!isLoginPage && !isSobrePage && (
            <>
              <a
                href="/sobre"
                className="group duration-300 hover:text-[var(--hover)] transition-colors"
              >
                Sobre
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-[var(--hover)]"></span>
              </a>
              <Link
                to="/login"
                className="group duration-300 hover:text-[var(--hover)] transition-colors"
              >
                Login
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-[var(--hover)]"></span>
              </Link>
            </>
          )}
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
