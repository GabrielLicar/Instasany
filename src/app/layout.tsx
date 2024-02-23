import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import { Header } from "./components/header";
import "./globals.css";

const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Instasany",
  description: "Instasany",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/logo.svg" type="image/*" />
      <body className={`${epilogue.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
