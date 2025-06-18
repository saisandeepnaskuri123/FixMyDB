import { Box, Typography, Card, CardContent, Grid, Container, useTheme, Button, Fade, useMediaQuery } from '@mui/material';
import { 
  Speed as PerformanceIcon,
  Security as SecurityIcon,
  Storage as ManagedIcon,
  Cloud as CloudIcon,
  ArrowForward
} from '@mui/icons-material';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ServicesSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Trigger animation when component mounts
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
      color: theme.palette.primary.main
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
      color: theme.palette.error.main
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
      color: theme.palette.success.main
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
      color: theme.palette.warning.main
    }
  ];

  return (
    <Box 
      id="services"
      sx={{ 
        py: { xs: 6, sm: 8, md: 10 }, 
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
          zIndex: 0
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
          zIndex: 0
        }
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Typography 
          variant={isMobile ? 'h3' : 'h2'}
          align="center" 
          sx={{ 
            mb: { xs: 4, sm: 5, md: 6 },
            fontWeight: 800,
            color: 'text.primary',
            px: isMobile ? 2 : 0
          }}
        >
          Our Specialized Services
        </Typography>
        
        <Grid container spacing={isMobile ? 3 : 4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} lg={3} key={index}>
              <Fade in={visible} timeout={(index + 1) * 300}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s ease',
                    boxShadow: theme.shadows[2],
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: theme.shadows[8],
                      borderColor: service.color,
                      '& .service-icon': {
                        transform: 'scale(1.1)',
                        color: service.color
                      },
                      '& .service-button': {
                        backgroundColor: service.color,
                        color: 'white'
                      }
                    },
                    border: '1px solid',
                    borderColor: 'divider',
                    borderRadius: 3,
                    overflow: 'hidden'
                  }}
                >
                  <CardContent sx={{ 
                    flexGrow: 1, 
                    p: isMobile ? 2.5 : 3,
                    display: 'flex',
                    flexDirection: 'column'
                  }}>
                    <Box sx={{ 
                      display: 'flex',
                      alignItems: 'center',
                      mb: 2
                    }}>
                      <Box 
                        className="service-icon"
                        sx={{ 
                          color: service.color,
                          mr: 2,
                          transition: 'all 0.3s ease'
                        }}
                      >
                        {service.icon}
                      </Box>
                      <Typography 
                        variant={isMobile ? 'h6' : 'h5'}
                        component="h3"
                        sx={{ 
                          fontWeight: 700,
                          color: 'text.primary'
                        }}
                      >
                        {service.title}
                      </Typography>
                    </Box>
                    <Typography 
                      variant={isMobile ? 'body2' : 'body1'}
                      sx={{ 
                        color: 'text.secondary',
                        mb: 2,
                        flexGrow: 1
                      }}
                    >
                      {service.description}
                    </Typography>
                    
                    <Box sx={{ mb: 3 }}>
                      {service.features.map((feature, i) => (
                        <Box 
                          key={i} 
                          sx={{ 
                            display: 'flex',
                            alignItems: 'center',
                            mb: 1
                          }}
                        >
                          <Box sx={{ 
                            width: 6,
                            height: 6,
                            borderRadius: '50%',
                            bgcolor: service.color,
                            mr: 1.5
                          }} />
                          <Typography variant={isMobile ? 'caption' : 'body2'}>
                            {feature}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                    
                    <Button
                      component={Link}
                      to="/contact"
                      variant="outlined"
                      color="inherit"
                      className="service-button"
                      endIcon={<ArrowForward />}
                      sx={{
                        alignSelf: 'flex-start',
                        mt: 'auto',
                        borderColor: service.color,
                        color: service.color,
                        '&:hover': {
                          backgroundColor: service.color,
                          color: 'white'
                        },
                        fontSize: isMobile ? '0.75rem' : '0.875rem',
                        py: isMobile ? 0.8 : 1,
                        px: isMobile ? 1.5 : 2
                      }}
                    >
                      {service.cta}
                    </Button>
                  </CardContent>
                </Card>
              </Fade>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default ServicesSection;