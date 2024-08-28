'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/ui/Sidebar";
import Hero from "@/components/ui/Hero";
import Skills from "@/components/ui/Skills";
import Projects from "@/components/ui/Projects";
import { useStore } from "@/hooks/use-store";
import { useSidebarToggle } from "@/hooks/use-sidebar-toggle";



const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const sidebar = useStore(useSidebarToggle, (state) => state);
  if(!sidebar) return null;
  return (
    <html lang="en">
      <body className={`${inter.className} flex items-start justify-between bg-gradient-to-r from-slate-300 via-gray-200 to-blue-200`}>
        <Sidebar/>
        <main className={`relative w-full h-full overflow-y-auto max-h-screen ${sidebar?.isOpen ? 'pl-[330px]' : 'pl-0'}`}>   
        <Hero/>
        <Skills/>
        <Projects/>
        {children}
        </main>
        
        </body>
    </html>
  );
}
