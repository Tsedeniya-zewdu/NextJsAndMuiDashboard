"use client";
import React from "react";
import { Box } from "@mui/material";
import SideBar from "./sideBar";
import Nav from "./nav";
import {  useSelector } from "react-redux";


export default function LayoutWithSidebar({ children }: { children: React.ReactNode }) {
  const collapsed = useSelector((state: { sidebar: { collapsed: boolean } }) => state.sidebar.collapsed);
  const drawerWidth = collapsed ? 80 : 260;

  return (
    <Box sx={{ display: "flex" }}>
      <SideBar />
      <Box sx={{ flexGrow: 1 }}>
        <Nav />
        <Box
  component="main"
  sx={{
    px: 3,
    pt: 8,
    ml: {
      xs: '10px', 
    },
    [`@media (min-width:1200px)`]: {
      ml: `${drawerWidth}px`,
    },
  }}
>
          {children}
        </Box>
      </Box>
    </Box>
  );
}
