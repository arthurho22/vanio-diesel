"use client";

import { motion } from "framer-motion";
import { Wrench, ShieldCheck, Clock, Truck } from "lucide-react";

const items = [
  {
    icon: Wrench,
    title: "Especialistas em Diesel",
    description:
      "Equipe qualificada com experiência em motores diesel, caminhões e máquinas pesadas.",
  },
  {
    icon: ShieldCheck,
    title: "Serviço Garantido",
    description:
      "Trabalhamos com peças de qualidade e garantia total em nossos serviços.",
  },
  {
    icon: Clock,
    title: "Agilidade no Atendimento",
    description:
      "Diagnóstico rápido e soluções eficientes para minimizar o tempo parado.",
  },
  {
    icon: Truck,
    title: "Atendimento Especializado",
    description:
      "Estrutura preparada para atender frotas e veículos de grande porte.",
  },
];

export default function Differentials() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center text-4xl font-bold text-gray-800"
        >
          Por que escolher a{" "}
          <span className="text-blue-600">Vanio Diesel</span>?
        </motion.h3>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-xl border border-gray-100 bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <Icon size={28} />
                </div>

                <h4 className="mb-3 text-xl font-semibold text-gray-800">
                  {item.title}
                </h4>

                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
