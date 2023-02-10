import { create } from "zustand"

export type Pages = "calendar" | "timelines"

interface PageState {
  active: Pages
  setActive: (page: Pages) => void
}

const usePageStore = create<PageState>()((set) => ({
  active: "calendar",
  setActive: (page) => set({ active: page })
}))

export default usePageStore
