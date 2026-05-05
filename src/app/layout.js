import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";

const OutfitFont = Outfit({
  subsets: ["latin"],
});


export const metadata = {
  title: "Pixgen Ai App",
  description: "Pixgen Ai Image Generated app",
  icons: {
    icon: [
      { url: "/pixgen.webp" },
    ],
    apple: [
      { url: "/pixgen.webp" },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${OutfitFont.className} h-full antialiased`}
    >
      <body >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
