// src/components/Layout.tsx
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <Navbar />
      <main className="p-4">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
}
