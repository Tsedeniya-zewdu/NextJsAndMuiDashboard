"use client";
import { AppBar, IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch, useSelector } from "react-redux";
import { toggleCollapsed, toggleMobileOpen } from "@/app/Store/sidebarslice"; 
import * as React from "react";

import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";



export default function Nav() {
  const isMdUp = useMediaQuery("(min-width:1200px)");
  const handleMenuToggle = () => {
    if (isMdUp) {
      dispatch(toggleCollapsed()); 
    } else {
      dispatch(toggleMobileOpen()); 
    }
  };

  const dispatch = useDispatch();
  const collapsed = useSelector(
    (state: { sidebar: { collapsed: boolean } }) => state.sidebar.collapsed
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          ml: {
            xs: "10px", 
          },
          [`@media (min-width:1200px)`]: {
            ml: `${collapsed ? 80 : 260}px`, 
            width: `calc(100% - ${collapsed ? 80 : 260}px)`, 
          },
          transition: "width 0.3s ease, margin 0.3s ease",
          background: "#fff",
          boxShadow: "none",
          borderBottom: "1px solid #e0e0e0",
        }}
      >
        <Toolbar>
         
          <IconButton edge="start" onClick={handleMenuToggle}>
            <MenuIcon />
          </IconButton>

        
          <Box sx={{ flexGrow: 1 }} />

         
        </Toolbar>
      </AppBar>
    </Box>
  );
}
