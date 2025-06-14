import { Box, Typography, Card, CardContent, Grid, Container, useTheme, Button, Fade } from '@mui/material';
import { 
  Speed as PerformanceIcon,
  Security as SecurityIcon,
  Storage as ManagedIcon,
  Cloud as CloudIcon,
  ArrowForward
} from '@mui/icons-material';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function ServicesSection() {
  const theme = useTheme();
  const [visible, setVisible] = useState(false);

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
      cta: "Boost Performance"
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
      cta: "Secure Your DB"
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
      cta: "Get Managed"
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
      cta: "Optimize Cloud"
    }
  ];

  return (
    <Box 
      id="services"
      sx={{ 
        py: { xs: 6, md: 10 }, 
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
        }
      }}
      onMouseEnter={() => setVisible(true)}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Typography 
          variant="h2" 
          align="center" 
          sx={{ 
            mb: { xs: 4, md: 6 },
            fontWeight: 800,
            color: 'text.primary'
          }}
        >
          Our Specialized Services
        </Typography>
        
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
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
                      borderColor: theme.palette.primary.main,
                      '& .service-icon': {
                        transform: 'scale(1.1)',
                        color: theme.palette.primary.dark
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
                    p: 3,
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
                          color: 'primary.main',
                          mr: 2,
                          transition: 'all 0.3s ease'
                        }}
                      >
                        {service.icon}
                      </Box>
                      <Typography 
                        variant="h5" 
                        component="h3"
                        sx={{ 
                          fontWeight: 700,
                          color: 'text.primary'
                        }}
                      >
                        {service.title}
                      </Typography>
                    </Box>
                    <Typography sx={{ 
                      color: 'text.secondary',
                      mb: 2,
                      flexGrow: 1
                    }}>
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
                            width: 8,
                            height: 8,
                            borderRadius: '50%',
                            bgcolor: 'primary.main',
                            mr: 1.5
                          }} />
                          <Typography variant="body2">{feature}</Typography>
                        </Box>
                      ))}
                    </Box>
                    
                    <Button
                      component={Link}
                      to="/contact"
                      variant="outlined"
                      color="primary"
                      endIcon={<ArrowForward />}
                      sx={{
                        alignSelf: 'flex-start',
                        mt: 'auto',
                        '&:hover': {
                          backgroundColor: 'primary.main',
                          color: 'white'
                        }
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