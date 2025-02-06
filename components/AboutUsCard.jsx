import React from "react";
import Image from "next/image";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import Proven from "../public/Proven-strategies.png";
import Cutting from "../public/Cutting-edge-technology.png";
import Accessible from "../public/Accessible-to-all-investors.png";

const AboutUsCard = () => {
  return (
    <>
    <Box
      sx={{
        textAlign: "center",
        py: 6,
        px: 3,
        color: "#fff",
        backgroundColor: "black",
      }}
    >
      <Typography
        variant="h3"
        component="h2"
        fontWeight="bold"
        gutterBottom
        sx={{ marginBottom: 3 }}
      >
        What We Do
      </Typography>

      <Typography
        variant="body1"
        sx={{ marginTop: 1, marginBottom: 4, fontSize: "1.2rem" }}
      >
        We specialize in innovative, market-neutral investment solutions designed for consistency and reduced risk.
      </Typography>

      <Grid container spacing={4} justifyContent="center" alignItems="stretch">
        {/* Card 1 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              backgroundColor: "#000",
              borderRadius: "20px",
              boxShadow: "0 8px 15px rgba(0, 0, 0, 0.5)",
              textAlign: "center",
              color: "#fff",
              padding:" 0px 50px",
              animation: "scrollUp 1s ease-in-out",
            }}
          >
            <Box sx={{ position: "relative", width: 90, height: 90, mx: "auto", mt: 2, mb: 2 }}>
              <Image src={Proven} alt="Proven Strategies" layout="fill" objectFit="contain" />
            </Box>
            <CardContent>
              <Typography variant="h5" fontWeight="bold" color="yellow" gutterBottom>
                Proven Strategies
              </Typography>
              <Typography variant="body1" sx={{ color: "#ccc", lineHeight: 1.6, fontSize: "1.3rem" }}>
                With decades of expertise, we combine advanced quantitative models and diverse asset class strategies to
                ensure consistent and reliable returns in all market conditions.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Card 2 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              backgroundColor: "#000",
              borderRadius: "20px",
              boxShadow: "0 8px 15px rgba(0, 0, 0, 0.5)",
              textAlign: "center",
              color: "#fff",
              padding:" 0px 50px",
              animation: "scrollUp 1.5s ease-in-out",
            }}
          >
            <Box sx={{ position: "relative", width: 90, height: 90, mx: "auto", mt: 2, mb: 2 }}>
              <Image src={Cutting} alt="Cutting-edge Technology" layout="fill" objectFit="contain" />
            </Box>
            <CardContent>
              <Typography variant="h5" fontWeight="bold" color="yellow" gutterBottom>
                Cutting-edge Technology
              </Typography>
              <Typography variant="body1" sx={{ color: "#ccc", lineHeight: 1.6, fontSize: "1.3rem"}}>
                Our trading and technology experts utilize advanced tools including blockchain, market sentiment analysis,
                and AI-driven operations management.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Card 3 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              backgroundColor: "#000",
              borderRadius: "20px",
              boxShadow: "0 8px 15px rgba(0, 0, 0, 0.5)",
              textAlign: "center",
              color: "#fff",
              padding:" 0px 50px",
              animation: "scrollUp 2s ease-in-out",
            }}
          >
            <Box sx={{ position: "relative", width: 90, height: 90, mx: "auto", mt: 2, mb: 2 }}>
              <Image src={Accessible} alt="Accessible to All Investors" layout="fill" objectFit="contain" />
            </Box>
            <CardContent>
              <Typography variant="h5" fontWeight="bold" color="yellow" gutterBottom>
                Accessible to All Investors
              </Typography>
              <Typography variant="body1" sx={{ color: "#ccc", lineHeight: 1.6, fontSize: "1.3rem"}}>
                Our unique technology solutions simplify investing by making institutional-grade investment opportunities
                seamlessly accessible to anyone, anywhere in the world.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
    {/* Popup Animation Keyframes */}
    <style jsx>{`
                @keyframes scrollUp {
          0% {
            transform: translateY(50px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};

export default AboutUsCard;
