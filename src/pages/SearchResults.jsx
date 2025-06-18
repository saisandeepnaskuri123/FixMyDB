import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  Container, 
  Typography, 
  List, 
  ListItem, 
  ListItemText, 
  Box, 
  CircularProgress,
  Chip,
  Divider,
  Paper,
  useTheme,
  Button,
  useMediaQuery
} from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { searchContent } from '../utils/searchService';

function SearchResults() {
  const theme = useTheme();
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // Responsive breakpoints
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  useEffect(() => {
    if (query) {
      setIsLoading(true);
      setError(null);
      searchContent(query)
        .then(data => {
          setResults(data);
          if (data.length === 0) {
            setError('No results found. Try different keywords.');
          }
        })
        .catch(err => {
          setError('Failed to fetch search results. Please try again later.');
          console.error('Search error:', err);
        })
        .finally(() => setIsLoading(false));
    }
  }, [query]);

  return (
    <Container maxWidth="lg" sx={{ 
      py: isMobile ? 4 : 6,
      px: isMobile ? 2 : 3
    }}>
      <Box sx={{ mb: isMobile ? 4 : 6 }}>
        <Typography 
          variant={isMobile ? "h4" : "h3"} 
          gutterBottom 
          sx={{ 
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            mb: 2
          }}
        >
          <SearchIcon fontSize={isMobile ? "medium" : "large"} color="primary" />
          Search Results
        </Typography>
        
        <Typography variant={isMobile ? "body1" : "h5"} color="text.secondary">
          Showing results for: <Box component="span" sx={{ color: 'primary.main', fontWeight: 500 }}>"{query}"</Box>
        </Typography>
      </Box>

      {isLoading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', my: isMobile ? 6 : 10 }}>
          <CircularProgress size={isMobile ? 40 : 60} thickness={4} color="primary" />
        </Box>
      ) : error ? (
        <Paper 
          elevation={0} 
          sx={{ 
            p: isMobile ? 2 : 4, 
            textAlign: 'center',
            backgroundColor: 'background.paper',
            borderRadius: 2
          }}
        >
          <Typography variant={isMobile ? "h6" : "h5"} color="error" gutterBottom>
            {error}
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Try searching with different keywords or check your spelling.
          </Typography>
          <Button 
            variant="outlined" 
            color="primary"
            onClick={() => window.history.back()}
            sx={{ mt: 2 }}
            size={isMobile ? "small" : "medium"}
          >
            Go Back
          </Button>
        </Paper>
      ) : results.length > 0 ? (
        <Paper 
          elevation={0} 
          sx={{ 
            backgroundColor: 'background.paper',
            borderRadius: 2,
            overflow: 'hidden'
          }}
        >
          <List disablePadding>
            {results.map((result, index) => (
              <Box key={result.id}>
                <ListItem 
                  button 
                  component="a" 
                  href={result.path}
                  sx={{
                    px: isMobile ? 2 : 4,
                    py: isMobile ? 2 : 3,
                    transition: 'background-color 0.2s',
                    '&:hover': {
                      backgroundColor: 'action.hover'
                    }
                  }}
                >
                  <ListItemText
                    primary={
                      <Typography 
                        variant={isMobile ? "subtitle1" : "h6"} 
                        sx={{ 
                          fontWeight: 600,
                          mb: 0.5
                        }}
                      >
                        {result.title}
                      </Typography>
                    }
                    secondary={
                      <>
                        <Typography 
                          variant="body2" 
                          color="text.secondary"
                          sx={{ 
                            mb: 1,
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden'
                          }}
                        >
                          {result.description || 'No description available'}
                        </Typography>
                        <Box sx={{ 
                          display: 'flex', 
                          gap: 1,
                          flexWrap: isMobile ? 'wrap' : 'nowrap'
                        }}>
                          <Chip 
                            label={result.type} 
                            size={isMobile ? "small" : "medium"} 
                            color="primary"
                            variant="outlined"
                          />
                          {result.category && (
                            <Chip 
                              label={result.category} 
                              size={isMobile ? "small" : "medium"} 
                              color="secondary"
                              variant="outlined"
                            />
                          )}
                        </Box>
                      </>
                    }
                    secondaryTypographyProps={{ component: 'div' }}
                  />
                </ListItem>
                {index < results.length - 1 && (
                  <Divider variant={isMobile ? "fullWidth" : "middle"} component="li" />
                )}
              </Box>
            ))}
          </List>
        </Paper>
      ) : (
        <Paper 
          elevation={0} 
          sx={{ 
            p: isMobile ? 2 : 4, 
            textAlign: 'center',
            backgroundColor: 'background.paper',
            borderRadius: 2
          }}
        >
          <Typography variant={isMobile ? "h6" : "h5"} gutterBottom>
            No results found
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            We couldn't find any matches for your search.
          </Typography>
          <Button 
            variant="contained" 
            color="primary"
            onClick={() => window.history.back()}
            size={isMobile ? "small" : "medium"}
          >
            Try Again
          </Button>
        </Paper>
      )}
    </Container>
  );
}

export default SearchResults;