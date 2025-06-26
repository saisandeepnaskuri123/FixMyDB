import { Box, Typography, Card, CardContent, Grid, Container, useTheme, Button, useMediaQuery } from '@mui/material';
import { 
  Speed as PerformanceIcon,
  Security as SecurityIcon,
  Storage as ManagedIcon,
  Cloud as CloudIcon,
  ArrowForward
} from '@mui/icons-material';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

function ServicesSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const services = [
    {
      icon: <PerformanceIcon fontSize="large" />,
      title: "Performance Tuning",
      description: "Optimize queries and configurations for maximum database speed and efficiency",
      features: [
        "Query optimization",
        "Index tuning",
        "Configuration analysis",
        "Benchmarking"
      ],
      cta: "Boost Performance",
      color: theme.palette.primary.main,
      gradient: theme.palette.mode === 'light' 
        ? 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)' 
        : 'linear-gradient(135deg, #0d47a1 0%, #1976d2 100%)'
    },
    {
      icon: <SecurityIcon fontSize="large" />,
      title: "Security Hardening",
      description: "Enterprise-grade database protection with vulnerability assessment",
      features: [
        "Vulnerability scans",
        "Access controls",
        "Encryption setup",
        "Compliance checks"
      ],
      cta: "Secure Your DB",
      color: theme.palette.error.main,
      gradient: theme.palette.mode === 'light' 
        ? 'linear-gradient(135deg, #ffebee 0%, #ffcdd2 100%)' 
        : 'linear-gradient(135deg, #b71c1c 0%, #d32f2f 100%)'
    },
    {
      icon: <ManagedIcon fontSize="large" />,
      title: "Managed Services",
      description: "24/7 monitoring and maintenance by database experts",
      features: [
        "Proactive monitoring",
        "Regular patching",
        "Backup management",
        "Emergency support"
      ],
      cta: "Get Managed",
      color: theme.palette.success.main,
      gradient: theme.palette.mode === 'light' 
        ? 'linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)' 
        : 'linear-gradient(135deg, #1b5e20 0%, #388e3c 100%)'
    },
    {
      icon: <CloudIcon fontSize="large" />,
      title: "Cloud Optimization",
      description: "Reduce AWS/GCP costs while improving performance",
      features: [
        "Cost analysis",
        "Right-sizing",
        "Architecture review",
        "Migration support"
      ],
      cta: "Optimize Cloud",
      color: theme.palette.warning.main,
      gradient: theme.palette.mode === 'light' 
        ? 'linear-gradient(135deg, #fff8e1 0%, #ffecb3 100%)' 
        : 'linear-gradient(135deg, #e65100 0%, #ffa000 100%)'
    }
  ];

  return (
    <Box 
      id="services"
      sx={{ 
        py: { xs: 8, sm: 10, md: 12 }, 
        backgroundColor: 'background.default',
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
          background: theme.palette.mode === 'light' 
            ? 'rgba(25, 118, 210, 0.05)' 
            : 'rgba(25, 118, 210, 0.1)',
          zIndex: 0,
          animation: 'pulse 15s infinite alternate'
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: -150,
          left: -150,
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: theme.palette.mode === 'light' 
            ? 'rgba(25, 118, 210, 0.03)' 
            : 'rgba(25, 118, 210, 0.07)',
          zIndex: 0,
          animation: 'pulse 12s infinite alternate-reverse'
        },
        '@keyframes pulse': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' }
        }
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Typography 
            variant={isMobile ? 'h3' : 'h2'}
            align="center" 
            sx={{ 
              mb: { xs: 4, sm: 5, md: 6 },
              fontWeight: 800,
              color: 'text.primary',
              px: isMobile ? 2 : 0,
              background: theme.palette.mode === 'light'
                ? 'linear-gradient(to right, #3a7bd5, #00d2ff)'
                : 'linear-gradient(to right, #00d2ff, #3a7bd5)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block',
              width: '100%'
            }}
          >
            Our Specialized Services
          </Typography>
        </motion.div>
        
        <Grid container spacing={isMobile ? 3 : 4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} lg={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={visible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.03 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
                    boxShadow: theme.shadows[4],
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: `0 10px 20px rgba(0, 0, 0, 0.2)`,
                      '& .service-icon-container': {
                        transform: 'translateY(-10px)',
                        '& .service-icon': {
                          transform: 'scale(1.2) rotate(-5deg)',
                          color: theme.palette.getContrastText(service.color)
                        }
                      },
                      '& .service-button': {
                        transform: 'translateX(5px)',
                        boxShadow: `0 4px 8px ${service.color}40`
                      }
                    },
                    border: 'none',
                    borderRadius: 3,
                    overflow: 'hidden',
                    background: service.gradient,
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 4,
                      background: service.color
                    }
                  }}
                >
                  <CardContent sx={{ 
                    flexGrow: 1, 
                    p: isMobile ? 3 : 4,
                    display: 'flex',
                    flexDirection: 'column'
                  }}>
                    <motion.div 
                      className="service-icon-container"
                      sx={{ 
                        display: 'flex',
                        justifyContent: 'center',
                        mb: 3,
                        p: 2,
                        background: service.color,
                        borderRadius: '50%',
                        width: 70,
                        height: 70,
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <Box 
                        className="service-icon"
                        sx={{ 
                          color: theme.palette.getContrastText(service.color),
                          transition: 'all 0.3s ease',
                          display: 'flex',
                          alignItems: 'center'
                        }}
                      >
                        {service.icon}
                      </Box>
                    </motion.div>
                    
                    <Typography 
                      variant={isMobile ? 'h6' : 'h5'}
                      component="h3"
                      sx={{ 
                        fontWeight: 700,
                        color: 'text.primary',
                        textAlign: 'center',
                        mb: 2
                      }}
                    >
                      {service.title}
                    </Typography>
                    
                    <Typography 
                      variant={isMobile ? 'body2' : 'body1'}
                      sx={{ 
                        color: 'text.secondary',
                        mb: 3,
                        flexGrow: 1,
                        textAlign: 'center'
                      }}
                    >
                      {service.description}
                    </Typography>
                    
                    <Box sx={{ mb: 3 }}>
                      {service.features.map((feature, i) => (
                        <motion.div
                          key={i}
                          whileHover={{ x: 5 }}
                        >
                          <Box 
                            sx={{ 
                              display: 'flex',
                              alignItems: 'center',
                              mb: 1.5,
                              p: 1,
                              borderRadius: 1,
                              background: theme.palette.mode === 'light'
                                ? 'rgba(255, 255, 255, 0.7)'
                                : 'rgba(0, 0, 0, 0.2)',
                              transition: 'all 0.2s ease'
                            }}
                          >
                            <Box sx={{ 
                              width: 8,
                              height: 8,
                              borderRadius: '50%',
                              bgcolor: service.color,
                              mr: 2,
                              flexShrink: 0
                            }} />
                            <Typography variant={isMobile ? 'caption' : 'body2'}>
                              {feature}
                            </Typography>
                          </Box>
                        </motion.div>
                      ))}
                    </Box>
                    
                    <motion.div
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        component={Link}
                        to="/contact"
                        variant="contained"
                        className="service-button"
                        endIcon={<ArrowForward sx={{ transition: 'all 0.3s ease' }} />}
                        sx={{
                          alignSelf: 'center',
                          mt: 'auto',
                          backgroundColor: service.color,
                          color: theme.palette.getContrastText(service.color),
                          '&:hover': {
                            backgroundColor: service.color,
                            transform: 'translateX(5px)'
                          },
                          fontSize: isMobile ? '0.75rem' : '0.875rem',
                          py: isMobile ? 1 : 1.2,
                          px: isMobile ? 2 : 3,
                          borderRadius: 2,
                          fontWeight: 600,
                          textTransform: 'none',
                          letterSpacing: 0.5,
                          transition: 'all 0.3s ease',
                          boxShadow: 'none'
                        }}
                      >
                        {service.cta}
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default ServicesSection;