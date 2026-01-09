export default function Header() {
  return (
    <header className="w-full bg-blue-600 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold">Vanio Diesel</h1>

        <nav className="flex gap-6 text-sm font-medium">
          <a href="#" className="hover:text-blue-200">
            Início
          </a>
          <a href="#" className="hover:text-blue-200">
            Serviços
          </a>
          <a href="#" className="hover:text-blue-200">
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
}
