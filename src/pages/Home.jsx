import { Box, Button, Container, Grid, Typography, Card, CardContent, useTheme, Stack, useMediaQuery } from '@mui/material';
import { 
  Speed, 
  Security, 
  Storage, 
  Cloud, 
  ArrowForward
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Helmet } from 'react-helmet';
import { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';


function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for images
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      icon: <Speed fontSize="large" sx={{ fontSize: 50 }} />,
      title: "Performance Tuning",
      description: "Optimize queries and configurations for maximum database speed and efficiency",
      color: theme.palette.primary.main
    },
    {
      icon: <Security fontSize="large" sx={{ fontSize: 50 }} />,
      title: "Security Hardening",
      description: "Enterprise-grade security measures to protect your sensitive data",
      color: theme.palette.error.main
    },
    {
      icon: <Storage fontSize="large" sx={{ fontSize: 50 }} />,
      title: "24/7 Monitoring",
      description: "Proactive monitoring prevents issues before they impact your business",
      color: theme.palette.warning.main
    },
    {
      icon: <Cloud fontSize="large" sx={{ fontSize: 50 }} />,
      title: "Cloud Optimization",
      description: "Reduce AWS/GCP costs while improving performance and reliability",
      color: theme.palette.success.main
    }
  ];

  const stats = [
    { value: "70%", label: "Performance Improvement" },
    { value: "24/7", label: "Expert Support" },
    { value: "200+", label: "Satisfied Clients" },
    { value: "40%", label: "Cost Reduction" }
  ];

  const carouselItems = [
    {
      image: "/images/mongo2.jpg.jpg",
      mobileImage: "/images/mongo2-mobile.jpg.jpg",
      title: "Enterprise Database Solutions",
      subtitle: "Scalable, secure, and high-performance database management",
      buttonText: "Explore Solutions",
      path: "/services"
    },
    {
      image: "/images/mongo1.jpg.png",
      mobileImage: "/images/mongo1-mobile.jpg.png",
      title: "24/7 Monitoring & Support",
      subtitle: "Proactive monitoring to prevent issues before they occur",
      buttonText: "Learn About Support",
      path: "/services#support"
    },
    {
      image: "/images/mongo3.jpg.jpg",
      mobileImage: "/images/mongo3-mobile.jpg.jpg",
      title: "Cloud Database Optimization",
      subtitle: "Reduce costs while improving performance and reliability",
      buttonText: "Cloud Services",
      path: "/services#cloud"
    }
  ];

  return (
    <>
      <Helmet>
        <title>FixMyDB | Database Performance & Optimization Experts</title>
        <meta name="description" content="Professional database management services including performance tuning, security hardening, and cloud optimization." />
      </Helmet>

      {/* Hero Section */}
      <Box 
        sx={{ 
          background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
          color: 'white',
          py: { xs: 8, md: 12 },
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Container maxWidth="lg">
          <Typography 
            variant={isMobile ? 'h3' : 'h2'}
            component="h1" 
            gutterBottom 
            sx={{ 
              fontWeight: 800,
              mb: 3,
              lineHeight: 1.2,
              px: isMobile ? 2 : 0
            }}
          >
            Database Experts at Your Service
          </Typography>
          <Typography 
            variant={isMobile ? 'body1' : 'h5'} 
            sx={{ 
              mb: 4, 
              maxWidth: 800,
              mx: 'auto',
              lineHeight: 1.6,
              px: isMobile ? 2 : 0
            }}
          >
            FixMyDB provides specialized database management to optimize performance, 
            enhance security, and reduce infrastructure costs.
          </Typography>
          <Stack 
            direction={{ xs: 'column', sm: 'row' }} 
            spacing={3} 
            justifyContent="center"
            sx={{ mt: 5 }}
          >
            <Button 
              variant="contained" 
              color="secondary" 
              size={isMobile ? 'medium' : 'large'}
              component={Link}
              to="/contact"
              sx={{ 
                px: { xs: 4, md: 6 },
                py: 1.5,
                fontSize: isMobile ? '0.875rem' : '1rem',
                fontWeight: 600,
                borderRadius: 2,
                textTransform: 'none',
                boxShadow: theme.shadows[4],
                '&:hover': {
                  boxShadow: theme.shadows[6],
                  backgroundColor: theme.palette.secondary.dark
                }
              }}
            >
              Get Free Consultation
            </Button>
            <Button 
              variant="outlined" 
              color="inherit" 
              size={isMobile ? 'medium' : 'large'}
              component={Link}
              to="/services"
              sx={{ 
                px: { xs: 4, md: 6 },
                py: 1.5,
                fontSize: isMobile ? '0.875rem' : '1rem',
                fontWeight: 600,
                borderRadius: 2,
                textTransform: 'none',
                borderWidth: 2,
                '&:hover': {
                  borderWidth: 2,
                  backgroundColor: 'rgba(255,255,255,0.1)'
                }
              }}
            >
              Our Services
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* Enhanced Carousel Section */}
      {isLoading ? (
        <Box sx={{ 
          height: isMobile ? '50vh' : '70vh', 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          backgroundColor: 'background.default'
        }}>
          <CircularProgress size={60} />
        </Box>
      ) : (
        <Box sx={{ position: 'relative', height: isMobile ? '50vh' : '70vh', overflow: 'hidden' }}>
          <Carousel 
            autoPlay 
            infiniteLoop 
            showThumbs={false} 
            showStatus={false}
            interval={6000}
            stopOnHover={false}
            renderArrowPrev={(onClickHandler, hasPrev, label) => (
              <Box
                onClick={onClickHandler}
                sx={{
                  position: 'absolute',
                  zIndex: 2,
                  top: '50%',
                  left: 10,
                  transform: 'translateY(-50%)',
                  bgcolor: 'rgba(255,255,255,0.7)',
                  borderRadius: '50%',
                  width: 40,
                  height: 40,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  '&:hover': {
                    bgcolor: 'rgba(255,255,255,0.9)'
                  },
                  [theme.breakpoints.up('md')]: {
                    width: 50,
                    height: 50,
                    left: 20
                  }
                }}
              >
                <Typography variant="h4" color="primary">‹</Typography>
              </Box>
            )}
            renderArrowNext={(onClickHandler, hasNext, label) => (
              <Box
                onClick={onClickHandler}
                sx={{
                  position: 'absolute',
                  zIndex: 2,
                  top: '50%',
                  right: 10,
                  transform: 'translateY(-50%)',
                  bgcolor: 'rgba(255,255,255,0.7)',
                  borderRadius: '50%',
                  width: 40,
                  height: 40,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  '&:hover': {
                    bgcolor: 'rgba(255,255,255,0.9)'
                  },
                  [theme.breakpoints.up('md')]: {
                    width: 50,
                    height: 50,
                    right: 20
                  }
                }}
              >
                <Typography variant="h4" color="primary">›</Typography>
              </Box>
            )}
          >
            {carouselItems.map((item, index) => (
              <Box key={index} sx={{ height: isMobile ? '50vh' : '70vh', position: 'relative' }}>
                <Box
                  component="img"
                  src={isMobile ? item.mobileImage : item.image}
                  alt={item.title}
                  loading="lazy"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'brightness(0.7)'
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    color: 'white',
                    p: 3,
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%)'
                  }}
                >
                  <Typography
                    variant={isMobile ? 'h4' : 'h2'}
                    sx={{
                      fontWeight: 800,
                      mb: 2,
                      textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                      maxWidth: isMobile ? '90%' : '80%'
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant={isMobile ? 'body1' : 'h5'}
                    sx={{
                      maxWidth: isMobile ? '90%' : '70%',
                      textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                      mb: 4
                    }}
                  >
                    {item.subtitle}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    size={isMobile ? 'medium' : 'large'}
                    component={Link}
                    to={item.path}
                    endIcon={<ArrowForward />}
                    sx={{
                      px: { xs: 4, md: 6 },
                      py: 1.5,
                      fontSize: isMobile ? '0.875rem' : '1rem',
                      fontWeight: 600,
                      borderRadius: 2,
                      textTransform: 'none',
                      boxShadow: theme.shadows[4],
                      '&:hover': {
                        boxShadow: theme.shadows[6],
                        backgroundColor: theme.palette.primary.dark
                      }
                    }}
                  >
                    {item.buttonText}
                  </Button>
                </Box>
              </Box>
            ))}
          </Carousel>
        </Box>
      )}

      {/* Stats Section */}
      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 2, md: 4 }} justifyContent="center">
            {stats.map((stat, index) => (
              <Grid item xs={6} sm={3} key={index}>
                <Box 
                  textAlign="center"
                  sx={{
                    p: { xs: 2, md: 3 },
                    borderRadius: 2,
                    height: '100%',
                    backgroundColor: 'background.default',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: theme.shadows[4]
                    }
                  }}
                >
                  <Typography 
                    variant={isMobile ? 'h3' : 'h2'} 
                    color="primary" 
                    fontWeight={800}
                    sx={{ mb: 1 }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography variant={isMobile ? 'body2' : 'h6'} color="text.secondary">
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: 'background.default' }}>
        <Container maxWidth="lg">
          <Typography 
            variant={isMobile ? 'h3' : 'h2'}
            align="center" 
            gutterBottom 
            sx={{ 
              fontWeight: 800,
              mb: { xs: 4, md: 8 },
              color: 'text.primary',
              px: isMobile ? 2 : 0
            }}
          >
            Our Specialized Services
          </Typography>
          <Grid container spacing={{ xs: 3, md: 4 }}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card 
                  elevation={3}
                  sx={{ 
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 4,
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    border: '1px solid',
                    borderColor: 'divider',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: theme.shadows[8],
                      borderColor: service.color
                    }
                  }}
                >
                  <CardContent 
                    sx={{ 
                      flexGrow: 1, 
                      textAlign: 'center',
                      p: { xs: 3, md: 4 },
                      '&:last-child': {
                        pb: { xs: 3, md: 4 }
                      }
                    }}
                  >
                    <Box 
                      sx={{ 
                        mb: 3,
                        color: service.color
                      }}
                    >
                      {service.icon}
                    </Box>
                    <Typography 
                      variant={isMobile ? 'h5' : 'h5'} 
                      gutterBottom 
                      sx={{ 
                        fontWeight: 700,
                        mb: 2
                      }}
                    >
                      {service.title}
                    </Typography>
                    <Typography variant={isMobile ? 'body2' : 'body1'} color="text.secondary">
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Box textAlign="center" mt={{ xs: 4, md: 8 }}>
            <Button 
              variant="outlined" 
              color="primary" 
              size={isMobile ? 'medium' : 'large'}
              component={Link}
              to="/services"
              endIcon={<ArrowForward />}
              sx={{ 
                px: { xs: 4, md: 6 },
                py: 1.5,
                fontSize: isMobile ? '0.875rem' : '1rem',
                fontWeight: 600,
                borderRadius: 2,
                textTransform: 'none',
                borderWidth: 2,
                '&:hover': {
                  borderWidth: 2
                }
              }}
            >
              View All Services
            </Button>
          </Box>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box 
        sx={{ 
          background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
          color: 'white',
          py: { xs: 8, md: 12 },
          textAlign: 'center'
        }}
      >
        <Container maxWidth="lg">
          <Typography 
            variant={isMobile ? 'h3' : 'h2'}
            gutterBottom 
            sx={{ 
              fontWeight: 800,
              mb: 3,
              px: isMobile ? 2 : 0
            }}
          >
            Ready to Optimize Your Database?
          </Typography>
          <Typography 
            variant={isMobile ? 'body1' : 'h5'} 
            sx={{ 
              mb: 6,
              maxWidth: 700,
              mx: 'auto',
              lineHeight: 1.6,
              px: isMobile ? 2 : 0
            }}
          >
            Our certified database administrators are ready to analyze your database 
            and provide customized solutions tailored to your needs.
          </Typography>
          <Button 
            variant="contained" 
            color="secondary" 
            size={isMobile ? 'medium' : 'large'}
            component={Link}
            to="/contact"
            sx={{ 
              px: { xs: 4, md: 8 },
              py: 1.5,
              fontSize: isMobile ? '0.875rem' : '1rem',
              fontWeight: 600,
              borderRadius: 2,
              textTransform: 'none',
              boxShadow: theme.shadows[4],
              '&:hover': {
                boxShadow: theme.shadows[6],
                backgroundColor: theme.palette.secondary.dark
              }
            }}
          >
            Get Started Today
          </Button>
        </Container>
      </Box>
    </>
  );
}

export default Home;