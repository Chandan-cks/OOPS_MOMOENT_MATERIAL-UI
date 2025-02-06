import * as React from 'react';
import { Box, Typography, Grid, Container, Card, CardContent, CardMedia } from '@mui/material';
import Image from 'next/image';
import billGatesImage from '../public/img_danmo.png'; // Replace with the actual image path
import sideimg from "../public/Loop6 (1).png";
import star from "../public/Star.png";
import rightimg from "../public/image.png";

const Mission = () => {
  return (
    <Box sx={{ backgroundColor: '#000', color: '#fff' }}>
      <Container maxWidth="lg">
        <Box sx={{ py: 10, textAlign: 'center' }}>
          <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', mb: 4 }}>
            Opus Momentus' Mission
          </Typography>
          <Typography variant="body1" sx={{fontSize: "1rem", lineHeight: "2",maxWidth: "1014px", marginLeft: "74px"}}>
            Our mission is to democratize access to a range of advanced investment options, break traditional barriers to entry with our innovative solutions, and contribute to a more equitable global investment landscape.
          </Typography>
        </Box>

        <Grid container spacing={5} sx={{ backgroundColor: '#382818', color: '#fff' }} style={{width: "1910px", marginLeft: "-380px", display: "flex", alignItems: "center", height: "500px"}}>
                <Image
                  src={sideimg}
                  alt="Left Design"
                  style={{
                    width: "300px",
                    height: "400px",
                    margin: "-24px 0px 0 0px"
                  }}
                />
          <Grid item xs={12} md={6} style={{    textAlign: "left", margin: "0px 0px 0px -230px"}}>
              <CardMedia
                component="img"
                sx={{ width: 200, height: 200, borderRadius: '50%', border: '2px solid #fff', mr: 4 }}
                image={billGatesImage.src}
                alt="Daniel Mo"
              />
              <CardContent style={{marginLeft: "40px"}}>
                <Typography variant="h5" component="h3">Daniel Mo</Typography>
                <Typography variant="subtitle1" color="#fff">Founder & MD</Typography>
              </CardContent>

          </Grid>
          <Image
                  src={star}
                  alt="Right"
                  style={{
                    width: "70px",
                    height: "70px",
                    margin: "200px 0px 0px -450px"
                  }}
                />
          <Grid item xs={12} md={8} style={{margin: "-500px 0px 0px 500px"}} >
          <Image
                  src={rightimg}
                  alt="Right"
                  style={{
                    width: "200px",
                    height: "100px",
                    margin: "-100px 0px -50px 770px"
                  }}
                />
            <Typography variant="h4" sx={{ lineHeight: 1.5}}>
              Opus Momentus is an emerging innovator in fintech and investments, leveraging years of proprietary trading expertise and cutting-edge technology. Our global partnerships with industry specialists and fintech leaders position us at the forefront of delivering curated, risk-adjusted solutions.
            </Typography>
            
          </Grid>
          
        </Grid>
        
      </Container>
    </Box>
  );
};

export default Mission;