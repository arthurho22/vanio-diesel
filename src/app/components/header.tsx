import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-blue-600">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* LOGO */}
        <Link href="/" className="text-xl font-bold text-white">
          Vanio Diesel
        </Link>

        {/* MENU */}
        <nav className="flex items-center gap-8 text-sm font-medium text-white">
          <Link href="/" className="transition hover:text-gray-200">
            Início
          </Link>

          <Link href="/#servicos" className="transition hover:text-gray-200">
            Serviços
          </Link>

          <Link href="/#contato" className="transition hover:text-gray-200">
            Contato
          </Link>

          <Link
            href="/agendamento"
            className="rounded-lg bg-orange-500 px-4 py-2 transition hover:bg-orange-600"
          >
            Agendar Serviço
          </Link>
        </nav>

      </div>
    </header>
  );
}
