import "./globals.css";
import Header from "../component/header";
import Footer from "../component/footer";
import { ReactNode } from "react";

export const metadata = {
  title: "school collab site",
  description: "made for fun",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
