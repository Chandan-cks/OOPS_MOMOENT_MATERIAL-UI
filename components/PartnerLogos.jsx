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
        overflow: "hidden",
      }}
    >
      <Typography
        variant="h4"
        component="h2"
        fontWeight="bold"
        gutterBottom
        sx={{ mb: 2 }}
      >
        Our Partners
      </Typography>
      <Typography sx={{ marginTop: 2, marginBottom: 5, fontSize: "1.2rem" }}>
        We work with a range of financial and technology partners from across
        the world.
      </Typography>
      <Box
        sx={{
          display: "flex",
          overflow: "hidden",
          position: "relative",
          justifyContent: "center",
          width: "100%",
        }}
      >
        {/* Animation Wrapper */}
        <Box
          sx={{
            display: "flex",
            gap: 5,
            animation: "scrolling 20s linear infinite",
            "@keyframes scrolling": {
              "0%": { transform: "translateX(0)" },
              "100%": { transform: "translateX(-50%)" },
            },
          }}
        >
          {/* Double the logos to create a seamless loop */}
          {logos.concat(logos).map((logo, index) => (
            <Box
              key={index}
              sx={{
                flexShrink: 0,
                width: { xs: 100, sm: 150, md: 200, lg: 250 },
                height: "auto",
                position: "relative",
              }}
            >
              <Image
                src={logo}
                alt={`Partner Logo ${index + 1}`}
                layout="intrinsic"
                objectFit="contain"
                width={150}
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
