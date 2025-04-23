import { Box, Typography } from "@mui/material";

interface SidebarSectionProps {
  mainText: string; 
}

const SidebarSection: React.FC<SidebarSectionProps> = ({ mainText }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
        
        }}
      >
        <Box
          sx={{
            width: "10px",
            height: "1px",
            backgroundColor: "#A9A9C8",
            marginRight: "10px",
            
          }}
        />
        <Typography
          sx={{
            fontSize: "14px",
            fontFamily: "var(--font-poppins), sans-serif",
            color: "#A9A9C8",
          }}
        >
          {mainText}  
        </Typography>
      </Box>
    </Box>
  );
};

export default SidebarSection;
