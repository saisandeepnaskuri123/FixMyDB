import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  Avatar, 
  useTheme, 
  Fade, 
  Chip,
  Button,
  CircularProgress,
  useMediaQuery
} from '@mui/material';
import { 
  Speed as PerformanceIcon,
  Security as SecurityIcon,
  Settings as MaintenanceIcon,
  SupportAgent as SupportIcon,
  Groups as TeamIcon,
  Email as EmailIcon,
  Phone as PhoneIcon
} from '@mui/icons-material';
import { useState, lazy, Suspense } from 'react';
import { useInView } from 'react-intersection-observer';

// Lazy load heavy components
const TeamSection = lazy(() => import('./TeamSection'));
const StatsSection = lazy(() => import('./StatsSection'));

const stats = [
  { value: '200+', label: 'Satisfied Clients' },
  { value: '70%', label: 'Performance Improvement' },
  { value: '24/7', label: 'Support Availability' },
  { value: '40%', label: 'Cost Reduction' }
];

function About() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [statsRef, statsInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [missionRef, missionInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [valuesRef, valuesInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [contactRef, contactInView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <Box sx={{ backgroundColor: 'background.paper', pt: 8, pb: 10 }}>
      <Container maxWidth="lg">
        {/* Hero Section - Optimized with priority loading */}
        <Box ref={heroRef}>
          <Fade in={heroInView} timeout={isMobile ? 300 : 500}>
            <Box textAlign="center" mb={8}>
              <Typography 
                variant={isMobile ? 'h3' : 'h2'}
                gutterBottom 
                sx={{ 
                  fontWeight: 800,
                  color: 'primary.main',
                  mb: 3
                }}
              >
                About FixMyDB
              </Typography>
              <Typography 
                variant={isMobile ? 'body1' : 'h5'}
                color="text.secondary"
                sx={{
                  maxWidth: 800,
                  mx: 'auto',
                  lineHeight: 1.6
                }}
              >
                Database performance experts saving businesses millions in infrastructure costs through optimized solutions
              </Typography>
            </Box>
          </Fade>
        </Box>

        {/* Stats Section - Lazy loaded */}
        <Box ref={statsRef}>
          <Suspense fallback={<CircularProgress />}>
            <StatsSection 
              stats={stats} 
              theme={theme} 
              visible={statsInView} 
              isMobile={isMobile} 
            />
          </Suspense>
        </Box>

        {/* Company Story - Optimized with responsive image */}
        <Box ref={missionRef}>
          <Fade in={missionInView} timeout={isMobile ? 400 : 800}>
            <Grid container spacing={6} mb={10} alignItems="center">
              <Grid item xs={12} md={6}>
                <Typography 
                  variant={isMobile ? 'h4' : 'h3'}
                  gutterBottom 
                  sx={{ fontWeight: 700, mb: 3 }}
                >
                  Our Mission
                </Typography>
                <Typography paragraph variant={isMobile ? 'body1' : 'h6'} sx={{ mb: 3 }}>
                  To make database management painless, secure, and cost-effective for growing businesses.
                </Typography>
                <Typography paragraph sx={{ mb: 2 }}>
                  Founded in 2018, FixMyDB emerged from seeing companies struggle with poorly optimized databases 
                  that drained resources and slowed growth.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    borderRadius: 4,
                    overflow: 'hidden',
                    position: 'relative',
                    aspectRatio: '16/9'
                  }}
                >
                  <img 
                    src={isMobile ? '/iamges/db-team.jpg.png' : '/images/db-team.jpg.png'}
                    alt="FixMyDB team working"
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Fade>
        </Box>

        {/* Value Propositions - Simplified for mobile */}
        <Box ref={valuesRef}>
          <Fade in={valuesInView} timeout={isMobile ? 500 : 1000}>
            <Box mb={10}>
              <Typography 
                variant={isMobile ? 'h4' : 'h3'}
                align="center" 
                gutterBottom 
                sx={{ fontWeight: 700, mb: 6 }}
              >
                Why Choose FixMyDB
              </Typography>
              <Grid container spacing={4}>
                {[
                  { 
                    icon: <PerformanceIcon sx={{ fontSize: isMobile ? 40 : 50 }} />,
                    title: "Performance First",
                    text: "We optimize queries and infrastructure for maximum throughput"
                  },
                  { 
                    icon: <SecurityIcon sx={{ fontSize: isMobile ? 40 : 50 }} />,
                    title: "Security Focused",
                    text: "Enterprise-grade security protocols for your sensitive data"
                  },
                  { 
                    icon: <MaintenanceIcon sx={{ fontSize: isMobile ? 40 : 50 }} />,
                    title: "Proactive Maintenance",
                    text: "24/7 monitoring prevents issues before they impact your business"
                  },
                  { 
                    icon: <SupportIcon sx={{ fontSize: isMobile ? 40 : 50 }} />,
                    title: "Expert Support",
                    text: "Direct access to senior database engineers, not junior staff"
                  }
                ].map((item, index) => (
                  <Grid item xs={12} sm={6} md={3} key={index}>
                    <Box 
                      textAlign="center" 
                      p={isMobile ? 2 : 4}
                      sx={{
                        height: '100%',
                        border: '1px solid',
                        borderColor: 'divider',
                        borderRadius: 2,
                      }}
                    >
                      <Box sx={{ color: 'primary.main', mb: 2 }}>
                        {item.icon}
                      </Box>
                      <Typography variant={isMobile ? 'h6' : 'h5'} sx={{ mb: 2, fontWeight: 600 }}>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.text}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Fade>
        </Box>

        {/* Team Section - Lazy loaded */}
        <Box ref={contactRef}>
          <Suspense fallback={<CircularProgress />}>
            <TeamSection visible={contactInView} isMobile={isMobile} theme={theme} />
          </Suspense>
        </Box>

        {/* Contact CTA - Simplified for mobile */}
        <Fade in={contactInView} timeout={isMobile ? 600 : 1200}>
          <Box 
            sx={{ 
              mt: 10,
              p: isMobile ? 3 : 6,
              borderRadius: 4,
              backgroundColor: 'primary.main',
              color: 'primary.contrastText',
              textAlign: 'center'
            }}
          >
            <Typography variant={isMobile ? 'h4' : 'h3'} gutterBottom sx={{ fontWeight: 700, mb: 3 }}>
              Ready to Optimize Your Database?
            </Typography>
            <Typography variant={isMobile ? 'body1' : 'h5'} sx={{ mb: 4, mx: 'auto' }}>
              Our experts are ready to analyze your database and provide customized solutions.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexDirection: isMobile ? 'column' : 'row' }}>
              <Button
                variant="contained"
                color="secondary"
                size={isMobile ? 'medium' : 'large'}
                startIcon={<PhoneIcon />}
                fullWidth={isMobile}
                sx={{
                  px: 4,
                  py: 1.5,
                  fontWeight: 600
                }}
              >
                Call Us Now
              </Button>
              <Button
                variant="outlined"
                color="inherit"
                size={isMobile ? 'medium' : 'large'}
                startIcon={<EmailIcon />}
                fullWidth={isMobile}
                sx={{
                  px: 4,
                  py: 1.5,
                  fontWeight: 600,
                  borderWidth: 2,
                  '&:hover': {
                    borderWidth: 2
                  }
                }}
              >
                Email Us
              </Button>
            </Box>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
}

export default About;