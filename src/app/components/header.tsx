"use client";

interface HeaderProps {
  onOpenContact: () => void;
}

export default function Header({ onOpenContact }: HeaderProps) {
  return (
    <header className="fixed top-0 z-40 w-full bg-blue-600 text-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold">Vanio Diesel</h1>

        <nav className="flex gap-6 text-sm font-medium">
          <a href="#" className="hover:text-blue-200">
            Início
          </a>

          <a href="#servicos" className="hover:text-blue-200">
            Serviços
          </a>

          {/* 👇 BOTÃO CONTATO */}
          <button
            onClick={onOpenContact}
            className="hover:text-blue-200"
          >
            Contato
          </button>
        </nav>
      </div>
    </header>
  );
}
