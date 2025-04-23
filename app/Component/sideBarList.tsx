import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";

const SideBarList = ({ items, collapsed }: { items: any[]; collapsed: boolean }) => {
  return (
    <Box>
      {items.map((item, index) => (
        <Button
          key={index}
          sx={{
            color:"#5B5B98",
            display: "flex",
            alignItems: "center",
            justifyContent: collapsed ? "center" : "flex-start",
            padding: "8px 0",
            minWidth: 0,
            width: "100%",
            textTransform: "none",
            marginBottom: "10px", 
            gap: collapsed ? 0 : "14px",
          }}
        >
          {item.icon ? (
           <Box
           sx={{
             width: 16,
             height: 16,
             display: "flex",
             justifyContent: "center",
             alignItems: "center",
             "& svg": {
               fontSize: 18, 
             },
           }}
         >
           {item.icon}
         </Box>
          ) : (
            <Image
  src={item.image}
  alt={item.text}
  width={16}
  height={16}
  style={{ width: '16px', height: '16px', objectFit: 'contain' }}
/>
          )}

          {!collapsed && (
            <Typography
              sx={{
                fontSize: "14px",
                fontFamily: "var(--font-inter), sans-serif",
              }}
            >
              {item.text}
            </Typography>
          )}
        </Button>
      ))}
    </Box>
  );
};

export default SideBarList;
