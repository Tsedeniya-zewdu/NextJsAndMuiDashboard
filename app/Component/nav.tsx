"use client";
import { AppBar, Avatar, IconButton, InputBase, styled, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch} from "react-redux";
import { toggleCollapsed, toggleMobileOpen } from "@/app/Store/sidebarslice"; 
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import SearchIcon from '@mui/icons-material/Search';
import {DarkModeOutlined,MailOutlined,NotificationsOutlined,CalendarTodayOutlined} from '@mui/icons-material';
import LanguageSelector from '@/app/Component/languageselector'

export default function Nav() {
  const isMdUp = useMediaQuery("(min-width:1200px)");
  
  const handleMenuToggle = () => {
    if (isMdUp) {
      dispatch(toggleCollapsed()); 
    } else {
      dispatch(toggleMobileOpen()); 
    }
  };
  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const dispatch = useDispatch();
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#F5F7FA",
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '320px',
    height:'46px',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: '320px',
      height:'46px',
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: theme.spacing(3),
      width: '250px',
      height:'46px',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    right: 0, 
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  

  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
    
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '320px',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));
  return (
    <Box sx={{ flexGrow: 1, height: '80px', boxSizing: "border-box", }}>
    <AppBar
      position="sticky"
      sx={{
        height: 'auto',
        px: '20px',
        py: '17px',
        background: "#ffffff",
        boxShadow: "none",
        display: 'flex',
        justifyContent: 'center', 
        
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          height: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent:"space-between",
          px: 0, 
          '@media (max-width: 990px)': {
      flexDirection:'column',
      gap:'20px'
    },

        }}
      >
        <Box sx={{display:'flex'}}>
        <IconButton edge="start" onClick={handleMenuToggle}>
          <MenuIcon />
        </IconButton>
        <Search>
            <SearchIconWrapper>
              <SearchIcon sx={{color:'#005cbb'}}/>
            </SearchIconWrapper>
            <StyledInputBase
  placeholder="Search here…"
  inputProps={{ 'aria-label': 'search' }}
  sx={{
    color: '#44474e',
    width: '100%',
    pr: '40px',
    '& input::placeholder': {
      transition: 'opacity 0.2s ease',
    },
    '& input:focus::placeholder': {
      opacity: 0,
    },
  }}
/>
          </Search></Box>
          <Box sx={{display:'flex', gap: '20px',
    '@media (min-width:760px)': {
      gap: '30px'},justifyContent:'center',alignItems:'center'}} >
         
          <Box sx={{display:'flex',color:'#818093',gap:"20px",}}>

         < DarkModeOutlined /><MailOutlined /><NotificationsOutlined />
          </Box>
          <Box
  sx={{
    width: 'auto',
    height: '46px',
    border: 'solid 1px #e2e8f0', 
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    px: '12px',
    '@media (max-width: 990px)': {
      display: 'none',
    },
  }}
>
  <CalendarTodayOutlined sx={{ color: '#3761ee', fontSize: '20px' }} />
  <Typography sx={{ fontSize: '14px', color: '#5B5B98',fontFamily:"var(--font-poppins), sans-serif" }}>
    {formattedDate}
  </Typography>
</Box>
<Box>
<LanguageSelector />
</Box>
<Box>
  <Avatar
    src="/women.avif"
    alt="women"
    sx={{ width: 40, height: 40 }} 
 
  />
</Box>
          </Box>
      </Toolbar>
    </AppBar>
  </Box>
  
  );
}
