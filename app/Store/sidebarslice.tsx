import { createSlice } from "@reduxjs/toolkit";

interface SidebarState {
  collapsed: boolean;
  mobileOpen: boolean;
}

const initialState: SidebarState = {
  collapsed: false,
  mobileOpen: false,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleCollapsed: (state) => {
      state.collapsed = !state.collapsed;
    },
    toggleMobileOpen: (state) => {
      state.mobileOpen = !state.mobileOpen;
    },
    setMobileOpen: (state, action) => {
      state.mobileOpen = action.payload;
    },
  },
});

export const { toggleCollapsed, toggleMobileOpen, setMobileOpen } = sidebarSlice.actions;
export default sidebarSlice.reducer;
