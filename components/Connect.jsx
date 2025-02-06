import { Grid, Typography, Box } from "@mui/material";
import { Phone, Email, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "black", color: "white", p: 4 }}>
      <Grid container spacing={3} alignItems="center">
        {/* Left Section: Logo and Address */}
        <Grid item xs={12} md={6} display="flex" alignItems="center" gap={2}>
          <img
            src="/logo.png" // Replace with your actual logo path
            alt="Logo"
            style={{ width: 60, height: 60, marginLeft: "80px" }}
          />
          <Typography variant="h6" fontWeight="bold">
            Bay 5 North, 2 Locomotive Street
            <br />
            South Eveleigh, 2015 NSW, Australia
          </Typography>
        </Grid>

        {/* Right Section: Contact & Privacy Policy */}
        <Grid item xs={12} md={6} textAlign={{ xs: "center", md: "right" }}>
          <Typography sx={{ cursor: "pointer", mb: 2 }}>
            Privacy policy
          </Typography>
          <Typography variant="h6" fontWeight="bold">Get in Touch</Typography>

          <Box display="flex" flexDirection="column" gap={1} alignItems={{ xs: "center", md: "flex-end" }} mt={1}>
            <Box display="flex" alignItems="center" gap={1}>
              <Phone sx={{ color: "#FFD700" }} />
              <Typography component="a" href="tel:+61 410 340 317" sx={{ color: "white", textDecoration: "none" }}>
                +61 410 340 317
              </Typography>
            </Box>

            <Box display="flex" alignItems="center" gap={1}>
              <Email sx={{ color: "#FFD700" }} />
              <Typography component="a" href="mailto:info@omproprietary.com" sx={{ color: "white", textDecoration: "none" }}>
                info@omproprietary.com
              </Typography>
            </Box>

            <Box display="flex" alignItems="center" gap={1}>
              <LinkedIn sx={{ color: "#0077B5" }} />
              <Typography component="a" href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" sx={{ color: "white", textDecoration: "none" }}>
                LinkedIn
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
