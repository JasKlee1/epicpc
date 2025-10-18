import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EpicPC - Catálogo de PCs Gamer",
  description: "Proyecto FSD para visualizar PCs por categoría",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-gray-100 text-gray-900">{children}</body>
    </html>
  );
}
