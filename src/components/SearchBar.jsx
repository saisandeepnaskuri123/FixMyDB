import { useState, useEffect, useRef } from 'react';
import { 
  TextField, 
  InputAdornment, 
  IconButton, 
  Paper, 
  List, 
  ListItem, 
  ListItemText,
  ListItemIcon,
  Box,
  CircularProgress,
  Typography,
  useTheme,
  useMediaQuery,
  Fade,
  Grow,
  Slide
} from '@mui/material';
import { 
  Search as SearchIcon,
  Close as CloseIcon,
  Article as ArticleIcon,
  MenuBook as BlogIcon,
  Description as DocIcon
} from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { searchContent } from '../utils/searchService';
import { motion, AnimatePresence } from 'framer-motion';

function SearchBar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [hasFocus, setHasFocus] = useState(false);
  const searchRef = useRef(null);

  // Handle clicks outside the search bar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
        setHasFocus(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Debounce search with abort controller
  useEffect(() => {
    const controller = new AbortController();
    
    if (query.trim() === '') {
      setResults([]);
      setIsOpen(false);
      return;
    }

    setIsSearching(true);
    const timer = setTimeout(async () => {
      try {
        const searchResults = await searchContent(query, { signal: controller.signal });
        setResults(searchResults);
        if (hasFocus) setIsOpen(true);
      } catch (error) {
        if (error.name !== 'AbortError') {
          console.error("Search error:", error);
        }
      } finally {
        setIsSearching(false);
      }
    }, 300);

    return () => {
      controller.abort();
      clearTimeout(timer);
    };
  }, [query, hasFocus]);

  const handleClear = () => {
    setQuery('');
    setResults([]);
    setIsOpen(false);
    setHasFocus(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
      setIsOpen(false);
      setHasFocus(false);
    }
  };

  const handleFocus = () => {
    setHasFocus(true);
    if (query) setIsOpen(true);
  };

  const getResultIcon = (type) => {
    switch(type.toLowerCase()) {
      case 'blog': return <BlogIcon color="primary" fontSize={isMobile ? 'small' : 'medium'} />;
      case 'documentation': return <DocIcon color="primary" fontSize={isMobile ? 'small' : 'medium'} />;
      default: return <ArticleIcon color="primary" fontSize={isMobile ? 'small' : 'medium'} />;
    }
  };

  const handleResultClick = () => {
    setIsOpen(false);
    setHasFocus(false);
  };

  return (
    <Box 
      ref={searchRef}
      sx={{ 
        position: 'relative', 
        width: { xs: '100%', sm: '300px', md: '400px', lg: '450px' },
        zIndex: theme.zIndex.appBar + 1
      }}
    >
      <motion.div
        initial={{ scale: 0.98, opacity: 0.9 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search documentation, blogs..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={handleFocus}
          onKeyDown={handleKeyDown}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon fontSize={isMobile ? 'small' : 'medium'} />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                {query && (
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  >
                    <IconButton 
                      onClick={handleClear} 
                      size="small"
                      edge="end"
                      aria-label="Clear search"
                      sx={{ p: 0.5 }}
                    >
                      {isSearching ? (
                        <CircularProgress size={isMobile ? 16 : 20} />
                      ) : (
                        <CloseIcon fontSize={isMobile ? 'small' : 'medium'} />
                      )}
                    </IconButton>
                  </motion.div>
                )}
              </InputAdornment>
            ),
            sx: {
              fontSize: isMobile ? '0.875rem' : '1rem',
              height: isMobile ? 40 : 48,
              transition: 'all 0.3s ease',
              '&:focus-within': {
                boxShadow: `0 0 0 2px ${theme.palette.primary.light}`,
              }
            }
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: 2,
              backgroundColor: 'background.paper',
              pr: 1,
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: theme.palette.mode === 'dark' ? 
                  theme.palette.grey[800] : 
                  theme.palette.grey[100]
              }
            },
            '& .MuiOutlinedInput-input': {
              py: isMobile ? 1 : 1.5,
              px: 1.5
            }
          }}
        />
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <Paper 
              elevation={8} 
              sx={{
                position: 'absolute',
                top: '100%',
                left: 0,
                right: 0,
                mt: 1,
                maxHeight: 'min(400px, 60vh)',
                overflow: 'auto',
                boxShadow: theme.shadows[10],
                border: `1px solid ${theme.palette.divider}`,
                borderRadius: 2,
                background: theme.palette.mode === 'dark' ?
                  `linear-gradient(135deg, ${theme.palette.grey[900]} 0%, ${theme.palette.grey[800]} 100%)` :
                  `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.grey[50]} 100%)`
              }}
            >
              {results.length > 0 ? (
                <List disablePadding dense={isMobile}>
                  {results.slice(0, 8).map((result, index) => (
                    <motion.div
                      key={result.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <ListItem 
                        button
                        component={Link} 
                        to={result.path}
                        onClick={handleResultClick}
                        sx={{
                          '&:hover': {
                            backgroundColor: 'action.hover',
                            transform: 'translateX(4px)'
                          },
                          borderBottom: `1px solid ${theme.palette.divider}`,
                          py: isMobile ? 1 : 1.5,
                          transition: 'all 0.2s ease',
                        }}
                      >
                        <ListItemIcon sx={{ minWidth: isMobile ? 36 : 40 }}>
                          {getResultIcon(result.type)}
                        </ListItemIcon>
                        <ListItemText
                          primary={
                            <Typography 
                              variant={isMobile ? 'body2' : 'body1'} 
                              fontWeight="medium"
                              noWrap={isMobile}
                            >
                              {result.title}
                            </Typography>
                          }
                          secondary={
                            <Typography 
                              variant={isMobile ? 'caption' : 'body2'} 
                              color="text.secondary"
                              noWrap={isMobile}
                            >
                              {result.type} • {result.category}
                            </Typography>
                          }
                          sx={{ my: 0 }}
                        />
                      </ListItem>
                    </motion.div>
                  ))}
                  {results.length > 8 && (
                    <Box sx={{ 
                      p: 2, 
                      textAlign: 'center',
                      borderTop: `1px solid ${theme.palette.divider}`,
                      background: theme.palette.mode === 'dark' ?
                        theme.palette.grey[800] :
                        theme.palette.grey[100]
                    }}>
                      <Typography variant="body2" color="text.secondary">
                        {results.length - 8} more results. Press Enter to see all.
                      </Typography>
                    </Box>
                  )}
                </List>
              ) : query && !isSearching ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <Box sx={{ 
                    p: 3, 
                    textAlign: 'center',
                    background: theme.palette.mode === 'dark' ?
                      theme.palette.grey[800] :
                      theme.palette.grey[100]
                  }}>
                    <Typography color="text.secondary">
                      No results found for "{query}"
                    </Typography>
                  </Box>
                </motion.div>
              ) : isSearching ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <Box sx={{ 
                    p: 3, 
                    textAlign: 'center',
                    background: theme.palette.mode === 'dark' ?
                      theme.palette.grey[800] :
                      theme.palette.grey[100]
                  }}>
                    <CircularProgress size={24} />
                  </Box>
                </motion.div>
              ) : null}
            </Paper>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
}

export default SearchBar;