import { create } from "zustand";

interface AuthState {
  isLogin: boolean;
  setIsLogin: (value: boolean) => void;
}

const useAuthStore = create<AuthState>((set) => ({
  isLogin: false,

  setIsLogin: (value) => {
    set({ isLogin: value });
  },
}));

export default useAuthStore;
