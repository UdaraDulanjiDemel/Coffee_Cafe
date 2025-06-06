import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box, AppBar, Toolbar, Typography, Button, Container, useTheme, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';
import { LocalCafe as CoffeeIcon, ShoppingCart as CartIcon } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import About from './pages/About';
import Contact from './pages/Contact';

// Styled components
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'rgba(44, 24, 16, 0.95)',
  backdropFilter: 'blur(8px)',
  boxShadow: 'none',
  borderBottom: '1px solid rgba(200, 162, 122, 0.2)',
}));

const LogoText = styled(Typography)(({ theme }) => ({
  fontFamily: 'Playfair Display, serif',
  fontWeight: 700,
  color: '#C8A27A',
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: '#fff',
  marginLeft: theme.spacing(2),
  '&:hover': {
    color: '#C8A27A',
    backgroundColor: 'rgba(200, 162, 122, 0.1)',
  },
}));

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ 
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      bgcolor: '#FDF6F0'
    }}>
      <StyledAppBar position="sticky">
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <RouterLink to="/" style={{ textDecoration: 'none' }}>
              <LogoText variant="h5">
                <CoffeeIcon sx={{ fontSize: 28 }} />
                {!isMobile && "Brew Haven"}
              </LogoText>
            </RouterLink>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <NavButton component={RouterLink} to="/menu">
                Menu
              </NavButton>
              <NavButton component={RouterLink} to="/about">
                About
              </NavButton>
              <NavButton component={RouterLink} to="/contact">
                Contact
              </NavButton>
              <NavButton 
                component={RouterLink} 
                to="/cart"
                startIcon={<CartIcon />}
                sx={{
                  ml: 2,
                  backgroundColor: 'rgba(200, 162, 122, 0.1)',
                  '&:hover': {
                    backgroundColor: 'rgba(200, 162, 122, 0.2)',
                  }
                }}
              >
                Cart
              </NavButton>
            </Box>
          </Toolbar>
        </Container>
      </StyledAppBar>

      <Box component="main" sx={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Box>

      <Box 
        component="footer" 
        sx={{ 
          py: 4,
          mt: 'auto',
          backgroundColor: '#2C1810',
          color: '#fff'
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 2
          }}>
            <Typography variant="body2" sx={{ color: '#C8A27A' }}>
              © 2024 Brew Haven. All rights reserved.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button color="inherit" component={RouterLink} to="/privacy">
                Privacy Policy
              </Button>
              <Button color="inherit" component={RouterLink} to="/terms">
                Terms of Service
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default App; 