"use client";

import { useState } from "react";

export default function AgendamentoPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [obs, setObs] = useState("");

  function handleSchedule() {
    if (!name || !phone || !service || !date) {
      alert("Preencha todos os campos obrigatórios.");
      return;
    }

    const message = encodeURIComponent(
      `Olá, gostaria de agendar um serviço:

Nome: ${name}
Telefone: ${phone}
Serviço: ${service}
Data desejada: ${date}

Observação:
${obs}`
    );

    window.open(
      `https://wa.me/5547984738920?text=${message}`,
      "_blank"
    );
  }

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-6">Agendar Serviço</h1>

      <div className="space-y-4 max-w-md">
        <input
          className="w-full border p-3 rounded"
          placeholder="Seu nome"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="w-full border p-3 rounded"
          placeholder="Telefone"
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          className="w-full border p-3 rounded"
          placeholder="Tipo de serviço"
          onChange={(e) => setService(e.target.value)}
        />
        <input
          type="date"
          className="w-full border p-3 rounded"
          onChange={(e) => setDate(e.target.value)}
        />
        <textarea
          className="w-full border p-3 rounded"
          placeholder="Observações"
          onChange={(e) => setObs(e.target.value)}
        />

        <button
          onClick={handleSchedule}
          className="w-full bg-orange-600 text-white py-3 rounded"
        >
          Agendar pelo WhatsApp
        </button>
      </div>
    </div>
  );
}
