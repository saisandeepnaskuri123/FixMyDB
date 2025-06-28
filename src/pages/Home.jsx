import { Box, Button, Container, Grid, Typography, Card, CardContent, useTheme, Stack, useMediaQuery } from '@mui/material';
import { 
  Speed, 
  Security, 
  Storage, 
  Cloud, 
  ArrowForward,
  CheckCircle,
  Support,
  BarChart,
  Savings
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Helmet } from 'react-helmet';
import { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { motion } from 'framer-motion';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardHover = {
  hover: {
    y: -8,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
};

function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      icon: <Speed fontSize="large" />,
      title: "Performance Tuning",
      description: "Optimize queries and configurations for maximum database speed and efficiency",
      color: theme.palette.primary.main,
      features: [
        "Query optimization",
        "Index tuning",
        "Configuration analysis"
      ]
    },
    {
      icon: <Security fontSize="large" />,
      title: "Security Hardening",
      description: "Enterprise-grade security measures to protect your sensitive data",
      color: theme.palette.error.main,
      features: [
        "Access control",
        "Encryption",
        "Vulnerability assessment"
      ]
    },
    {
      icon: <Storage fontSize="large" />,
      title: "24/7 Monitoring",
      description: "Proactive monitoring prevents issues before they impact your business",
      color: theme.palette.warning.main,
      features: [
        "Real-time alerts",
        "Performance metrics",
        "Capacity planning"
      ]
    },
    {
      icon: <Cloud fontSize="large" />,
      title: "Cloud Optimization",
      description: "Reduce AWS/GCP costs while improving performance and reliability",
      color: theme.palette.success.main,
      features: [
        "Cost analysis",
        "Resource right-sizing",
        "Architecture review"
      ]
    }
  ];

  const stats = [
    { value: "70%", label: "Performance Improvement", icon: <BarChart color="primary" /> },
    { value: "24/7", label: "Expert Support", icon: <Support color="primary" /> },
    { value: "200+", label: "Satisfied Clients", icon: <CheckCircle color="primary" /> },
    { value: "40%", label: "Cost Reduction", icon: <Savings color="primary" /> }
  ];

  const carouselItems = [
    {
      image: "/images/mongo2.png",
      mobileImage: "/images/mongo2-mobile.png",
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
      image: "/images/mongo3.jpg",
      mobileImage: "/images/mongo3-mobile.jpg",
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
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        sx={{ 
          //background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
          backgroundColor: '#fed7aa', // bg-orange-200 (solid color)
          color: 'Black',
          py: { xs: 8, md: 12 },
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
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
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
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
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    boxShadow: theme.shadows[8],
                    backgroundColor: theme.palette.secondary.dark,
                    transform: 'translateY(-2px)'
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
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    borderWidth: 2,
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    transform: 'translateY(-2px)'
                  }
                }}
              >
                Our Services
              </Button>
            </Stack>
          </motion.div>
        </Container>
      </Box>

      {/* Carousel Section */}
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
        <Box 
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          sx={{ position: 'relative', height: isMobile ? '50vh' : '70vh', overflow: 'hidden' }}
        >
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
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    bgcolor: 'rgba(255,255,255,0.9)',
                    transform: 'translateY(-50%) scale(1.1)'
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
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    bgcolor: 'rgba(255,255,255,0.9)',
                    transform: 'translateY(-50%) scale(1.1)'
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
                    filter: 'brightness(0.7)',
                    transition: 'filter 0.5s ease',
                    '&:hover': {
                      filter: 'brightness(0.6)'
                    }
                  }}
                />
                <Box
                  component={motion.div}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
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
                    component={motion.div}
                    initial={{ y: 20 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.2 }}
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
                    component={motion.div}
                    initial={{ y: 20 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.3 }}
                    sx={{
                      maxWidth: isMobile ? '90%' : '70%',
                      textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                      mb: 4
                    }}
                  >
                    {item.subtitle}
                  </Typography>
                  <motion.div
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                  >
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
                          boxShadow: theme.shadows[8],
                          backgroundColor: theme.palette.primary.dark
                        }
                      }}
                    >
                      {item.buttonText}
                    </Button>
                  </motion.div>
                </Box>
              </Box>
            ))}
          </Carousel>
        </Box>
      )}

      {/* Stats Section */}
      <Box 
        component={motion.section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        sx={{ py: { xs: 6, md: 10 }, backgroundColor: 'background.paper' }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 2, md: 4 }} justifyContent="center">
            {stats.map((stat, index) => (
              <Grid item xs={6} sm={3} key={index}>
                <motion.div variants={fadeInUp}>
                  <Box 
                    component={motion.div}
                    variants={cardHover}
                    whileHover="hover"
                    textAlign="center"
                    sx={{
                      p: { xs: 2, md: 3 },
                      borderRadius: 3,
                      height: '100%',
                      backgroundColor: 'background.default',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      boxShadow: theme.shadows[2],
                      '&:hover': {
                        boxShadow: theme.shadows[6],
                        backgroundColor: theme.palette.primary.light,
                        '& .MuiTypography-root': {
                          color: 'white'
                        },
                        '& .MuiSvgIcon-root': {
                          color: 'white'
                        }
                      }
                    }}
                  >
                    <Box sx={{ 
                      display: 'flex', 
                      justifyContent: 'center',
                      mb: 1,
                      color: theme.palette.primary.main,
                      transition: 'color 0.3s ease'
                    }}>
                      {stat.icon}
                    </Box>
                    <Typography 
                      variant={isMobile ? 'h3' : 'h2'} 
                      color="primary" 
                      fontWeight={800}
                      sx={{ mb: 1, transition: 'color 0.3s ease' }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography 
                      variant={isMobile ? 'body2' : 'h6'} 
                      color="text.secondary"
                      sx={{ transition: 'color 0.3s ease' }}
                    >
                      {stat.label}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Box 
        component={motion.section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        sx={{ py: { xs: 6, md: 10 }, backgroundColor: 'background.default' }}
      >
        <Container maxWidth="lg">
          <motion.div variants={fadeInUp}>
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
          </motion.div>
          
          <Grid container spacing={{ xs: 3, md: 4 }}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div variants={fadeInUp}>
                  <Card 
                    component={motion.div}
                    variants={cardHover}
                    whileHover="hover"
                    elevation={3}
                    sx={{ 
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: 4,
                      overflow: 'hidden',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      border: '1px solid',
                      borderColor: 'divider',
                      boxShadow: theme.shadows[2],
                      '&:hover': {
                        boxShadow: theme.shadows[10],
                        borderColor: service.color,
                        '& .service-icon': {
                          transform: 'scale(1.1)',
                          backgroundColor: `${service.color}20`
                        }
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
                        className="service-icon"
                        sx={{ 
                          mb: 3,
                          color: service.color,
                          display: 'inline-flex',
                          p: 2,
                          borderRadius: 3,
                          backgroundColor: `${service.color}10`,
                          transition: 'all 0.4s ease'
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
                      <Typography variant={isMobile ? 'body2' : 'body1'} color="text.secondary" sx={{ mb: 2 }}>
                        {service.description}
                      </Typography>
                      <Box component="ul" sx={{ 
                        textAlign: 'left', 
                        pl: 2,
                        mb: 2,
                        '& li': {
                          display: 'flex',
                          alignItems: 'center',
                          mb: 1,
                          fontSize: isMobile ? '0.8rem' : '0.9rem'
                        },
                        '& svg': {
                          fontSize: '1rem',
                          mr: 1,
                          color: service.color
                        }
                      }}>
                        {service.features.map((feature, i) => (
                          <Box component="li" key={i}>
                            <CheckCircle fontSize="small" />
                            {feature}
                          </Box>
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
          
          <Box 
            component={motion.div}
            variants={fadeInUp}
            textAlign="center" 
            mt={{ xs: 4, md: 8 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
            >
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
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderWidth: 2,
                    backgroundColor: `${theme.palette.primary.light}20`
                  }
                }}
              >
                View All Services
              </Button>
            </motion.div>
          </Box>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box 
        component={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        sx={{ 
          backgroundColor: '#fed7aa', // bg-orange-200 (solid color)
         // background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
          color: 'black',
          py: { xs: 8, md: 12 },
          textAlign: 'center'
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
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
          </motion.div>
          
          <motion.div
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
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
          </motion.div>
          
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
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
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  boxShadow: theme.shadows[8],
                  backgroundColor: theme.palette.secondary.dark
                }
              }}
            >
              Get Started Today
            </Button>
          </motion.div>
        </Container>
      </Box>
    </>
  );
}

export default Home;