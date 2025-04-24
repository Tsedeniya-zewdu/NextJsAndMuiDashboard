"use client";
import React from "react";
import { Box } from "@mui/material";
import SideBar from "./sideBar";
import Nav from "./nav";
import {  useSelector } from "react-redux";


export default function LayoutWithSidebar({ children }: { children: React.ReactNode }) {
  const collapsed = useSelector((state: { sidebar: { collapsed: boolean } }) => state.sidebar.collapsed);
 

  return (
    
    <Box sx={{ display: "flex", gap: '22px', minHeight: '100vh' , height:'auto'}}>
    <SideBar />
  
    <Box
      sx={{display:'flex',
        flexGrow: 1,
        backgroundColor: '#f5f7fa',
        minHeight: '100vh', 
        height:'auto',
        position:'relative',
        flexDirection:'column',
        gap:'10px'
      }}
    >
      <Box sx={{position:'sticky',
        top:'0'
      }}>
      <Nav />
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1, 
          px: 0,
          pt: 0,
          width: '100%',
          height:'auto'
        }}
      >
        {children}
      </Box>
    </Box>
  </Box>
  
    );
    
  
}
