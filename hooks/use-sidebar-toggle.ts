// use-sidebar-toggle.ts
import { create } from 'zustand';

interface SidebarState {
  isOpen: boolean;
  isMiniSidebar: boolean;
  toggleSidebar: () => void;
  toggleSidebarType: () => void;
}

export const useSidebarToggle = create<SidebarState>((set) => ({
  isOpen: true,
  isMiniSidebar: false, // Default to full sidebar
  toggleSidebar: () => set((state) => ({ isOpen: !state.isOpen })),
  toggleSidebarType: () => set((state) => ({ isMiniSidebar: !state.isMiniSidebar })),
}));
