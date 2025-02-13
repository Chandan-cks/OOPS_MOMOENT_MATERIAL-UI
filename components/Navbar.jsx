"use client"; // Ensure this is at the top of the file

import React, { useState, useEffect } from "react";
import Image from "next/image";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import logo from "../public/logo.png"; // Replace with the correct image path

function ResponsiveAppBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // Adjust the scroll threshold as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      style={{
        backgroundColor: isScrolled ? "rgba(0, 0, 0, 0.8)" : "black",
        backdropFilter: isScrolled ? "blur(10px)" : "none",
        transition: "background-color 0.3s ease, backdrop-filter 0.3s ease",
        boxShadow: "none",
      }}
    >
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo */}
        <Box display="flex" alignItems="center">
          <Avatar alt="Logo" src={logo.src} style={{ marginLeft: "20px" }} />
          <Typography
            style={{
              fontWeight: "bold",
              color: "white",
              fontSize: "18px",
              marginLeft: "10px",
            }}
          >
            OPUS MOMENTUS
          </Typography>
        </Box>

        {!isMobile && (
          <Box display="flex" justifyContent="center" flexGrow={1}>
            {[
              "What we do",
              "Our products and services",
              "Our approach",
            ].map((text, index) => (
              <Button
                key={index}
                sx={{
                  color: "white",
                  textTransform: "none",
                  fontSize: "15px",
                  position: "relative",
                  overflow: "hidden",
                  mx: 2,
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    top: 0,
                    left: 0,
                    background: "rgba(255, 255, 255, 0.2)",
                    transform: "scaleX(0)",
                    transformOrigin: "left",
                    transition: "transform 0.3s ease-in-out",
                  },
                  "&:hover::before, &:focus::before": {
                    transform: "scaleX(1)",
                  },
                  "&:active": {
                    backgroundColor: "rgba(255, 255, 255, 0.3)",
                    transition: "background-color 0.2s ease-in-out",
                  },
                }}
              >
                {text}
              </Button>
            ))}
          </Box>
        )}

        {isMobile ? (
          <>
            <IconButton edge="end" color="inherit" onClick={handleMenuOpen}>
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              keepMounted
            >
              <MenuItem onClick={handleMenuClose}>What we do</MenuItem>
              <MenuItem onClick={handleMenuClose}>Our products and services</MenuItem>
              <MenuItem onClick={handleMenuClose}>Our approach</MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    backgroundColor: "white",
                    color: "black",
                    borderRadius: "20px",
                    textTransform: "none",
                    fontWeight: "bold",
                    "&:hover": {
                      backgroundColor: "yellow",
                    },
                  }}
                >
                  Get in touch
                </Button>
              </MenuItem>
            </Menu>
          </>
        ) : (
          <Button
            variant="contained"
            sx={{
              backgroundColor: "white",
              color: "black",
              borderRadius: "20px",
              textTransform: "none",
              fontWeight: "bold",
              marginRight: "70px",
              "&:hover": {
                backgroundColor: "yellow",
              },
            }}
          >
            Get in touch
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default ResponsiveAppBar;
