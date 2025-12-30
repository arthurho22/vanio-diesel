"use client";

import { useEffect } from "react";
import { db } from "@/src/lib/firebase";
import { ref, set } from "firebase/database";

export default function Home() {
  useEffect(() => {
    const clienteRef = ref(db, "clientes/cliente-teste");

    set(clienteRef, {
      nome: "Cliente Teste",
      telefone: "99999-9999",
      email: "teste@email.com",
    });
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center">
      <h1 className="text-2xl font-bold">
        Testando Realtime Database 🚀
      </h1>
    </main>
  );
}
