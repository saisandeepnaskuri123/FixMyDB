import { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box, 
  IconButton,
  TextField,
  InputAdornment,
  Paper,
  List,
  ListItem,
  ListItemText,
  CircularProgress,
  useMediaQuery,
  useTheme,
  Drawer,
  Divider
} from '@mui/material';
import { 
  Menu as MenuIcon,
  Search as SearchIcon,
  Close as CloseIcon,
  Phone as PhoneIcon
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { searchContent } from '../utils/searchService';

function NavBar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'About', path: '/about' },
    { label: 'Resources', path: '/resources' },
    { label: 'Contact', path: '/contact' }
  ];

  // Debounced search
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);
    const timer = setTimeout(async () => {
      try {
        const results = await searchContent(searchQuery);
        setSearchResults(results);
      } catch (error) {
        console.error("Search error:", error);
      } finally {
        setIsSearching(false);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const handleSearchClose = () => {
    setSearchQuery('');
    setSearchResults([]);
    setSearchOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <AppBar 
      position="sticky"
      elevation={0}
      sx={{ 
        backgroundColor: 'background.paper',
        color: 'text.primary',
        borderBottom: '1px solid',
        borderColor: 'divider',
        py: isMobile ? 0 : 1
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ minHeight: isMobile ? 64 : 72 }}>
          {/* Logo/Brand */}
          <Typography
            variant={isMobile ? 'subtitle1' : 'h6'}
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: isMobile ? 2 : 4,
              fontWeight: 700,
              color: 'primary.main',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              flexShrink: 0
            }}
          >
            <Box 
              component="span" 
              sx={{ 
                backgroundColor: 'primary.main', 
                color: 'white',
                px: isMobile ? 1 : 1.5,
                py: isMobile ? 0.3 : 0.5,
                borderRadius: 1,
                mr: 1,
                fontSize: isMobile ? '0.875rem' : '1rem'
              }}
            >
              FixMyDB
            </Box>
          </Typography>

          {/* Desktop Navigation */}
          {!isMobile && (
            <>
              <Box sx={{ flexGrow: 1, display: 'flex' }}>
                {navItems.map((item) => (
                  <Button
                    key={item.label}
                    component={Link}
                    to={item.path}
                    sx={{
                      mx: 1,
                      color: 'text.primary',
                      fontWeight: 500,
                      fontSize: '0.9375rem',
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

              {/* Search Bar - Desktop */}
              <Box sx={{ width: isSmallMobile ? '100%' : 300, mx: 2, position: 'relative' }}>
                <TextField
                  fullWidth
                  size="small"
                  placeholder="Search documentation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setSearchOpen(true)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon fontSize="small" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        {searchQuery && (
                          <IconButton 
                            onClick={handleSearchClose} 
                            size="small"
                            edge="end"
                            sx={{ p: 0.5 }}
                          >
                            {isSearching ? <CircularProgress size={18} /> : <CloseIcon fontSize="small" />}
                          </IconButton>
                        )}
                      </InputAdornment>
                    ),
                    sx: {
                      fontSize: '0.875rem',
                      height: 38
                    }
                  }}
                />
                {searchOpen && searchResults.length > 0 && (
                  <Paper 
                    elevation={3} 
                    sx={{
                      position: 'absolute',
                      top: '100%',
                      left: 0,
                      right: 0,
                      zIndex: theme.zIndex.modal + 1,
                      mt: 1,
                      maxHeight: 400,
                      overflow: 'auto'
                    }}
                  >
                    <List dense>
                      {searchResults.map((result) => (
                        <ListItem 
                          key={result.id} 
                          component={Link} 
                          to={result.path}
                          onClick={handleSearchClose}
                          sx={{
                            '&:hover': {
                              backgroundColor: 'action.hover'
                            }
                          }}
                        >
                          <ListItemText
                            primary={result.title}
                            secondary={result.type}
                            primaryTypographyProps={{ fontSize: '0.875rem' }}
                            secondaryTypographyProps={{ fontSize: '0.75rem' }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Paper>
                )}
              </Box>
            </>
          )}

          {/* Right-side buttons/actions */}
          <Box sx={{ display: 'flex', alignItems: 'center', ml: 'auto' }}>
            {!isMobile && (
              <>
                <Button
                  variant="outlined"
                  startIcon={<PhoneIcon fontSize="small" />}
                  sx={{
                    mr: 2,
                    borderWidth: '2px',
                    px: 2,
                    py: 0.8,
                    fontSize: '0.8125rem',
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
                  sx={{
                    minWidth: 120,
                    px: 2,
                    py: 0.8,
                    fontSize: '0.8125rem'
                  }}
                >
                  Get Consultation
                </Button>
              </>
            )}

            {/* Mobile menu button */}
            {isMobile && (
              <>
                <IconButton
                  size="medium"
                  aria-label="search"
                  onClick={() => setSearchOpen(!searchOpen)}
                  color="inherit"
                  sx={{ mr: 0.5 }}
                >
                  <SearchIcon fontSize={isSmallMobile ? 'small' : 'medium'} />
                </IconButton>
                <IconButton
                  size="medium"
                  aria-label="menu"
                  aria-controls="mobile-menu"
                  aria-haspopup="true"
                  onClick={toggleMobileMenu}
                  color="inherit"
                >
                  <MenuIcon fontSize={isSmallMobile ? 'small' : 'medium'} />
                </IconButton>
              </>
            )}
          </Box>
        </Toolbar>

        {/* Mobile Search - appears below */}
        {isMobile && searchOpen && (
          <Box sx={{ p: 2, borderTop: '1px solid', borderColor: 'divider' }}>
            <Box sx={{ position: 'relative' }}>
              <TextField
                fullWidth
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                size="small"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon fontSize="small" />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      {searchQuery && (
                        <IconButton 
                          onClick={handleSearchClose} 
                          size="small"
                          edge="end"
                          sx={{ p: 0.5 }}
                        >
                          {isSearching ? <CircularProgress size={18} /> : <CloseIcon fontSize="small" />}
                        </IconButton>
                      )}
                    </InputAdornment>
                  ),
                  sx: {
                    fontSize: '0.875rem',
                    height: 38
                  }
                }}
              />
              {searchResults.length > 0 && (
                <Paper elevation={3} sx={{ mt: 1, maxHeight: 300, overflow: 'auto' }}>
                  <List dense>
                    {searchResults.map((result) => (
                      <ListItem 
                        key={result.id} 
                        component={Link} 
                        to={result.path}
                        onClick={handleSearchClose}
                        sx={{
                          py: 0.75,
                          '&:hover': {
                            backgroundColor: 'action.hover'
                          }
                        }}
                      >
                        <ListItemText
                          primary={result.title}
                          secondary={result.type}
                          primaryTypographyProps={{ fontSize: '0.875rem' }}
                          secondaryTypographyProps={{ fontSize: '0.75rem' }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Paper>
              )}
            </Box>
          </Box>
        )}
      </Container>

      {/* Mobile Menu Drawer */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={toggleMobileMenu}
        PaperProps={{
          sx: {
            width: isSmallMobile ? '100%' : 320,
            p: 2,
            boxSizing: 'border-box'
          }
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 1 }}>
          <IconButton onClick={toggleMobileMenu}>
            <CloseIcon />
          </IconButton>
        </Box>
        
        <Divider sx={{ mb: 2 }} />
        
        <List>
          {navItems.map((item) => (
            <ListItem 
              key={item.label} 
              component={Link} 
              to={item.path}
              onClick={toggleMobileMenu}
              sx={{
                px: 2,
                py: 1.5,
                color: 'text.primary',
                '&:hover': {
                  color: 'primary.main',
                  backgroundColor: 'action.hover'
                }
              }}
            >
              <ListItemText 
                primary={item.label} 
                primaryTypographyProps={{ fontWeight: 500 }}
              />
            </ListItem>
          ))}
        </List>
        
        <Box sx={{ p: 2, mt: 'auto' }}>
          <Button
            variant="outlined"
            fullWidth
            startIcon={<PhoneIcon />}
            sx={{ mb: 2 }}
            href="tel:+917675028957"
          >
            Call Us Now
          </Button>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            component={Link}
            to="/contact"
            onClick={toggleMobileMenu}
          >
            Get Free Consultation
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  );
}

export default NavBar;