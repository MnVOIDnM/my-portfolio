import "./globals.css";

export const metadata = {
  title: "MiYaCode Portfolio - Working",
  description: "ポートフォリオサイトです。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
