"use client";

import { useState, type ReactNode } from "react";
import Agendamento from "./agendamento/page";
import Header from "./components/header";
import BudgetModal from "./components/budgetModal";
import ContactModal from "./components/contactModal";
import Differentials from "./components/diferenciais";
import Footer from "./components/footer";
import FloatingWhatsapp from "./components/FloatingWhatsapp";


import { motion } from "framer-motion";
import { Wrench, Cpu, Fuel, Route } from "lucide-react";

export default function Home() {
  const [openBudget, setOpenBudget] = useState(false);
  const [openContact, setOpenContact] = useState(false);

  return (
    <div className="min-h-screen bg-white scroll-smooth">
      {/* HEADER */}
      <Header onOpenContact={() => setOpenContact(true)} />

      {/* HERO */}
      <main className="mx-auto max-w-7xl px-6 pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <h1 className="text-5xl font-bold leading-tight text-blue-600">
            Manutenção de Caminhões <br /> com Confiança
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Especialistas em motores diesel, manutenção preventiva e corretiva
            para caminhões e máquinas pesadas.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={() => setOpenBudget(true)}
              className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
            >
              Solicitar orçamento
            </button>

            <a
              href="#servicos"
              className="rounded-lg border border-blue-600 px-6 py-3 font-medium text-blue-600 transition hover:bg-blue-50"
            >
              Ver serviços
            </a>

            <button
              onClick={() => setOpenContact(true)}
              className="rounded-lg border border-blue-600 px-6 py-3 font-medium text-blue-600 transition hover:bg-blue-50"
            >
              
              Contato
            </button>
          </div>
        </motion.div>
      </main>

      {/* DIFERENCIAIS */}
      <Differentials />

      {/* SERVIÇOS */}
      <section id="servicos" className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-14 text-center text-4xl font-bold text-gray-800"
          >
            Nossos Serviços
          </motion.h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              icon={<Wrench size={26} />}
              title="Manutenção Preventiva"
              text="Revisões completas para evitar falhas e garantir maior vida útil do motor diesel."
              delay={0}
            />

            <ServiceCard
              icon={<Cpu size={26} />}
              title="Diagnóstico Eletrônico"
              text="Tecnologia avançada para identificar falhas eletrônicas com rapidez e precisão."
              delay={0.1}
            />

            <ServiceCard
              icon={<Fuel size={26} />}
              title="Injeção Diesel"
              text="Ajuste e manutenção do sistema de injeção para máximo desempenho e economia."
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* MODAIS */}
      <BudgetModal
        isOpen={openBudget}
        onClose={() => setOpenBudget(false)}
      />

      <ContactModal
        isOpen={openContact}
        onClose={() => setOpenContact(false)}
      />

      <Footer />
      <FloatingWhatsapp />

    </div>
  );
}

/* CARD REUTILIZÁVEL */
function ServiceCard({
  icon,
  title,
  text,
  delay,
}: {
  icon: ReactNode;
  title: string;
  text: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="group rounded-xl bg-white p-8 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
        {icon}
      </div>

      <h3 className="mb-3 text-xl font-semibold text-gray-800">
        {title}
      </h3>

      <p className="text-gray-600">{text}</p>
    </motion.div>
  );
}
