"use client";

import Header from "./components/header";
import { motion } from "framer-motion";
import { Wrench, Cpu, Fuel } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* HEADER */}
      <Header />

      {/* HERO */}
      <main className="mx-auto max-w-7xl px-6 py-24">
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
            <a
              href="#contato"
              className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
            >
              Solicitar orçamento
            </a>

            <a
              href="#servicos"
              className="rounded-lg border border-blue-600 px-6 py-3 font-medium text-blue-600 transition hover:bg-blue-50"
            >
              Ver serviços
            </a>
          </div>
        </motion.div>
      </main>

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
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="group rounded-xl bg-white p-8 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                <Wrench size={26} />
              </div>

              <h3 className="mb-3 text-xl font-semibold text-gray-800">
                Manutenção Preventiva
              </h3>

              <p className="text-gray-600">
                Revisões completas para evitar falhas e garantir maior vida útil
                do motor diesel.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="group rounded-xl bg-white p-8 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                <Cpu size={26} />
              </div>

              <h3 className="mb-3 text-xl font-semibold text-gray-800">
                Diagnóstico Eletrônico
              </h3>

              <p className="text-gray-600">
                Tecnologia avançada para identificar falhas eletrônicas com
                rapidez e precisão.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="group rounded-xl bg-white p-8 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                <Fuel size={26} />
              </div>

              <h3 className="mb-3 text-xl font-semibold text-gray-800">
                Injeção Diesel
              </h3>

              <p className="text-gray-600">
                Ajuste e manutenção do sistema de injeção para máximo desempenho
                e economia.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
