import React from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import ATAS from "../public/ATAS-logo (1).png";
import binance from "../public/binance-smart-chain-seeklogo-new (1).png";
import Chainlink from "../public/Chainlink-Logo-Blue (1).png";
import cqg from "../public/cqg_logo_color_gray-red (1).png";
import ethereum from "../public/ethereum-eth-logo-full-horizonta (1).png";
import Trading from "../public/Trading-Technologies_idBUHeo3IZ (1).png";

const PartnerLogos = () => {
  const logos = [ATAS, binance, Chainlink, ethereum, cqg, Trading];

  return (
    <Box
      sx={{
        backgroundColor: "#000",
        color: "#fff",
        py: 5,
        textAlign: "center",
      }}
    >
      <Typography
        variant="h3"
        component="h2"
        fontWeight="bold"
        gutterBottom
        sx={{ mb: 2 }}
      >
        Our Partners
      </Typography>
      <Typography sx={{ marginTop: 2, marginBottom: 10, fontSize: "1.2rem" }}>
        We work with a range of financial and technology partners from across
        the world.
      </Typography>
      <Box
        sx={{
          display: "flex",
          overflow: "hidden",
          position: "relative",
          justifyContent: "start",
        }}
      >
        {/* Animation Wrapper */}
        <Box
          sx={{
            display: "flex",
            animation: "scrolling 20s linear infinite",
            gap: 10,
            "@keyframes scrolling": {
              "0%": { transform: "translateX(0)" },
              "100%": { transform: "translateX(-100%)" },
            },
          }}
        >
          {/* Double the logos to create a seamless loop */}
          {logos.concat(logos).map((logo, index) => (
            <Box
              key={index}
              sx={{
                flex: "auto",
                width: 250,
                height: "auto",
                position: "relative",
                marginBottom:"50px"
              }}
            >
              <Image
                src={logo}
                alt={`Partner Logo ${index + 1}`}
                layout="responsive"
                objectFit="contain"
                width={100}
                height={100}
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default PartnerLogos;
