// app/layout.tsx
import "./globals.css";
import { Montserrat } from "next/font/google";
import Header from "./shared/Header";
import Footer from "./shared/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans", // se conecta con tu CSS variable si querés
  display: "swap",
});

export const metadata = {
  title: "AmberSky",
  description: "A relaxing sunset resort experience.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body>
        <Header />
        <main className="min-h-screen px-0 pb-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
