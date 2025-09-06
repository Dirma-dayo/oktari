import "./globals.css";
import Header from "../component/header";
import Footer from "../component/footer";

export const metadata = {
  title: "school collab site",
  description: "made for fun",
};

export default function RootLayout({ children }) {
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
