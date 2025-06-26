import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

// Animation variants
const searchResultsVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 300
    }
  },
  exit: { opacity: 0, y: -10 }
};

const navItemVariants = {
  hover: { 
    scale: 1.05,
    transition: { duration: 0.2 }
  },
  tap: { scale: 0.98 }
};

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
        py: isMobile ? 0 : 1,
        backdropFilter: 'blur(8px)',
        background: 'rgba(255, 255, 255, 0.8)',
        transition: 'all 0.3s ease',
        '&:hover': {
          background: 'rgba(255, 255, 255, 0.95)'
        }
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ minHeight: isMobile ? 64 : 72 }}>
          {/* Logo/Brand */}
         <motion.div 
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
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
      component="img"
      src="/images/fixmydb_logo2.jpeg"
      alt=""
      sx={{
        height: isMobile ? 24 : 30,
        width: 'auto',
        mr: 1
      }}
    />
  </Typography>
</motion.div>

          {/* Desktop Navigation */}
          {!isMobile && (
            <>
              <Box sx={{ flexGrow: 1, display: 'flex' }}>
                {navItems.map((item) => (
                  <motion.div
                    key={item.label}
                    variants={navItemVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <Button
                      component={Link}
                      to={item.path}
                      sx={{
                        mx: 1,
                        color: 'text.primary',
                        fontWeight: 500,
                        fontSize: '0.9375rem',
                        position: 'relative',
                        '&:hover': {
                          color: 'primary.main',
                          backgroundColor: 'transparent',
                          '&::after': {
                            width: '100%'
                          }
                        },
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          width: '0%',
                          height: '2px',
                          backgroundColor: 'primary.main',
                          transition: 'width 0.3s ease'
                        }
                      }}
                    >
                      {item.label}
                    </Button>
                  </motion.div>
                ))}
              </Box>

              {/* Search Bar - Desktop */}
              <Box sx={{ width: isSmallMobile ? '100%' : 300, mx: 2, position: 'relative' }}>
                <motion.div whileHover={{ scale: 1.02 }}>
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
                        height: 38,
                        borderRadius: '10px',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                        transition: 'all 0.3s ease',
                        '&:focus-within': {
                          boxShadow: '0 4px 8px rgba(0,0,0,0.15)'
                        }
                      }
                    }}
                  />
                </motion.div>
                
                <AnimatePresence>
                  {searchOpen && searchResults.length > 0 && (
                    <motion.div
                      variants={searchResultsVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
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
                          overflow: 'auto',
                          borderRadius: '12px',
                          border: '1px solid rgba(0,0,0,0.1)'
                        }}
                      >
                        <List dense>
                          {searchResults.map((result) => (
                            <motion.div
                              key={result.id}
                              whileHover={{ scale: 1.01 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <ListItem 
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
                            </motion.div>
                          ))}
                        </List>
                      </Paper>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Box>
            </>
          )}

          {/* Right-side buttons/actions */}
          <Box sx={{ display: 'flex', alignItems: 'center', ml: 'auto', gap: 1 }}>
            {!isMobile && (
              <>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Button
                    variant="outlined"
                    startIcon={<PhoneIcon fontSize="small" />}
                    sx={{
                      mr: 2,
                      borderWidth: '2px',
                      px: 2,
                      py: 0.8,
                      fontSize: '0.8125rem',
                      borderRadius: '8px',
                      '&:hover': {
                        borderWidth: '2px',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                      }
                    }}
                  >
                    Call Us
                  </Button>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    component={Link}
                    to="/contact"
                    sx={{
                      minWidth: 120,
                      px: 2,
                      py: 0.8,
                      fontSize: '0.8125rem',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                      '&:hover': {
                        boxShadow: '0 6px 8px rgba(0,0,0,0.15)'
                      }
                    }}
                  >
                    Get Consultation
                  </Button>
                </motion.div>
              </>
            )}

            {/* Mobile menu button */}
            {isMobile && (
              <>
                <motion.div whileTap={{ scale: 0.9 }}>
                  <IconButton
                    size="medium"
                    aria-label="search"
                    onClick={() => setSearchOpen(!searchOpen)}
                    color="inherit"
                    sx={{ mr: 0.5 }}
                  >
                    <SearchIcon fontSize={isSmallMobile ? 'small' : 'medium'} />
                  </IconButton>
                </motion.div>
                <motion.div whileTap={{ scale: 0.9 }}>
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
                </motion.div>
              </>
            )}
          </Box>
        </Toolbar>

        {/* Mobile Search - appears below */}
        {isMobile && searchOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
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
                      height: 38,
                      borderRadius: '10px'
                    }
                  }}
                />
                <AnimatePresence>
                  {searchResults.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      <Paper elevation={3} sx={{ mt: 1, maxHeight: 300, overflow: 'auto', borderRadius: '12px' }}>
                        <List dense>
                          {searchResults.map((result) => (
                            <motion.div
                              key={result.id}
                              whileHover={{ scale: 1.01 }}
                            >
                              <ListItem 
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
                            </motion.div>
                          ))}
                        </List>
                      </Paper>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Box>
            </Box>
          </motion.div>
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
            boxSizing: 'border-box',
            backdropFilter: 'blur(10px)',
            background: 'rgba(255, 255, 255, 0.9)'
          }
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 1 }}>
          <motion.div whileTap={{ scale: 0.9 }}>
            <IconButton onClick={toggleMobileMenu}>
              <CloseIcon />
            </IconButton>
          </motion.div>
        </Box>
        
        <Divider sx={{ mb: 2 }} />
        
        <List>
          {navItems.map((item) => (
            <motion.div
              key={item.label}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ListItem 
                component={Link} 
                to={item.path}
                onClick={toggleMobileMenu}
                sx={{
                  px: 2,
                  py: 1.5,
                  color: 'text.primary',
                  borderRadius: '8px',
                  mb: 1,
                  '&:hover': {
                    color: 'primary.main',
                    backgroundColor: 'action.hover',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }
                }}
              >
                <ListItemText 
                  primary={item.label} 
                  primaryTypographyProps={{ fontWeight: 500 }}
                />
              </ListItem>
            </motion.div>
          ))}
        </List>
        
        <Box sx={{ p: 2, mt: 'auto' }}>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              variant="outlined"
              fullWidth
              startIcon={<PhoneIcon />}
              sx={{ 
                mb: 2,
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}
              href="tel:+917675028957"
            >
              Call Us Now
            </Button>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              variant="contained"
              color="primary"
              fullWidth
              component={Link}
              to="/contact"
              onClick={toggleMobileMenu}
              sx={{
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
              }}
            >
              Get Free Consultation
            </Button>
          </motion.div>
        </Box>
      </Drawer>
    </AppBar>
  );
}

export default NavBar;