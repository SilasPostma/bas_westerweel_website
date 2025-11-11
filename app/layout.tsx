import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bas Westerweel",
  description:
    "Storyteller and coach dedicated to helping individuals and organizations find their authentic voice.",
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
