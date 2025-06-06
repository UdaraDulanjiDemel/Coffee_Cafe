import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  LocalCafe as CoffeeIcon,
  EmojiEvents as AwardIcon,
  Groups as TeamIcon,
  Park as EcoIcon
} from '@mui/icons-material';

function About() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ py: { xs: 4, md: 8 } }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: `linear-gradient(rgba(44, 24, 16, 0.8), rgba(44, 24, 16, 0.8)),
            url('https://images.unsplash.com/photo-1498804103079-a6351b050096?w=1200&auto=format&fit=crop&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          py: { xs: 8, md: 12 },
          mb: { xs: 6, md: 8 },
          textAlign: 'center',
          color: 'white'
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h2"
            sx={{
              mb: 3,
              fontWeight: 700,
              fontSize: { xs: '2.5rem', md: '3.5rem' }
            }}
          >
            Our Story
          </Typography>
          <Typography
            variant="h6"
            sx={{
              maxWidth: '800px',
              mx: 'auto',
              opacity: 0.9,
              lineHeight: 1.6
            }}
          >
            Founded in 2020, Brew Haven has been crafting exceptional coffee experiences
            with passion and dedication. Our journey began with a simple dream: to create
            a space where coffee lovers could enjoy the perfect cup in a warm, inviting atmosphere.
          </Typography>
        </Container>
      </Box>

      {/* Values Section */}
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                height: '100%',
                bgcolor: 'background.paper',
                borderRadius: theme.shape.borderRadius * 2,
                border: '1px solid',
                borderColor: 'divider',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)'
                }
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <AwardIcon sx={{ fontSize: 40, color: '#C8A27A', mr: 2 }} />
                <Typography variant="h5" sx={{ fontWeight: 600, color: '#2C1810' }}>
                  Our Commitment
                </Typography>
              </Box>
              <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
                We are committed to sourcing the finest coffee beans from sustainable farms
                around the world. Our expert roasters carefully craft each batch to bring
                out the unique flavors and aromas that make our coffee special.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                height: '100%',
                bgcolor: 'background.paper',
                borderRadius: theme.shape.borderRadius * 2,
                border: '1px solid',
                borderColor: 'divider',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)'
                }
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <TeamIcon sx={{ fontSize: 40, color: '#C8A27A', mr: 2 }} />
                <Typography variant="h5" sx={{ fontWeight: 600, color: '#2C1810' }}>
                  Our Team
                </Typography>
              </Box>
              <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
                Our passionate team of baristas brings years of experience and dedication
                to every cup they serve. We believe in continuous learning and innovation
                to provide you with the best coffee experience possible.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                bgcolor: 'background.paper',
                borderRadius: theme.shape.borderRadius * 2,
                border: '1px solid',
                borderColor: 'divider',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)'
                }
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <EcoIcon sx={{ fontSize: 40, color: '#C8A27A', mr: 2 }} />
                <Typography variant="h5" sx={{ fontWeight: 600, color: '#2C1810' }}>
                  Sustainability
                </Typography>
              </Box>
              <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
                At Brew Haven, we are committed to sustainable practices. From our
                eco-friendly packaging to our waste reduction initiatives, we strive
                to minimize our environmental impact while delivering exceptional
                coffee experiences.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default About; 