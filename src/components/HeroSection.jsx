import { Box, Typography, Button, Container, Grid, useTheme, Stack } from '@mui/material';
import { ArrowForward, Phone } from '@mui/icons-material';

function HeroSection() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
        color: 'white',
        py: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6} sx={{ position: 'relative', zIndex: 1 }}>
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontWeight: 800,
                lineHeight: 1.2,
                mb: 3,
                fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' }
              }}
            >
              Optimize, Secure & Empower Your Database
            </Typography>
            
            <Typography
              variant="h5"
              component="p"
              sx={{
                mb: 4,
                opacity: 0.9,
                lineHeight: 1.6,
                fontSize: { xs: '1.1rem', md: '1.25rem' }
              }}
            >
              FixMyDB provides expert database management services to optimize performance, 
              reduce costs, and ensure data security.
            </Typography>

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
                  whiteSpace: 'nowrap'
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
                    backgroundColor: 'rgba(255,255,255,0.1)'
                  }
                }}
              >
                Book a Call
              </Button>
            </Stack>

            <Box sx={{ 
              display: 'flex',
              flexWrap: 'wrap',
              gap: 2,
              alignItems: 'center',
              mt: 4
            }}>
              <Box sx={{ 
                display: 'flex',
                alignItems: 'center',
                gap: 1
              }}>
                <Box sx={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  bgcolor: 'success.main'
                }} />
                <Typography>24/7 Support</Typography>
              </Box>
              <Box sx={{ 
                display: 'flex',
                alignItems: 'center',
                gap: 1
              }}>
                <Box sx={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  bgcolor: 'success.main'
                }} />
                <Typography>99.9% Uptime</Typography>
              </Box>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={6} sx={{ position: 'relative' }}>
            <Box
              sx={{
                borderRadius: 4,
                overflow: 'hidden',
                boxShadow: 6,
                position: 'relative',
                aspectRatio: '1/0.7',
                backgroundImage: 'url(/images/dashboard-preview.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transform: { xs: 'none', md: 'perspective(1000px) rotateY(-10deg)' },
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: { md: 'perspective(1000px) rotateY(-5deg)' }
                }
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default HeroSection;