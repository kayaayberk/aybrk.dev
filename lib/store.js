import { create } from 'zustand';

const useStore = create((set) => ({
  divRef: null,
  isLoading: true,
  setDivRef: (ref) => set({ divRef: ref, isLoading: false }),
  setFadeRef: (ref) => set({ fadeRef: ref, isLoading: false }),
  setBlogRef: (ref) => set({ blogRef: ref, isLoading: false }),
}));

export default useStore;
