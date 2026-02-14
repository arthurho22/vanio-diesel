"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";

interface BudgetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BudgetModal({ isOpen, onClose }: BudgetModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function formatPhone(value: string) {
    return value
      .replace(/\D/g, "")
      .replace(/^(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .slice(0, 15);
  }

  function handleSendWhatsapp() {
    setError("");

    if (!name || !phone || !service) {
      setError("Preencha nome, telefone e serviço.");
      return;
    }

    setLoading(true);

    const text = `
Olá! Gostaria de solicitar um orçamento.

Nome: ${name}
Telefone: ${phone}
Serviço: ${service}

Mensagem:
${message || "Não informado"}
    `;

    const encoded = encodeURIComponent(text.trim());

    const phoneNumber = "5547984738920";

    window.open(
      `https://wa.me/${phoneNumber}?text=${encoded}`,
      "_blank"
    );

    setTimeout(() => {
      setLoading(false);

      setName("");
      setPhone("");
      setService("");
      setMessage("");

      onClose();
    }, 600);
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-lg rounded-2xl bg-white p-8 shadow-xl"
          >
            {/* FECHAR */}
            <button
              onClick={onClose}
              disabled={loading}
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 disabled:opacity-50"
            >
              <X size={22} />
            </button>

            <h2 className="mb-6 text-2xl font-bold text-gray-800">
              Solicitar Orçamento
            </h2>

            <div className="space-y-4">
              {error && (
                <div className="rounded-lg bg-red-100 px-4 py-2 text-sm text-red-600">
                  {error}
                </div>
              )}

              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Seu nome"
                className="w-full rounded-lg border px-4 py-3 focus:border-blue-600 focus:outline-none"
              />

              <input
                value={phone}
                onChange={(e) => setPhone(formatPhone(e.target.value))}
                placeholder="Telefone / WhatsApp"
                className="w-full rounded-lg border px-4 py-3 focus:border-blue-600 focus:outline-none"
              />

              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full rounded-lg border px-4 py-3 focus:border-blue-600 focus:outline-none"
              >
                <option value="">Selecione o serviço</option>
                <option>Manutenção Preventiva</option>
                <option>Diagnóstico Eletrônico</option>
                <option>Injeção Diesel</option>
                <option>Outro</option>
              </select>

              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                placeholder="Descreva o problema..."
                className="w-full rounded-lg border px-4 py-3 focus:border-blue-600 focus:outline-none"
              />

              <div className="flex gap-4 pt-4">
                <button
                  onClick={handleSendWhatsapp}
                  disabled={loading}
                  className="flex-1 rounded-lg bg-green-600 py-3 font-medium text-white transition hover:bg-green-700 disabled:opacity-60"
                >
                  {loading ? "Abrindo WhatsApp..." : "Enviar pelo WhatsApp"}
                </button>

                <button
                  onClick={onClose}
                  disabled={loading}
                  className="flex-1 rounded-lg border py-3 font-medium text-gray-600 transition hover:bg-gray-100 disabled:opacity-60"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
              