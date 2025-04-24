

import { Box, Typography,} from "@mui/material";
import * as React from 'react';

import Paper from '@mui/material/Paper';
export default function Home() {
  return (
    <Box style={{display:"flex", width:"200",height:"auto"}}>
      
    
   
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        '& > :not(style)': {
          m: 1,
          width: 316,
          height: 280,
        },
      }}
    >
      {Array.from({ length: 6 }).map((_, index) => (
        <Paper key={index} elevation={index % 4}><Typography variant="h3"> </Typography></Paper> 
      ))}
    </Box>
   
    </Box>
  );
}
