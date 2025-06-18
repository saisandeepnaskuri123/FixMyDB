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
  useMediaQuery
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
              )}
            </InputAdornment>
          ),
          sx: {
            fontSize: isMobile ? '0.875rem' : '1rem',
            height: isMobile ? 40 : 48
          }
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius: 2,
            backgroundColor: 'background.paper',
            pr: 1
          },
          '& .MuiOutlinedInput-input': {
            py: isMobile ? 1 : 1.5,
            px: 1.5
          }
        }}
      />

      {isOpen && (
        <Paper 
          elevation={4} 
          sx={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            mt: 1,
            maxHeight: 'min(400px, 60vh)',
            overflow: 'auto',
            boxShadow: theme.shadows[6],
            border: `1px solid ${theme.palette.divider}`,
            borderRadius: 2
          }}
        >
          {results.length > 0 ? (
            <List disablePadding dense={isMobile}>
              {results.slice(0, 8).map((result) => (
                <ListItem 
                  key={result.id} 
                  button
                  component={Link} 
                  to={result.path}
                  onClick={handleResultClick}
                  sx={{
                    '&:hover': {
                      backgroundColor: 'action.hover'
                    },
                    borderBottom: `1px solid ${theme.palette.divider}`,
                    py: isMobile ? 1 : 1.5
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
              ))}
              {results.length > 8 && (
                <Box sx={{ 
                  p: 2, 
                  textAlign: 'center',
                  borderTop: `1px solid ${theme.palette.divider}`
                }}>
                  <Typography variant="body2" color="text.secondary">
                    {results.length - 8} more results. Press Enter to see all.
                  </Typography>
                </Box>
              )}
            </List>
          ) : query && !isSearching ? (
            <Box sx={{ p: 3, textAlign: 'center' }}>
              <Typography color="text.secondary">
                No results found for "{query}"
              </Typography>
            </Box>
          ) : isSearching ? (
            <Box sx={{ p: 3, textAlign: 'center' }}>
              <CircularProgress size={24} />
            </Box>
          ) : null}
        </Paper>
      )}
    </Box>
  );
}

export default SearchBar;