import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} bg-primaria`}>
        <div className="flex justify-center min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
