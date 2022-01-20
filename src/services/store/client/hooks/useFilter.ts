import create from 'zustand'

interface IUseFilter {
  filterText: string
  setFilterText: (newFilterText: string) => void
}

export const useFilter = create<IUseFilter>((set) => ({
  filterText: 'Cats',
  setFilterText: (newFilterText: string) => {
    set({ filterText: newFilterText })
  }
}))
