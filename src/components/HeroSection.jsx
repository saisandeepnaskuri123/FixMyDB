import { Box, Typography, Button, Container, Grid, useTheme, Stack, Fade } from '@mui/material';
import { ArrowForward, Phone, CheckCircle } from '@mui/icons-material';
import { useState, useEffect } from 'react';

function HeroSection() {
  const theme = useTheme();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const features = [
    { label: '24/7 Support', icon: <CheckCircle fontSize="small" /> },
    { label: '99.9% Uptime', icon: <CheckCircle fontSize="small" /> },
    { label: 'Enterprise Security', icon: <CheckCircle fontSize="small" /> },
    { label: 'Performance Guarantee', icon: <CheckCircle fontSize="small" /> }
  ];

  return (
    <Box
      sx={{
        background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
        color: 'white',
        py: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: -100,
          right: -100,
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.05)',
          zIndex: 0
        }
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6} sx={{ position: 'relative', zIndex: 1 }}>
            <Fade in={loaded} timeout={800}>
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  fontWeight: 800,
                  lineHeight: 1.2,
                  mb: 3,
                  fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
                  animation: loaded ? 'fadeInUp 0.8s ease' : 'none'
                }}
              >
                Optimize, Secure & Empower Your Database
              </Typography>
            </Fade>

            <Fade in={loaded} timeout={800} style={{ transitionDelay: '100ms' }}>
              <Typography
                variant="h5"
                component="p"
                sx={{
                  mb: 4,
                  opacity: 0.9,
                  lineHeight: 1.6,
                  fontSize: { xs: '1.1rem', md: '1.25rem' },
                  animation: loaded ? 'fadeInUp 0.8s ease' : 'none'
                }}
              >
                FixMyDB provides expert database management services to optimize performance, 
                reduce costs by up to 60%, and ensure enterprise-grade data security.
              </Typography>
            </Fade>

            <Fade in={loaded} timeout={800} style={{ transitionDelay: '200ms' }}>
              <Stack 
                direction={{ xs: 'column', sm: 'row' }} 
                spacing={2}
                sx={{ mb: 4 }}
              >
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  endIcon={<ArrowForward />}
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    whiteSpace: 'nowrap',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: theme.shadows[4]
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  Get in Touch
                </Button>
                <Button
                  variant="outlined"
                  color="inherit"
                  size="large"
                  startIcon={<Phone />}
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    borderWidth: 2,
                    whiteSpace: 'nowrap',
                    '&:hover': {
                      borderWidth: 2,
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      transform: 'translateY(-2px)'
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  Book a Call
                </Button>
              </Stack>
            </Fade>

            <Fade in={loaded} timeout={800} style={{ transitionDelay: '300ms' }}>
              <Grid container spacing={2} sx={{ mt: 2 }}>
                {features.map((feature, index) => (
                  <Grid item xs={6} sm={6} md={6} key={index}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Box sx={{ color: 'success.main' }}>
                        {feature.icon}
                      </Box>
                      <Typography variant="body1">{feature.label}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Fade>
          </Grid>
          
          <Grid item xs={12} md={6} sx={{ position: 'relative' }}>
            <Fade in={loaded} timeout={800} style={{ transitionDelay: '400ms' }}>
              <Box
                sx={{
                  borderRadius: 4,
                  overflow: 'hidden',
                  boxShadow: theme.shadows[10],
                  position: 'relative',
                  aspectRatio: '1/0.7',
                  backgroundImage: 'url(/images/dashboard-preview.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  transform: { xs: 'none', md: 'perspective(1000px) rotateY(-10deg)' },
                  transition: 'transform 0.5s ease, box-shadow 0.5s ease',
                  '&:hover': {
                    transform: { md: 'perspective(1000px) rotateY(-5deg)' },
                    boxShadow: theme.shadows[16]
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    inset: 0,
                    background: `linear-gradient(to bottom right, ${theme.palette.primary.main}20, transparent)`,
                    borderRadius: 4
                  }
                }}
              />
            </Fade>
          </Grid>
        </Grid>
      </Container>

      {/* Animation styles */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </Box>
  );
}

export default HeroSection;