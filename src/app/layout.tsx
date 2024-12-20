import { AppSidebar } from "@/components/AppSidebar";
import BottomTabs from "@/components/BottomTabs";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarProvider } from "@/components/ui/sidebar";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
            <ThemeProvider defaultTheme="dark">
          <SidebarProvider>
            <AppSidebar />
            <main>
              <div><Navbar /></div>
              <div>
                {children}
              </div>
              <div>
                <BottomTabs />
              </div>
            </main>
          </SidebarProvider>
            </ThemeProvider>
      </body>
    </html>
  );
}
