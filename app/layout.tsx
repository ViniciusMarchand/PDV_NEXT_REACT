'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/contexts/AuthContext";
import { ToastProvider } from "@/contexts/ToastContext"
import { usePathname } from "next/navigation";
import Header from "@/components/header/Header";
import Sidebar from "@/components/sidebar/Sdebar";
import { publicPages } from "@/constants";
import { Suspense } from "react";
import { WebSocketProvider } from "@/contexts/WebSocketContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pathname = usePathname();
  if (pathname && (publicPages.some((page) => pathname.includes(page)) || pathname === "/")) {
    return (
      <html lang="pt-br">
        <body className={`${inter.className} bg-primaria max-h-screen`} suppressHydrationWarning={true}>
          <Suspense fallback={<div>Carregando...</div>}>
          <ToastProvider>
              <div className="flex justify-center min-h-screen">
                {children}
              </div>
          </ToastProvider>
          </Suspense>
        </body>
      </html>
    );
  } else {
    return <html lang="pt-br">
      <body className={`${inter.className} bg-primaria  h-screen max-h-screen overflow-hidden`} suppressHydrationWarning={true}>
        <ToastProvider>
            <AuthProvider>
              <WebSocketProvider>
                <Header />
                <Sidebar />
                <div className="h-full flex w-full pl-sidebar pt-header">
                  <div className="w-full h-full p-3">
                    {children}
                  </div>
                </div>
              </WebSocketProvider>
            </AuthProvider>
        </ToastProvider>
      </body>
    </html>
  }
}
