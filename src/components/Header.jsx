import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box, 
  Container,
  IconButton,
  Menu,
  MenuItem,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { 
  Menu as MenuIcon,
  AccountCircle,
  Search,
  Phone
} from '@mui/icons-material';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'About', path: '/about' },
    { label: 'Resources', path: '/resources' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <AppBar 
      position="sticky"
      elevation={0}
      sx={{ 
        backgroundColor: 'background.paper',
        color: 'text.primary',
        borderBottom: '1px solid',
        borderColor: 'divider',
        py: 1
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo/Brand */}
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 4,
              fontWeight: 700,
              color: 'primary.main',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <Box 
              component="span" 
              sx={{ 
                backgroundColor: 'primary.main', 
                color: 'white',
                px: 1.5,
                py: 0.5,
                borderRadius: 1,
                mr: 1
              }}
            >
              FixMyDB
            </Box>
          </Typography>

          {/* Desktop Navigation */}
          {!isMobile && (
            <Box sx={{ flexGrow: 1, display: 'flex' }}>
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  component={Link}
                  to={item.path}
                  sx={{
                    mx: 1,
                    color: 'text.primary',
                    '&:hover': {
                      color: 'primary.main',
                      backgroundColor: 'transparent'
                    }
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}

          {/* Right-side buttons/actions */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton 
              size="large" 
              aria-label="search" 
              color="inherit"
              sx={{ mr: 1 }}
            >
              <Search />
            </IconButton>

            {!isMobile && (
              <>
                <Button
                  variant="outlined"
                  startIcon={<Phone />}
                  sx={{
                    mr: 2,
                    borderWidth: '2px',
                    '&:hover': {
                      borderWidth: '2px'
                    }
                  }}
                >
                  Call Us
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  component={Link}
                  to="/contact"
                >
                  Get Consultation
                </Button>
              </>
            )}

            {/* Mobile menu button */}
            {isMobile && (
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="mobile-menu"
                aria-haspopup="true"
                onClick={toggleMobileMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            )}
          </Box>
        </Toolbar>

        {/* Mobile Menu */}
        {isMobile && mobileMenuOpen && (
          <Box 
            sx={{ 
              p: 2,
              borderTop: '1px solid',
              borderColor: 'divider'
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.label}
                component={Link}
                to={item.path}
                fullWidth
                sx={{
                  justifyContent: 'flex-start',
                  px: 3,
                  py: 1.5,
                  my: 0.5,
                  color: 'text.primary',
                  '&:hover': {
                    color: 'primary.main',
                    backgroundColor: 'action.hover'
                  }
                }}
              >
                {item.label}
              </Button>
            ))}
            <Box sx={{ display: 'flex', mt: 2 }}>
              <Button
                variant="outlined"
                fullWidth
                startIcon={<Phone />}
                sx={{ mr: 1 }}
              >
                Call
              </Button>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                component={Link}
                to="/contact"
              >
                Contact
              </Button>
            </Box>
          </Box>
        )}
      </Container>
    </AppBar>
  );
}

export default NavBar;