
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import ReduxProvider from "./ReduxProvider";
import LayoutWithSidebar from "./Component/LayoutWithSidebar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Project Management",
  description: "Project Management",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable}`}>
        <ReduxProvider>
          <LayoutWithSidebar>{children}</LayoutWithSidebar>
          </ReduxProvider>
      </body>
    </html>
  );
}
