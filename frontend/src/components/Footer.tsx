/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { Instagram, Github, Linkedin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-transparent  text-[var(--text-second)] px-6 pt-12 pb-6 text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Coluna 1 */}
        <div>
          <h3 className="text-[var(--text-primary)] font-semibold mb-4">Opções 1</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-[var(--hover)]">Opção 1</a></li>
            <li><a href="#" className="hover:text-[var(--hover)]">Opção 2</a></li>
            <li><a href="#" className="hover:text-[var(--hover)]">Opção 3</a></li>
            <li><a href="#" className="hover:text-[var(--hover)]">Opção 4</a></li>
          </ul>
        </div>

        {/* Coluna 2 */}
        <div>
          <h3 className="text-[var(--text-primary)] font-semibold mb-4">Opções 2</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-[var(--hover)]">Opção 1</a></li>
            <li><a href="#" className="hover:text-[var(--hover)]">Opção 2</a></li>
            <li><a href="#" className="hover:text-[var(--hover)]">Opção 3</a></li>
          </ul>
        </div>

        {/* Coluna 3 */}
        <div>
          <h3 className="text-[var(--text-primary)] font-semibold mb-4">Opções 3</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-[var(--hover)]">Opção 1</a></li>
          </ul>
        </div>

        {/* Coluna 4 */}
        <div>
          <h3 className="text-[var(--text-primary)] font-semibold mb-4">Opções 4</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-[var(--hover)]">Opção 1</a></li>
            <li><a href="#" className="hover:text-[var(--hover)]">Opção 2</a></li>
            <li><a href="#" className="hover:text-[var(--hover)]">Opção 3</a></li>
          </ul>
        </div>
      </div>

      {/* Linha inferior */}
      <div className="border-t border-[var(--border)] mt-10 pt-4 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
        {/* Esquerda */}
        <span>&copy; 2025 EzResume. Todos os direitos reservados.</span>

       
       

        {/* Social */}
        <div className="flex items-center gap-3 ">
          <a href="#"><Github className="w-4 h-4 transition-colors duration-500 hover:text-[var(--hover)]" /></a>
          <a href="#"><Instagram className="w-4 h-4 transition-colors duration-500 hover:text-[var(--hover)]" /></a>
          <a href="#"><Linkedin className="w-4 h-4 transition-colors duration-500 hover:text-[var(--hover)]" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
