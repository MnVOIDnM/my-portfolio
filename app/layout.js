import "./globals.css";

export const metadata = {
  title: "MiYaCode - Working",
  description: "MiYa's personal website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
