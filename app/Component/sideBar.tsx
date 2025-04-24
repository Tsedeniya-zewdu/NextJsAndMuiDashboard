"use client";
import { Box, Drawer, Typography, useMediaQuery, Button } from "@mui/material";
import Image from "next/image";
import SidebarSection from "./DividerSidebar";
import SideBarList from "./sideBarList";
import { useDispatch, useSelector } from "react-redux";
import { toggleMobileOpen } from "@/app/Store/sidebarslice"; 

import {
  ChatBubbleOutline,
  FolderOpen,
  ShoppingCartOutlined,
  Mail,
  HeadphonesOutlined,
  ShareOutlined,
  Close,
} from "@mui/icons-material";


const items = [
  { text: "To Do List", image: "/todo.svg" },
  { text: "Calendar", image: "/calendar.svg" },
  { text: "Contacts", image: "contact.svg" },
  { text: "Chat", icon: <ChatBubbleOutline /> },
  { text: "Email", icon: <Mail /> },
  { text: "File Manager", icon: <FolderOpen /> },
  { text: "Kanban Board", image: "/kanban.svg" },
];

const secondItems = [
  { text: "E-commerce", icon: <ShoppingCartOutlined /> },
  { text: "CRM", image: "contact.svg" },
  { text: "Project Management", image: "/project.svg" },
  { text: "LMS", image: "/learning.svg" },
  { text: "Help Desk", icon: <HeadphonesOutlined /> },
  { text: "Events", image: "/event.svg" },
  { text: "Social Feed", icon: <ShareOutlined /> },
  { text: "Profile", image: "contact.svg" },
  { text: "Users", image: "contact.svg" },
];

export default function SideBar() {
  const isMdUp = useMediaQuery("(min-width:1200px)");
  const collapsed = useSelector((state: { sidebar: { collapsed: boolean } }) => state.sidebar.collapsed);
  const mobileOpen = useSelector((state: { sidebar: { mobileOpen: boolean } }) => state.sidebar.mobileOpen);
  const dispatch = useDispatch();

  const drawerWidth = collapsed ? 80 : 260;


  const handleDrawerToggle = () => {
    dispatch(toggleMobileOpen()); 
    
  };

  const drawer = (
    <Box sx={{ padding: collapsed ? "0 10px" : "0 20px",display:'block' }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: 'center' }}>
      <Box
  sx={{
    display: "flex",
    alignItems: "center",
    justifyContent: collapsed ? "center" : "flex-start",  
    padding: "25px 0",
    width: "100%",
  }}
>
  <Image src="logo-icon.svg" alt="logo" width={35} height={35} />
  
 
  {!collapsed && (
    <Typography
      sx={{
        fontFamily: "var(--font-inter), sans-serif",
        fontSize: "24px",
        fontWeight: "800",
        marginLeft: "10px",
      }}
    >
      Trinta
    </Typography>
  )}
</Box>
<Box sx={{ display: { md: "block", lg: "none" }, color: "black" }}>
<Button onClick={handleDrawerToggle}>
          <Close sx={{ color: "black" }} />
        </Button>
</Box>
       
      </Box>

      <SidebarSection mainText="MAIN" />
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <Button sx={{ textTransform: "none" }}>
          <Image src="/home.svg" alt="home" width={16} height={16} />
          {!collapsed && (
            <Typography sx={{ fontSize: 14, pl: 1 }}>Dashboard</Typography>
          )}
        </Button>
      </Box>

      <SidebarSection mainText="APPS" />
      <SideBarList items={items} collapsed={collapsed} />
      <SidebarSection mainText="PAGES" />
      <SideBarList items={secondItems} collapsed={collapsed} />
    </Box>
  );

  return (
    <Drawer
      variant={isMdUp ? "permanent" : "temporary"}
      open={isMdUp ? true : mobileOpen} 
      onClose={handleDrawerToggle} 
      sx={{
        width: drawerWidth,
        display: "block",
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          overflowX: "hidden",
          transition: "width 0.3s ease",
        },
      }}
    >
      {drawer}
    </Drawer>
  );
}
