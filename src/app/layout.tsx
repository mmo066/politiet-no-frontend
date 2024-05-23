import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Roboto } from 'next/font/google'
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
 
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Politiet.no",
  description: "Politiet.no",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        <main className="container mx-auto">
          <Breadcrumbs homeElement={'Forside'} separator={'/'} />
        {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
