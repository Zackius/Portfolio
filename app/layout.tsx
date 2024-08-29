'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/ui/Sidebar";
import Hero from "@/components/ui/Hero";
import Skills from "@/components/ui/Skills";
import Projects from "@/components/ui/Projects";
import { useStore } from "@/hooks/use-store";
import { useSidebarToggle } from "@/hooks/use-sidebar-toggle";
import MiniSidebar from "@/components/ui/SidebarHide";
import { cn } from "@/lib/utils";
import { useMediaQuery } from 'react-responsive';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const sidebar = useStore(useSidebarToggle, (state) => state);
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });

  if(!sidebar) return null;

  return (
    <html lang="en">
      <body className={`${inter.className} flex items-start justify-between bg-gradient-to-r from-slate-300 via-gray-200 to-blue-200`}>
        <aside
          className={cn("fixed top-0 left-0 z-20 h-screen transition-[width] ease-in-out duration-300", 
            isSmallScreen 
              ? "w-[90px] translate-x-0" 
              : sidebar?.isOpen === false 
              ? "w-[90px]" 
              : "w-[330px]"
          )}
        >
          {isSmallScreen ? <MiniSidebar /> : <Sidebar />}
        </aside>
        <main className={`relative w-full h-full overflow-y-auto max-h-screen ${isSmallScreen ? 'pl-[90px]' : sidebar?.isOpen ? 'pl-[330px]' : 'pl-[90px]'}`}>   
          <Hero/>
          <Skills/>
          <Projects/>
          {children}
        </main>
      </body>
    </html>
  );
}
