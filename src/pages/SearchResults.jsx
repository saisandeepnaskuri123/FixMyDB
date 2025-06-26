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
  useMediaQuery,
  Grow,
  Fade,
  Slide,
  Zoom
} from '@mui/material';
import { 
  Search as SearchIcon,
  ArrowBack as ArrowBackIcon,
  SearchOff as SearchOffIcon
} from '@mui/icons-material';
import { searchContent } from '../utils/searchService';
import { motion } from 'framer-motion';



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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <Container maxWidth="lg" sx={{ 
      py: isMobile ? 4 : 6,
      px: isMobile ? 2 : 3
    }}>
      <Slide in direction="down" timeout={300}>
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
            <Zoom in timeout={500}>
              <SearchIcon 
                fontSize={isMobile ? "medium" : "large"} 
                color="primary" 
                sx={{
                  backgroundColor: theme.palette.primary.light,
                  borderRadius: '50%',
                  p: 1,
                  boxShadow: `0 4px 12px ${theme.palette.primary.light}`
                }}
              />
            </Zoom>
            Search Results
          </Typography>
          
          <Fade in timeout={800}>
            <Typography variant={isMobile ? "body1" : "h5"} color="text.secondary">
              Showing results for: <Box 
                component="span" 
                sx={{ 
                  color: 'primary.main', 
                  fontWeight: 500,
                  background: `linear-gradient(120deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >"{query}"</Box>
            </Typography>
          </Fade>
        </Box>
      </Slide>

      {isLoading ? (
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          my: isMobile ? 6 : 10,
          minHeight: '40vh'
        }}>
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <CircularProgress 
              size={isMobile ? 40 : 60} 
              thickness={4} 
              color="primary" 
              sx={{
                filter: `drop-shadow(0 0 8px ${theme.palette.primary.light})`
              }}
            />
          </motion.div>
        </Box>
      ) : error ? (
        <Zoom in timeout={500}>
          <Paper 
            elevation={4} 
            sx={{ 
              p: isMobile ? 3 : 4, 
              textAlign: 'center',
              backgroundColor: 'background.paper',
              borderRadius: 4,
              border: `1px solid ${theme.palette.divider}`,
              maxWidth: isMobile ? '100%' : '600px',
              mx: 'auto',
              boxShadow: theme.shadows[8]
            }}
          >
            <SearchOffIcon 
              color="error" 
              sx={{ 
                fontSize: 60,
                mb: 2,
                opacity: 0.8
              }} 
            />
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
              sx={{ 
                mt: 2,
                borderRadius: 50,
                px: 4,
                textTransform: 'none'
              }}
              size={isMobile ? "small" : "medium"}
              startIcon={<ArrowBackIcon />}
            >
              Go Back
            </Button>
          </Paper>
        </Zoom>
      ) : results.length > 0 ? (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <List disablePadding>
            {results.map((result, index) => (
              <motion.div
                key={result.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Box>
                  <ListItem 
                    button 
                    component="a" 
                    href={result.path}
                    sx={{
                      px: isMobile ? 2 : 4,
                      py: isMobile ? 3 : 4,
                      transition: 'all 0.3s ease',
                      mb: 2,
                      borderRadius: 2,
                      backgroundColor: 'background.paper',
                      boxShadow: theme.shadows[2],
                      '&:hover': {
                        backgroundColor: 'background.paper',
                        boxShadow: theme.shadows[6],
                        transform: 'translateY(-2px)'
                      }
                    }}
                  >
                    <ListItemText
                      primary={
                        <Typography 
                          variant={isMobile ? "subtitle1" : "h6"} 
                          sx={{ 
                            fontWeight: 700,
                            mb: 1,
                            background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
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
                              mb: 1.5,
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
                              sx={{
                                borderRadius: 1,
                                fontWeight: 600,
                                borderWidth: 2
                              }}
                            />
                            {result.category && (
                              <Chip 
                                label={result.category} 
                                size={isMobile ? "small" : "medium"} 
                                color="secondary"
                                variant="outlined"
                                sx={{
                                  borderRadius: 1,
                                  fontWeight: 600,
                                  borderWidth: 2
                                }}
                              />
                            )}
                          </Box>
                        </>
                      }
                      secondaryTypographyProps={{ component: 'div' }}
                    />
                  </ListItem>
                </Box>
              </motion.div>
            ))}
          </List>
        </motion.div>
      ) : (
        <Grow in timeout={800}>
          <Paper 
            elevation={4}
            sx={{ 
              p: isMobile ? 3 : 4, 
              textAlign: 'center',
              backgroundColor: 'background.paper',
              borderRadius: 4,
              border: `1px solid ${theme.palette.divider}`,
              maxWidth: isMobile ? '100%' : '600px',
              mx: 'auto',
              boxShadow: theme.shadows[8]
            }}
          >
            <SearchOffIcon 
              color="action" 
              sx={{ 
                fontSize: 60,
                mb: 2,
                opacity: 0.6
              }} 
            />
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
              sx={{
                borderRadius: 50,
                px: 4,
                textTransform: 'none',
                boxShadow: `0 4px 12px ${theme.palette.primary.light}`,
                '&:hover': {
                  boxShadow: `0 6px 16px ${theme.palette.primary.light}`
                }
              }}
              startIcon={<ArrowBackIcon />}
            >
              Try Again
            </Button>
          </Paper>
        </Grow>
      )}
    </Container>
  );
}

export default SearchResults;