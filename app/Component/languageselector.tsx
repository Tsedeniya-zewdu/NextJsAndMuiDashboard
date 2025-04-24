"use client";

import React, { useState } from "react";
import {
  Menu,
  MenuItem,
  Button,
  Avatar,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const language = [
  { name: "AMH", image: "/ethiopia.svg" },
  { name: "ENG", image: "/US.svg" },
];

export default function LanguageSelector() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [selectedLang, setSelectedLang] = useState(language[0]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (lang: typeof selectedLang) => {
    setSelectedLang(lang);
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        onClick={handleClick}
        sx={{ textTransform: "none", color: "#444" }}
        startIcon={
          <Avatar
            src={selectedLang.image}
            alt={selectedLang.name}
            sx={{ width: 24, height: 15, borderRadius: 0 }}
        
          />
        }
        endIcon={<KeyboardArrowDownIcon />}
      >
        {selectedLang.name}
      </Button>

      <Menu anchorEl={anchorEl} open={open} onClose={() => setAnchorEl(null)}>
        {language.map((lang) => (
          <MenuItem key={lang.name} onClick={() => handleClose(lang)}>
            <ListItemIcon>
              <Avatar src={lang.image} alt={lang.name} sx={{ width: 24, height: 15 ,borderRadius: 0}} />
            </ListItemIcon>
            <ListItemText>{lang.name}</ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
