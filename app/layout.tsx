import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hotspot Login",
  description: "Login Hotspot Rumah Sakit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
