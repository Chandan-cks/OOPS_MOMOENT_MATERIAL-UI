import React from 'react';
import { Box, Typography, Button, Grid, Paper, Stack } from '@mui/material';
import Image from 'next/image'; 
import Background from "../public/Background.png";
import Phone from "../public/phone-tilt.png";
import p1graph from "../public/img_odn_graph_banner@2x.png";
import coin from "../public/CoinFlip.png";
import banner from "../public/img_dvox_token_banner.png";
import bull from "../public/Bull.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { BoltRounded } from '@mui/icons-material';
import { styled } from "@mui/system";


const ProductPage = () => {

  const FlipImage = styled(Image)({
    transition: "transform 0.6s ease-in-out",
    "&:hover": {
      transform: "rotateY(360deg)",
    },
  });

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor:"black" }}> 
      <Typography variant="h3" fontWeight="bold" component="h1" sx={{ mb: 5, color: 'white', textAlign:"center",marginBottom:"5%" }}>Our products and services</Typography>
      <Image src={Background} alt="Background" width="1500"  height={600} style={{ objectFit: 'cover',marginLeft:"10%" }} /> 

      <Grid container spacing={2} sx={{ mt: -55 }}>
        <Grid item xs={12} md={6} >
          <Box sx={{ display: 'flex', flexDirection: 'column', marginLeft:"20%" }}>
            <Typography variant="h3" fontWeight="bold" sx={{ color: 'white', mb: 5, mx:5 }}>The future of smart investing</Typography>
            <Typography  sx={{ color: 'white',mx:5,mr:30 }}>The OROX app simplifies access to advanced, low-risk strategies. With proven market-neutral solutions, secure management, and blockchain integration, it empowers investors to navigate global markets confidently.</Typography>
            <Button variant="contained"
            sx={{ width: 60, height: 60, marginTop:"50px",marginLeft:"50px", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "white", color: "black",
            "&:hover": {
              backgroundColor: "yellow",
                  },
              }}
            >
            <ArrowForwardIcon />
          </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Image src={Phone} alt="Phone" width="100%" height={700} style={{ objectFit: 'cover', margin:"-260px 0 0 250px" }} /> 
        </Grid>
      </Grid>

      <Grid container spacing={1} sx={{ mt: 0, width: '90%', mx: 'auto' }}>
        <Grid item xs={12} md={6}>
          <Paper elevation={1} sx={{ p: 3, width:"650px", height:"480px", marginLeft:"15px" }}>
            <Typography variant="h4" fontWeight="bold" sx={{ mb: 1 }}>Stable returns with global reach</Typography>
            <Typography sx={{ mb: 0 }}>ODN delivers low-risk returns using proven strategies and advanced financial models that excel in volatility. Accessible through the OROX app as a robust, high-yield investment solution.</Typography>
            <Button variant="contained"
            sx={{ width: 50, height: 50, borderRadius: "50%", display: "flex", mb: 1, justifyContent: "center", alignItems: "center", backgroundColor: "black", color: "white",
            "&:hover": {
              backgroundColor: "yellow",
                  },
              }}
              
            >
            <ArrowForwardIcon />
          </Button>
            <Image src={p1graph} alt="Graphical" width={600} height={260} style={{ objectFit: 'cover', mt: 2 }} /> 
            <Grid style={{ margin: "-220px 0 0 503px" }}>
              <FlipImage src={coin} alt="coinflip" width={50} height={50} />
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3, bgcolor: '#19191B' }}>
            <Image src={banner} alt="banner" width={630} height={230} /> 
            <Image src={bull} alt="Bull" width="90%"  height={180} style={{ objectFit: 'cover', mt: 0, marginTop: "-236px", marginBottom: "54px", marginLeft: "225px"}} /> 
            <Typography variant="h4" fontWeight="bold"  sx={{ color: 'white', mt: 0,  }}>High performance digital token</Typography>
            <Typography sx={{ color: 'white' }}>The DVOX Token is an asset-backed token that democratizes Web3 investments, offering investors an institutional-grade, risk-adjusted growth product through the OROX app.</Typography>
            <Button variant="contained" 
            sx={{ width: 50, height: 50, borderRadius: "50%", display: "flex", mb: 1, justifyContent: "center", alignItems: "center", backgroundColor: "white", color: "black",
            "&:hover": {
              backgroundColor: "yellow",
                  },
              }}
              
            ><ArrowForwardIcon /></Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductPage;