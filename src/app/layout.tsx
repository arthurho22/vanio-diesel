import React from "react";
import './globals.css';

export const metadata = {
  title: "Vanio Diesel",
  description: "Mecânica especializada em diesel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
