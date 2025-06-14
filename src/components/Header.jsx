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
  useTheme
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
              <Box sx={{ width: 300, mx: 2, position: 'relative' }}>
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
                        <SearchIcon />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        {searchQuery && (
                          <IconButton 
                            onClick={handleSearchClose} 
                            size="small"
                            edge="end"
                          >
                            {isSearching ? <CircularProgress size={20} /> : <CloseIcon />}
                          </IconButton>
                        )}
                      </InputAdornment>
                    ),
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
                      zIndex: theme.zIndex.modal,
                      mt: 1,
                      maxHeight: 400,
                      overflow: 'auto'
                    }}
                  >
                    <List>
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
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {!isMobile && (
              <>
                <Button
                  variant="outlined"
                  startIcon={<PhoneIcon />}
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
                  sx={{
                    minWidth: 120
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
                  size="large"
                  aria-label="search"
                  onClick={() => setSearchOpen(!searchOpen)}
                  color="inherit"
                  sx={{ mr: 1 }}
                >
                  <SearchIcon />
                </IconButton>
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
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      {searchQuery && (
                        <IconButton 
                          onClick={handleSearchClose} 
                          size="small"
                          edge="end"
                        >
                          {isSearching ? <CircularProgress size={20} /> : <CloseIcon />}
                        </IconButton>
                      )}
                    </InputAdornment>
                  ),
                }}
              />
              {searchResults.length > 0 && (
                <Paper elevation={3} sx={{ mt: 1, maxHeight: 300, overflow: 'auto' }}>
                  <List>
                    {searchResults.map((result) => (
                      <ListItem 
                        key={result.id} 
                        component={Link} 
                        to={result.path}
                        onClick={handleSearchClose}
                      >
                        <ListItemText
                          primary={result.title}
                          secondary={result.type}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Paper>
              )}
            </Box>
          </Box>
        )}

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
                startIcon={<PhoneIcon />}
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