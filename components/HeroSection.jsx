"use client";

import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Image from "next/image";
import designImage1 from "../public/Loop.png";
import designImage2 from "../public/Pattern.png";

const HeroSection = () => {
  return (
    <>
      {/* Hero Section */}
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        alignItems="center"
        justifyContent="space-between"
        padding={{ xs: "20px", md: "50px" }}
        sx={{
          height: { xs: "auto", md: "100vh" },
          backgroundColor: "black",
          color: "white",
          textAlign: "center",
        }}
      >
        {/* Right Side Content */}
        <Box
          flex="1"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          sx={{ px: { xs: 2, md: 5 } }}
        >
          <Typography
            variant="h1"
            fontWeight="bold"
            gutterBottom
            sx={{
              fontSize: { xs: "1.5rem", sm: "2rem", md: "4rem" },
              fontFamily: '__Poppins_1fa6f9',
              textAlign: "center",
              wordBreak: "break-word",
              whiteSpace: "normal",
              display: "block !important",
              visibility: "visible",
              maxWidth: "100%",
              margin: { xs: "0 5%", md: "1% 10%" },
              mb: 2,
            }}
          >
            Expanding investment access with innovation and expertise
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 3,
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.25rem" },
              textAlign: "center",
              margin: { xs: "0 5%", md: "0 6%" },
              maxWidth: "90%",
            }}
          >
            Opus Momentus simplifies investing by offering innovative products
            that bridge traditional and emerging markets. We blend specialized
            talent with proven technology to deliver empowering solutions
            worldwide.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "white",
              color: "black",
              borderRadius: "20px",
              textTransform: "none",
              fontWeight: "bold",
              marginTop: "20px",
              "&:hover": {
                backgroundColor: "yellow",
              },
            }}
          >
            Get in touch
          </Button>
        </Box>
      </Box>
      {/* Video Section with Hovering Images */}
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{
          position: "relative",
          height: "auto",
          backgroundColor: "black",
          color: "white",
        }}
      >
        {/* Left Side Image */}
        <Box
          sx={{
            position: "absolute",
            top: "0%",
            left: "0%",
            transform: "translateY(-60%)",
            display: { xs: "none", md: "block" },
          }}
        >
          <Image
            src={designImage1}
            alt="Left Design"
            style={{ width: "550px", height: "1150px" }}
          />
        </Box>
        {/* Video Section */}
        <Box
          display="flex"
          justifyContent="center"
          width={{ xs: "90%", md: "76%" }}
          marginTop={{ xs: "20px", md: "-120px" }}
          sx={{
            backgroundColor: "black",
            position: "relative",
            py: 5,
            animation: "popupAnimation 1s ease-out",
          }}
        >
          <video
            src="/Hero.mp4"
            autoPlay
            loop
            muted
            controls
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "25px",
            }}
          />
        </Box>
        {/* Right Side Image */}
        <Box
          sx={{
            position: "absolute",
            top: "90%",
            right: "0%",
            transform: "translateY(-60%)",
            display: { xs: "none", md: "block" },
          }}
        >
          <Image
            src={designImage2}
            alt="Design Pattern"
            style={{ width: "250px", height: "700px" }}
          />
        </Box>
      </Box>
      {/* Popup Animation Keyframes */}
      <style jsx>{`
        @keyframes popupAnimation {
          0% {
            transform: scale(0.8);
            opacity: 0;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.5;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};

export default HeroSection;
