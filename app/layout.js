import { Almarai } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const almarai = Almarai({
  weight: ["300", "400", "700", "800"],
  subsets: ["arabic"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={almarai.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
