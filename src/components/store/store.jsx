import { create } from 'zustand'

export const Usetheme = create((set) => ({
    theme: "light",
    setTheme: (text) => set({ theme: text })

}))