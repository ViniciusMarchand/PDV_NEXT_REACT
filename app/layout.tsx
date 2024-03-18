'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/contexts/AuthContext";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} bg-primaria`}>
        <AuthProvider>
          <div className="justify-center min-h-screen">
            {children}
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
