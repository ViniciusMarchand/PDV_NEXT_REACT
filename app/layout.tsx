'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/contexts/AuthContext";
import { usePathname } from "next/navigation";
import Header from "@/components/header/Header";
import Sidebar from "@/components/sidebar/Sdebar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  const pathname = usePathname();
  if(pathname === "/") {
    return (
      <html lang="pt-br">
        <body className={`${inter.className} bg-primaria`}>
          <AuthProvider>
              <div className="flex justify-center min-h-screen">
                  {children}
              </div>
          </AuthProvider>
        </body>
      </html>
    );
  } else {
    return <html lang="pt-br">
    <body className={`${inter.className} bg-primaria  max-h-screen`}>
      <AuthProvider>
        <Header/>
        <Sidebar/>
          <div className="h-full flex w-full pl-sidebar pt-header">
            <div className="w-full h-full p-3">
              {children}
            </div>
          </div>
      </AuthProvider>
    </body>
  </html>
  }
}
