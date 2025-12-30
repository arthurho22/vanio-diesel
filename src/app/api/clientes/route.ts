import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const cliente = await prisma.cliente.create({
    data: {
      nome: body.nome,
      telefone: body.telefone,
      email: body.email,
    },
  });

  return NextResponse.json(cliente);
}

export async function GET() {
  const clientes = await prisma.cliente.findMany({
    include: { veiculos: true },
  });

  return NextResponse.json(clientes);
}
