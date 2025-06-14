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
  useTheme
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
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef(null);

  // Handle clicks outside the search bar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
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
      return;
    }

    setIsSearching(true);
    const timer = setTimeout(async () => {
      try {
        const searchResults = await searchContent(query, { signal: controller.signal });
        setResults(searchResults);
        setIsOpen(true);
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
  }, [query]);

  const handleClear = () => {
    setQuery('');
    setResults([]);
    setIsOpen(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
      setIsOpen(false);
    }
  };

  const getResultIcon = (type) => {
    switch(type.toLowerCase()) {
      case 'blog': return <BlogIcon color="primary" />;
      case 'documentation': return <DocIcon color="primary" />;
      default: return <ArticleIcon color="primary" />;
    }
  };

  return (
    <Box 
      ref={searchRef}
      sx={{ 
        position: 'relative', 
        width: { xs: '100%', md: '400px' },
        zIndex: theme.zIndex.appBar
      }}
    >
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search documentation, blogs..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => query && setIsOpen(true)}
        onKeyDown={handleKeyDown}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
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
                >
                  {isSearching ? (
                    <CircularProgress size={20} />
                  ) : (
                    <CloseIcon fontSize="small" />
                  )}
                </IconButton>
              )}
            </InputAdornment>
          ),
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius: 2,
            backgroundColor: 'background.paper',
          },
          '& .MuiOutlinedInput-input': {
            py: 1.5
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
            maxHeight: '400px',
            overflow: 'auto',
            boxShadow: theme.shadows[4],
            border: `1px solid ${theme.palette.divider}`
          }}
        >
          {results.length > 0 ? (
            <List disablePadding>
              {results.map((result) => (
                <ListItem 
                  key={result.id} 
                  button
                  component={Link} 
                  to={result.path}
                  onClick={() => setIsOpen(false)}
                  sx={{
                    '&:hover': {
                      backgroundColor: 'action.hover'
                    },
                    borderBottom: `1px solid ${theme.palette.divider}`
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    {getResultIcon(result.type)}
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant="body1" fontWeight="medium">
                        {result.title}
                      </Typography>
                    }
                    secondary={
                      <Typography variant="body2" color="text.secondary">
                        {result.type} • {result.category}
                      </Typography>
                    }
                    sx={{ my: 0 }}
                  />
                </ListItem>
              ))}
            </List>
          ) : query && !isSearching ? (
            <Box sx={{ p: 2, textAlign: 'center' }}>
              <Typography color="text.secondary">
                No results found for "{query}"
              </Typography>
            </Box>
          ) : null}
        </Paper>
      )}
    </Box>
  );
}

export default SearchBar;