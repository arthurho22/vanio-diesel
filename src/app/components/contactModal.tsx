"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X, Mail, Phone } from "lucide-react";
import { useState } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  async function handleSendEmail() {
    setError("");
    setSuccess(false);

    if (!name || !email || !message) {
      setError("Preencha todos os campos.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar.");
      }

      setSuccess(true);

      setName("");
      setEmail("");
      setMessage("");

      setTimeout(() => {
        onClose();
        setSuccess(false);
      }, 1500);

    } catch (err) {
      setError("Erro ao enviar email. Tente novamente.");
    } finally {
      setLoading(false);
    }
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
              Entre em Contato
            </h2>

            <div className="space-y-4">

              {error && (
                <div className="rounded-lg bg-red-100 px-4 py-2 text-sm text-red-600">
                  {error}
                </div>
              )}

              {success && (
                <div className="rounded-lg bg-green-100 px-4 py-2 text-sm text-green-600">
                  Email enviado com sucesso!
                </div>
              )}

              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Seu nome"
                className="w-full rounded-lg border px-4 py-3 focus:border-blue-600 focus:outline-none"
              />

              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu e-mail"
                className="w-full rounded-lg border px-4 py-3 focus:border-blue-600 focus:outline-none"
              />

              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                placeholder="Mensagem..."
                className="w-full rounded-lg border px-4 py-3 focus:border-blue-600 focus:outline-none"
              />

              <div className="flex gap-4 pt-4">
                <button
                  onClick={handleSendEmail}
                  disabled={loading}
                  className="flex-1 rounded-lg bg-blue-600 py-3 font-medium text-white transition hover:bg-blue-700 disabled:opacity-60"
                >
                  {loading ? "Enviando..." : "Enviar Email"}
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

            {/* INFO */}
            <div className="mt-6 border-t pt-4 text-sm text-gray-500">
              <p className="flex items-center gap-2">
                <Phone size={16} /> (47) 98473-8920
              </p>
              <p className="flex items-center gap-2">
                <Mail size={16} /> atendimento@vaniodiesel.com.br
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
