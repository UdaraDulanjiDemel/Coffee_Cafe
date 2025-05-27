import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  TextField,
  Paper,
  useTheme,
  useMediaQuery,
  alpha
} from '@mui/material';
import {
  LocalCafe as CoffeeIcon,
  Star as StarIcon,
  Park as ParkIcon
} from '@mui/icons-material';

function Home() {
  const { items = [] } = useSelector((state) => state.products);
  const featuredProducts = items.slice(0, 3);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ bgcolor: 'background.default' }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: `linear-gradient(${alpha('#2C1810', 0.7)}, ${alpha('#2C1810', 0.7)}),
            url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&auto=format&fit=crop&q=60')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: { xs: '500px', md: '700px' },
          borderRadius: { xs: 0, md: theme.shape.borderRadius * 3 },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          color: 'white',
          mb: { xs: 4, md: 8 },
          position: 'relative',
          overflow: 'hidden',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '150px',
            background: `linear-gradient(to top, ${theme.palette.background.default}, transparent)`
          }
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '2.5rem', md: '4rem' },
            mb: 3,
            fontWeight: 800,
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
            letterSpacing: '0.02em'
          }}
        >
          Welcome to Our Coffee Cafe
        </Typography>
        <Typography
          variant="h5"
          sx={{
            maxWidth: '700px',
            mb: 5,
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
            px: 2,
            fontWeight: 400,
            lineHeight: 1.6
          }}
        >
          Discover the perfect blend of rich flavors and cozy atmosphere.
          Experience our carefully crafted coffee drinks made with premium ingredients.
        </Typography>
        <Button
          component={Link}
          to="/menu"
          variant="contained"
          size="large"
          sx={{
            borderRadius: theme.shape.borderRadius * 4,
            px: 6,
            py: 2,
            fontSize: '1.2rem',
            bgcolor: '#C8A27A',
            color: '#2C1810',
            boxShadow: '0 4px 14px rgba(0, 0, 0, 0.2)',
            '&:hover': {
              bgcolor: '#B38B5F',
              transform: 'translateY(-2px)',
              boxShadow: '0 6px 20px rgba(0, 0, 0, 0.25)'
            }
          }}
        >
          Explore Menu
        </Button>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ mb: { xs: 6, md: 10 } }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card
              elevation={0}
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                p: 4,
                bgcolor: 'background.paper',
                borderRadius: theme.shape.borderRadius * 2,
                transition: theme.transitions.create(['transform', 'box-shadow']),
                border: '1px solid',
                borderColor: 'divider',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 12px 24px rgba(0, 0, 0, 0.1)'
                }
              }}
            >
              <CoffeeIcon sx={{ fontSize: 70, color: '#C8A27A', mb: 3 }} />
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: '#2C1810' }}>
                Premium Quality
              </Typography>
              <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
                We source the finest coffee beans from around the world to ensure the best taste in every cup.
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card
              elevation={0}
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                p: 4,
                bgcolor: 'background.paper',
                borderRadius: theme.shape.borderRadius * 2,
                transition: theme.transitions.create(['transform', 'box-shadow']),
                border: '1px solid',
                borderColor: 'divider',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 12px 24px rgba(0, 0, 0, 0.1)'
                }
              }}
            >
              <StarIcon sx={{ fontSize: 70, color: '#C8A27A', mb: 3 }} />
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: '#2C1810' }}>
                Expert Baristas
              </Typography>
              <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
                Our skilled baristas are trained to craft the perfect coffee drink just for you.
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card
              elevation={0}
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                p: 4,
                bgcolor: 'background.paper',
                borderRadius: theme.shape.borderRadius * 2,
                transition: theme.transitions.create(['transform', 'box-shadow']),
                border: '1px solid',
                borderColor: 'divider',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 12px 24px rgba(0, 0, 0, 0.1)'
                }
              }}
            >
              <ParkIcon sx={{ fontSize: 70, color: '#C8A27A', mb: 3 }} />
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: '#2C1810' }}>
                Sustainable Practices
              </Typography>
              <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
                We're committed to sustainable coffee farming and eco-friendly practices.
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Featured Products Section */}
      <Container maxWidth="lg" sx={{ mb: { xs: 6, md: 10 } }}>
        <Typography
          variant="h2"
          align="center"
          sx={{ 
            mb: 6, 
            color: '#2C1810',
            fontWeight: 700,
            fontSize: { xs: '2rem', md: '2.5rem' }
          }}
        >
          Featured Drinks
        </Typography>
        <Grid container spacing={4}>
          {featuredProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card
                elevation={0}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  bgcolor: 'background.paper',
                  borderRadius: theme.shape.borderRadius * 2,
                  transition: theme.transitions.create(['transform', 'box-shadow']),
                  border: '1px solid',
                  borderColor: 'divider',
                  overflow: 'hidden',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.1)'
                  }
                }}
              >
                <CardMedia
                  component="img"
                  height="280"
                  image={product.image}
                  alt={product.name}
                  sx={{
                    transition: theme.transitions.create('transform'),
                    '&:hover': {
                      transform: 'scale(1.05)'
                    }
                  }}
                />
                <CardContent sx={{ flexGrow: 1, p: 4 }}>
                  <Typography 
                    gutterBottom 
                    variant="h5" 
                    component="h2"
                    sx={{ 
                      fontWeight: 600,
                      color: '#2C1810',
                      mb: 2
                    }}
                  >
                    {product.name}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ 
                      mb: 3,
                      lineHeight: 1.7
                    }}
                  >
                    {product.description}
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{ 
                      mb: 3, 
                      fontWeight: 'bold',
                      color: '#C8A27A'
                    }}
                  >
                    ${product.price.toFixed(2)}
                  </Typography>
                  <Button
                    component={Link}
                    to="/menu"
                    variant="contained"
                    fullWidth
                    sx={{
                      borderRadius: theme.shape.borderRadius * 3,
                      py: 1.5,
                      bgcolor: '#C8A27A',
                      color: '#2C1810',
                      '&:hover': {
                        bgcolor: '#B38B5F',
                        transform: 'translateY(-2px)'
                      }
                    }}
                  >
                    View Menu
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Newsletter Section */}
      <Container maxWidth="lg" sx={{ mb: { xs: 6, md: 10 } }}>
        <Paper
          elevation={0}
          sx={{
            p: { xs: 4, md: 6 },
            borderRadius: theme.shape.borderRadius * 3,
            bgcolor: '#2C1810',
            color: 'white',
            textAlign: 'center',
            border: '1px solid',
            borderColor: 'divider'
          }}
        >
          <Typography 
            variant="h3" 
            gutterBottom
            sx={{ 
              fontWeight: 700,
              fontSize: { xs: '1.75rem', md: '2.25rem' }
            }}
          >
            Stay Updated
          </Typography>
          <Typography 
            sx={{ 
              mb: 5, 
              opacity: 0.9,
              maxWidth: '600px',
              mx: 'auto',
              lineHeight: 1.7
            }}
          >
            Subscribe to our newsletter for exclusive offers and updates.
          </Typography>
          <Box
            component="form"
            sx={{
              display: 'flex',
              gap: 2,
              maxWidth: '500px',
              mx: 'auto',
              flexDirection: { xs: 'column', sm: 'row' }
            }}
          >
            <TextField
              fullWidth
              placeholder="Enter your email"
              type="email"
              required
              sx={{
                bgcolor: 'white',
                borderRadius: theme.shape.borderRadius * 3,
                '& .MuiOutlinedInput-root': {
                  borderRadius: theme.shape.borderRadius * 3,
                  '& fieldset': {
                    border: 'none'
                  }
                }
              }}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                borderRadius: theme.shape.borderRadius * 3,
                px: 4,
                py: 1.5,
                bgcolor: '#C8A27A',
                color: '#2C1810',
                '&:hover': {
                  bgcolor: '#B38B5F',
                  transform: 'translateY(-2px)'
                }
              }}
            >
              Subscribe
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default Home; 