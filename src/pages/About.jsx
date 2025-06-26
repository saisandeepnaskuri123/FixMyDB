import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  useTheme, 
  Fade, 
  Button,
  CircularProgress,
  useMediaQuery,
  Grow,
  Zoom
} from '@mui/material';
import { 
  Speed as PerformanceIcon,
  Security as SecurityIcon,
  Settings as MaintenanceIcon,
  SupportAgent as SupportIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  ArrowForward as ArrowForwardIcon
} from '@mui/icons-material';
import { useState, lazy, Suspense } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

// Lazy load heavy components
const TeamSection = lazy(() => import('./TeamSection'));
const StatsSection = lazy(() => import('./StatsSection'));

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

function About() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  
  // Intersection observers for scroll animations
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [statsRef, statsInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [missionRef, missionInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [valuesRef, valuesInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [contactRef, contactInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const stats = [
    { value: '200+', label: 'Satisfied Clients' },
    { value: '70%', label: 'Performance Improvement' },
    { value: '24/7', label: 'Support Availability' },
    { value: '40%', label: 'Cost Reduction' }
  ];

  const values = [
    { 
      icon: <PerformanceIcon sx={{ fontSize: isMobile ? 40 : 50 }} />,
      title: "Performance First",
      description: "We optimize queries and infrastructure for maximum throughput"
    },
    { 
      icon: <SecurityIcon sx={{ fontSize: isMobile ? 40 : 50 }} />,
      title: "Security Focused",
      description: "Enterprise-grade security protocols for your sensitive data"
    },
    { 
      icon: <MaintenanceIcon sx={{ fontSize: isMobile ? 40 : 50 }} />,
      title: "Proactive Maintenance",
      description: "24/7 monitoring prevents issues before they impact your business"
    },
    { 
      icon: <SupportIcon sx={{ fontSize: isMobile ? 40 : 50 }} />,
      title: "Expert Support",
      description: "Direct access to senior database engineers, not junior staff"
    }
  ];

  return (
    <Box sx={{ 
      backgroundColor: 'background.paper', 
      pt: { xs: 6, sm: 8, md: 10 },
      pb: { xs: 8, md: 12 }
    }}>
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Box ref={heroRef} sx={{ mb: { xs: 6, md: 10 } }}>
          <motion.div
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <Box textAlign="center">
              <Typography 
                variant={isMobile ? 'h3' : 'h2'}
                gutterBottom 
                sx={{ 
                  fontWeight: 800,
                  color: 'primary.main',
                  mb: 3,
                  px: isMobile ? 2 : 0,
                  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'inline-block'
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
                  lineHeight: 1.6,
                  px: isMobile ? 2 : 0
                }}
              >
                Database performance experts saving businesses millions in infrastructure costs through optimized solutions
              </Typography>
            </Box>
          </motion.div>
        </Box>

        {/* Stats Section - Lazy loaded */}
        <Box ref={statsRef} sx={{ mb: { xs: 6, md: 10 } }}>
          <Suspense fallback={
            <Box display="flex" justifyContent="center" py={6}>
              <CircularProgress />
            </Box>
          }>
            <StatsSection 
              stats={stats} 
              theme={theme} 
              visible={statsInView} 
              isMobile={isMobile} 
            />
          </Suspense>
        </Box>

        {/* Mission Section */}
        <Box ref={missionRef} sx={{ mb: { xs: 6, md: 10 } }}>
          <motion.div
            initial="hidden"
            animate={missionInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
              <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
                <motion.div variants={fadeInUp}>
                  <Typography 
                    variant={isMobile ? 'h4' : 'h3'}
                    gutterBottom 
                    sx={{ 
                      fontWeight: 700, 
                      mb: 3,
                      color: 'text.primary'
                    }}
                  >
                    Our Mission
                  </Typography>
                  <Typography 
                    variant={isMobile ? 'body1' : 'h6'} 
                    paragraph 
                    sx={{ 
                      mb: 3,
                      color: 'text.secondary'
                    }}
                  >
                    To make database management painless, secure, and cost-effective for growing businesses.
                  </Typography>
                  <Typography 
                    paragraph 
                    sx={{ 
                      mb: 2,
                      color: 'text.secondary'
                    }}
                  >
                    Founded in 2018, FixMyDB emerged from seeing companies struggle with poorly optimized databases 
                    that drained resources and slowed growth.
                  </Typography>
                  <Button
                    variant="outlined"
                    color="primary"
                    size="large"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      mt: 2,
                      px: 4,
                      py: 1.5,
                      fontWeight: 600,
                      '&:hover': {
                        transform: 'translateX(5px)',
                        backgroundColor: 'primary.light',
                        boxShadow: theme.shadows[2]
                      },
                      transition: 'all 0.3s ease'
                    }}
                  >
                    Learn More
                  </Button>
                </motion.div>
              </Grid>
              <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
                <motion.div variants={fadeInUp}>
                  <Box
                    sx={{
                      borderRadius: 4,
                      overflow: 'hidden',
                      position: 'relative',
                      aspectRatio: '16/9',
                      boxShadow: theme.shadows[8],
                      '&:hover img': {
                        transform: 'scale(1.05)'
                      }
                    }}
                  >
                    <img 
                      src={isMobile ? '/images/db-team-mobile.png' : '/images/db-team-desktop.png'}
                      alt="FixMyDB team working"
                      loading="lazy"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                        transition: 'transform 0.5s ease'
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: `linear-gradient(135deg, ${theme.palette.primary.main}20, ${theme.palette.secondary.main}20)`,
                        mixBlendMode: 'multiply'
                      }}
                    />
                  </Box>
                </motion.div>
              </Grid>
            </Grid>
          </motion.div>
        </Box>

        {/* Values Section */}
        <Box ref={valuesRef} sx={{ mb: { xs: 6, md: 10 } }}>
          <motion.div
            initial="hidden"
            animate={valuesInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <Box>
              <motion.div variants={fadeInUp}>
                <Typography 
                  variant={isMobile ? 'h4' : 'h3'}
                  align="center" 
                  gutterBottom 
                  sx={{ 
                    fontWeight: 700, 
                    mb: { xs: 4, md: 6 },
                    color: 'text.primary'
                  }}
                >
                  Why Choose FixMyDB
                </Typography>
              </motion.div>
              <Grid container spacing={{ xs: 3, md: 4 }}>
                {values.map((item, index) => (
                  <Grid item xs={12} sm={6} md={3} key={index}>
                    <motion.div variants={fadeInUp}>
                      <Box 
                        textAlign="center" 
                        p={{ xs: 2, md: 3 }}
                        sx={{
                          height: '100%',
                          border: '1px solid',
                          borderColor: 'divider',
                          borderRadius: 4,
                          transition: 'all 0.3s ease',
                          backgroundColor: 'background.paper',
                          position: 'relative',
                          overflow: 'hidden',
                          '&:hover': {
                            transform: 'translateY(-8px)',
                            boxShadow: theme.shadows[6],
                            borderColor: 'primary.main',
                            '&:after': {
                              width: '100%'
                            }
                          },
                          '&:after': {
                            content: '""',
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            width: '0%',
                            height: 4,
                            backgroundColor: 'primary.main',
                            transition: 'width 0.3s ease'
                          }
                        }}
                      >
                        <Box sx={{ 
                          color: 'primary.main', 
                          mb: 2,
                          height: isMobile ? 40 : 50,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'transform 0.3s ease',
                          '&:hover': {
                            transform: 'scale(1.1)'
                          }
                        }}>
                          {item.icon}
                        </Box>
                        <Typography 
                          variant={isMobile ? 'h6' : 'h5'} 
                          sx={{ 
                            mb: 2, 
                            fontWeight: 600,
                            color: 'text.primary'
                          }}
                        >
                          {item.title}
                        </Typography>
                        <Typography 
                          variant={isMobile ? 'body2' : 'body1'} 
                          color="text.secondary"
                          sx={{
                            transition: 'color 0.3s ease',
                            '&:hover': {
                              color: 'text.primary'
                            }
                          }}
                        >
                          {item.description}
                        </Typography>
                      </Box>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </motion.div>
        </Box>

        {/* Team Section - Lazy loaded */}
        <Box ref={contactRef} sx={{ mb: { xs: 6, md: 10 } }}>
          <Suspense fallback={
            <Box display="flex" justifyContent="center" py={6}>
              <CircularProgress />
            </Box>
          }>
            <TeamSection 
              visible={contactInView} 
              isMobile={isMobile} 
              theme={theme} 
            />
          </Suspense>
        </Box>

        {/* Contact CTA */}
        <motion.div
          initial="hidden"
          animate={contactInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <Box 
            sx={{ 
              p: { xs: 3, md: 6 },
              borderRadius: 4,
              background: `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
              color: 'primary.contrastText',
              textAlign: 'center',
              boxShadow: theme.shadows[10],
              position: 'relative',
              overflow: 'hidden',
              '&:before': {
                content: '""',
                position: 'absolute',
                top: -50,
                right: -50,
                width: 200,
                height: 200,
                borderRadius: '50%',
                backgroundColor: 'rgba(255,255,255,0.1)'
              },
              '&:after': {
                content: '""',
                position: 'absolute',
                bottom: -80,
                left: -80,
                width: 200,
                height: 200,
                borderRadius: '50%',
                backgroundColor: 'rgba(255,255,255,0.1)'
              }
            }}
          >
            <Typography 
              variant={isMobile ? 'h4' : 'h3'} 
              gutterBottom 
              sx={{ 
                fontWeight: 700, 
                mb: 3,
                color: 'primary.contrastText',
                position: 'relative',
                zIndex: 1
              }}
            >
              Ready to Optimize Your Database?
            </Typography>
            <Typography 
              variant={isMobile ? 'body1' : 'h5'} 
              sx={{ 
                mb: 4, 
                mx: 'auto',
                maxWidth: 800,
                color: 'primary.contrastText',
                position: 'relative',
                zIndex: 1
              }}
            >
              Our experts are ready to analyze your database and provide customized solutions.
            </Typography>
            <Box sx={{ 
              display: 'flex', 
              gap: 2, 
              justifyContent: 'center', 
              flexDirection: isMobile ? 'column' : 'row',
              position: 'relative',
              zIndex: 1
            }}>
              <Button
                variant="contained"
                color="secondary"
                size={isMobile ? 'medium' : 'large'}
                startIcon={<PhoneIcon />}
                fullWidth={isMobile}
                href="tel:+1234567890"
                sx={{
                  px: 4,
                  py: 1.5,
                  fontWeight: 600,
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: theme.shadows[6]
                  },
                  transition: 'all 0.3s ease'
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
                href="mailto:contact@fixmydb.com"
                sx={{
                  px: 4,
                  py: 1.5,
                  fontWeight: 600,
                  borderWidth: 2,
                  '&:hover': {
                    borderWidth: 2,
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    transform: 'translateY(-2px)',
                    boxShadow: theme.shadows[2]
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                Email Us
              </Button>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}

export default About;