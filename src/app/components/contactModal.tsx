"use client";

import { X, Phone, Mail, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({
  isOpen,
  onClose,
}: ContactModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-md rounded-xl bg-white p-8 shadow-xl"
          >
            {/* Fechar */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
            >
              <X size={22} />
            </button>

            {/* Título */}
            <h2 className="mb-6 text-2xl font-bold text-blue-600">
              Fale Conosco
            </h2>

            {/* Informações */}
            <div className="space-y-4 text-gray-700">
              <div className="flex items-center gap-3">
                <Phone className="text-blue-600" size={20} />
                <span>(47) 3380-5130 / (47) 3380-5131</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="text-blue-600" size={20} />
                <span>atendimento@vaniodiesel.com.br</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="text-blue-600" size={20} />
                <span>Blumenau - SC</span>
              </div>
            </div>

            {/* Botão WhatsApp */}
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              className="mt-8 block rounded-lg bg-green-500 py-3 text-center font-medium text-white transition hover:bg-green-600"
            >
              Falar no WhatsApp
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
