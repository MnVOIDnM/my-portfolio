import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "MiYaCode Portfolio - Working",
  description: "ポートフォリオサイトです。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
