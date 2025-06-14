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
  Button
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
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box sx={{ mb: 6 }}>
        <Typography 
          variant="h3" 
          gutterBottom 
          sx={{ 
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            mb: 2
          }}
        >
          <SearchIcon fontSize="large" color="primary" />
          Search Results
        </Typography>
        
        <Typography variant="h5" color="text.secondary">
          Showing results for: <Box component="span" sx={{ color: 'primary.main', fontWeight: 500 }}>"{query}"</Box>
        </Typography>
      </Box>

      {isLoading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 10 }}>
          <CircularProgress size={60} thickness={4} color="primary" />
        </Box>
      ) : error ? (
        <Paper 
          elevation={0} 
          sx={{ 
            p: 4, 
            textAlign: 'center',
            backgroundColor: 'background.paper',
            borderRadius: 3
          }}
        >
          <Typography variant="h5" color="error" gutterBottom>
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
          >
            Go Back
          </Button>
        </Paper>
      ) : results.length > 0 ? (
        <Paper 
          elevation={0} 
          sx={{ 
            backgroundColor: 'background.paper',
            borderRadius: 3,
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
                    px: 4,
                    py: 3,
                    transition: 'background-color 0.2s',
                    '&:hover': {
                      backgroundColor: 'action.hover'
                    }
                  }}
                >
                  <ListItemText
                    primary={
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          fontWeight: 600,
                          mb: 1
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
                          sx={{ mb: 1 }}
                        >
                          {result.description || 'No description available'}
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1 }}>
                          <Chip 
                            label={result.type} 
                            size="small" 
                            color="primary"
                            variant="outlined"
                          />
                          {result.category && (
                            <Chip 
                              label={result.category} 
                              size="small" 
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
                  <Divider variant="middle" component="li" />
                )}
              </Box>
            ))}
          </List>
        </Paper>
      ) : (
        <Paper 
          elevation={0} 
          sx={{ 
            p: 4, 
            textAlign: 'center',
            backgroundColor: 'background.paper',
            borderRadius: 3
          }}
        >
          <Typography variant="h5" gutterBottom>
            No results found
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            We couldn't find any matches for your search.
          </Typography>
          <Button 
            variant="contained" 
            color="primary"
            onClick={() => window.history.back()}
          >
            Try Again
          </Button>
        </Paper>
      )}
    </Container>
  );
}

export default SearchResults;