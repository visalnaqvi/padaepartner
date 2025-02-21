import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <nav className="nav">
          <p className="logo">{process.env.NEXT_PUBLIC_WEBSITE_NAME}</p>
          <ul>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
          </ul>
          <div className="btnWrapper">
            <button className="heroBtn">Login</button>
            <button className="heroBtn">More Info</button>
          </div>
        </nav>
        {children}
        <footer className="footer">
          Copyright 2025 {process.env.NEXT_PUBLIC_WEBSITE_NAME}
        </footer>
      </body>
    </html>
  );
}
