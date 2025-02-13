import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import Image from "next/image";
import coinstack from "../public/Deposit@2x.png";

const Invite = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "50px",
        backgroundColor: "#1a1a1a",
        color: "white",
        flexDirection: { xs: "column", md: "row" }, // Responsive layout
        height: "600px"
      }}
    >
      {/* Text Section */}
      <Box sx={{ flex: 1, mr: { md: 5 }, textAlign: { xs: "center", md: "left" } }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          With proven strategies, innovative technology, and a vision to democratize
          institutional-grade investment solutions, we're building the future of
          finance together.
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#ffdd00",
            color: "#000",
            padding: "12px 24px",
            borderRadius: "8px",
            "&:hover": { backgroundColor: "#e6c800" },
          }}
        >
          Invest or partner with us
        </Button>
      </Box>

      {/* Image Section */}
      <Box sx={{ flex: 1, textAlign: "center", mt: { xs: 4, md: 0 } }}>
        <Image src={coinstack} alt="Coin Stack" width={600} height={600} />
      </Box>
    </Box>
  );
};

export default Invite;
