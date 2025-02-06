"use client"; // Ensure this is at the top of the file

import React, { useState, useEffect } from "react";
import Image from "next/image";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import logo from "../public/logo.png"; // Replace with the correct image path

function ResponsiveAppBar() {
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <AppBar
      position="fixed"
      elevation={0}
      style={{
        backgroundColor: isScrolled ? "rgba(0, 0, 0, 0.8)" : "black",
        backdropFilter: isScrolled ? "blur(10px)" : "none", // Add blur when scrolled
        transition: "background-color 0.3s ease, backdrop-filter 0.3s ease",
        boxShadow: "none",
      }}
    >
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo */}
        <Box display="flex" alignItems="center">
          <Avatar
            alt="Logo"
            src={logo.src}
            style={{ marginLeft: "80px" }}
          />
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

        {/* Navigation Links */}
        <Box display="flex" gap={10}>
          <Button
          style={{color: "white",textTransform: "none",fontSize: "15px"}}
          >
            What we do
          </Button>
          <Button
          style={{color: "white",textTransform: "none",fontSize: "15px"}}
          >
            Our products and services
          </Button>
          <Button
          style={{color: "white",textTransform: "none",fontSize: "15px"}}
          >
            Our approach
          </Button>
        </Box>

        {/* CTA Button */}
        <Button variant="contained" 
            sx={{ backgroundColor: "white",
              color: "black",
              borderRadius: "20px",
              textTransform: "none",
              fontWeight: "bold",
              marginRight: "70px",
            "&:hover": {
              backgroundColor: "yellow",
                  },
              }}>Get in touch</Button>
      </Toolbar>
    </AppBar>
  );
}

export default ResponsiveAppBar;
