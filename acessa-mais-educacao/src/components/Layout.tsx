import type { ReactNode } from "react";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      <a href="#conteudo-principal" className="skip-link">
        Pular para o conteúdo principal
      </a>
      <Sidebar />

      <main id="conteudo-principal" className="flex-1 p-8 overflow-y-auto" tabIndex={-1}>
        {children}
      </main>
    </div>
  );
}
