import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-[var(--bg-second)] p-8 rounded-2xl shadow-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">Entrar na conta</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-1 text-sm">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 rounded-lg bg-[var(--bg-primary)] text-[var(--text-primary)] border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--hover)]"
              placeholder="seuemail@email.com"
            />
          </div>
          <div className="relative">
            <label htmlFor="password" className="block mb-1 text-sm">
              Senha
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="w-full px-4 py-2 pr-10 rounded-lg bg-[var(--bg-primary)] text-[var(--text-primary)] border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--hover)]"
              placeholder="••••••••"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-9 text-[var(--text-second)] hover:text-[var(--hover)]"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-[var(--indigo)] hover:bg-[var(--hover)] text-white font-medium rounded-lg transition-colors duration-300"
          >
            Entrar
          </button>
        </form>

        <p className="text-center text-sm text-[var(--text-second)] mt-6">
          Não tem uma conta?{" "}
          <a
            href="/cadastro"
            className="relative text-[var(--hover)] font-medium transition-all duration-300 group"
          >
            Cadastre-se
            <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-[var(--hover)] transition-all duration-300 group-hover:w-full"></span>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
