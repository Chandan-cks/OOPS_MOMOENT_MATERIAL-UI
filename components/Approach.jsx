import * as React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import Image from 'next/image';
import approachBg from '../public/Pattern2.png'; // Right side background design
import number1 from '../public/1.png'; // Replace with actual number icons
import number2 from '../public/2.png';
import number3 from '../public/3.png';
import number4 from '../public/4.png';
import number5 from '../public/5.png';

const steps = [
  { id: 1, title: 'Capital preservation', desc: 'We minimise risk on invested capital while maximising performance and growth stability.', img: number1 },
  { id: 2, title: 'Data-driven decisions', desc: 'Experts with proven “Alpha” use quantitative analysis and advanced algorithms to deliver precision in trading.', img: number2 },
  { id: 3, title: 'Balanced exposure', desc: 'Strategically allocate funds based on market analysis to enhance diversification and deliver superior risk-adjusted returns.', img: number3 },
  { id: 4, title: 'Leverage volatility', desc: 'Harness high-frequency, market-neutral strategies to minimise risk and maximise opportunity.', img: number4 },
  { id: 5, title: 'OROX app', desc: 'Combining robust security with intuitive design, our easy to use platform ensures seamless global access through blockchain integration.', img: number5 },
];

const Approach = () => {
  return (
    <Box sx={{ backgroundColor: '#000', color: '#fff', position: 'relative', overflow: 'hidden' }}>
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, py: 10 }}>
        <Typography variant="h3" align="center" fontWeight="bold" gutterBottom>
          Our Approach
        </Typography>

        <Grid container spacing={4} alignItems="center">
          {/* Left Side - Numbered Steps */}
          <Grid item xs={12} md={6}>
            {steps.map((step) => (
              <Box key={step.id} display="flex" alignItems="center" mb={4}>
                <Image src={step.img} alt={`Step ${step.id}`} width={50} height={50} />
                <Box ml={2}>
                  <Typography variant="h6" fontWeight="bold" color="goldenrod">{step.title}</Typography>
                  <Typography variant="body1">{step.desc}</Typography>
                </Box>
              </Box>
            ))}
          </Grid>

          {/* Right Side - Full Height Background Image */}
          <Grid item xs={12} md={6} position="relative">
            {/* <Image src={approachBg} alt="Approach Background" layout="responsive" width={100} height={100} style={{objectFit: 'cover',width:"100px" }} /> */}
            <Image src={approachBg} style={{width: "300px", height: "600px", marginLeft: "600px"}} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Approach;
