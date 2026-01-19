"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface BudgetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BudgetModal({ isOpen, onClose }: BudgetModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
          >
            <div className="w-full max-w-lg rounded-xl bg-white p-8 shadow-xl">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-800">
                  Solicitar Orçamento
                </h2>

                <button onClick={onClose}>
                  <X className="h-6 w-6 text-gray-500 hover:text-gray-800" />
                </button>
              </div>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Seu nome"
                  className="w-full rounded-lg border px-4 py-3 focus:border-blue-600 focus:outline-none"
                />

                <input
                  type="text"
                  placeholder="WhatsApp"
                  className="w-full rounded-lg border px-4 py-3 focus:border-blue-600 focus:outline-none"
                />

                <input
                  type="text"
                  placeholder="Veículo / Caminhão"
                  className="w-full rounded-lg border px-4 py-3 focus:border-blue-600 focus:outline-none"
                />

                <select className="w-full rounded-lg border px-4 py-3 focus:border-blue-600 focus:outline-none">
                  <option>Selecione o serviço</option>
                  <option>Manutenção preventiva</option>
                  <option>Diagnóstico eletrônico</option>
                  <option>Injeção diesel</option>
                </select>

                <textarea
                  placeholder="Descreva o problema ou serviço"
                  rows={4}
                  className="w-full rounded-lg border px-4 py-3 focus:border-blue-600 focus:outline-none"
                />

                <button
                  type="submit"
                  className="w-full rounded-lg bg-blue-600 py-3 font-medium text-white transition hover:bg-blue-700"
                >
                  Enviar solicitação
                </button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
