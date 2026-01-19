import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-blue-500">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* LOGO / SOBRE */}
          <div>
            <h3 className="text-xl font-bold text-blue-600">Vanio Diesel</h3>
            <p className="mt-4 text-sm leading-relaxed text-gray-600">
              Especialistas em manutenção de caminhões e motores diesel,
              oferecendo confiança, qualidade e agilidade.
            </p>
          </div>

          {/* NAVEGAÇÃO */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase text-white-800">
              Navegação
            </h4>
            <ul className="space-y-3 text-sm text-white-600">
              <li>
                <a href="#" className="hover:text-white-600">
                  Início
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-white-600">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white-600">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* CONTATO */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase text-white-800">
              Contato
            </h4>

            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-blue-600" />
                <span>(47) 3380-5130 / (47) 3380-5131</span>
              </li>

              <li className="flex items-center gap-3">
                <Mail size={16} className="text-blue-600" />
                <span>atendimento@vaniodiesel.com.br</span>
              </li>

              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-blue-600" />
                <span>Blumenau - SC</span>
              </li>
            </ul>
          </div>

          {/* REDES */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase text-white-800">
              Redes sociais
            </h4>

            <div className="flex gap-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-600 transition hover:border-blue-600 hover:bg-blue-600 hover:text-white"
              >
                <Facebook size={18} />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-600 transition hover:border-blue-600 hover:bg-blue-600 hover:text-white"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="bg-gray-950 border-gray-800">
        <p className="text-center text-xs text-white-600">
          © {new Date().getFullYear()} Vanio Diesel. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
