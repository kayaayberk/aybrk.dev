import { useRef } from 'react';
import { create } from 'zustand';

const useStore = create((set) => ({
  divRef: null,
  isLoading: true,
  setDivRef: (ref) => set({ divRef: ref, isLoading: false }),
}));

export default useStore;