import { Box, Button, Container, Grid, Typography, Card, CardContent, useTheme } from '@mui/material';
import { 
  Speed, 
  Security, 
  Storage, 
  Cloud, 
  SupportAgent,
  BarChart
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

function Home() {
  const theme = useTheme();

  const services = [
    {
      icon: <Speed fontSize="large" color="primary" sx={{ fontSize: 50 }} />,
      title: "Performance Tuning",
      description: "Optimize queries and configurations for maximum database speed"
    },
    {
      icon: <Security fontSize="large" color="primary" sx={{ fontSize: 50 }} />,
      title: "Security Hardening",
      description: "Protect your data with enterprise-grade security measures"
    },
    {
      icon: <Storage fontSize="large" color="primary" sx={{ fontSize: 50 }} />,
      title: "24/7 Monitoring",
      description: "Proactive monitoring prevents issues before they occur"
    },
    {
      icon: <Cloud fontSize="large" color="primary" sx={{ fontSize: 50 }} />,
      title: "Cloud Optimization",
      description: "Reduce AWS/GCP costs while improving performance"
    }
  ];

  const stats = [
    { value: "70%", label: "Performance Improvement" },
    { value: "24/7", label: "Expert Support" },
    { value: "200+", label: "Satisfied Clients" },
    { value: "40%", label: "Cost Reduction" }
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box 
        sx={{ 
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, #2d3748 100%)`,
          color: 'white',
          py: 10,
          textAlign: 'center'
        }}
      >
        <Container maxWidth="md">
          <Typography 
            variant="h2" 
            component="h1" 
            gutterBottom 
            sx={{ 
              fontWeight: 'bold',
              mb: 3
            }}
          >
            Database Experts at Your Service
          </Typography>
          <Typography variant="h5" sx={{ mb: 4 }}>
            FixMyDB provides specialized database management to optimize performance, 
            enhance security, and reduce infrastructure costs.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mt: 4 }}>
            <Button 
              variant="contained" 
              color="secondary" 
              size="large"
              component={Link}
              to="/contact"
              sx={{ 
                px: 4,
                py: 1.5,
                fontSize: '1.1rem'
              }}
            >
              Get Free Consultation
            </Button>
            <Button 
              variant="outlined" 
              color="inherit" 
              size="large"
              component={Link}
              to="/services"
              sx={{ 
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                borderWidth: '2px',
                '&:hover': {
                  borderWidth: '2px'
                }
              }}
            >
              Our Services
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box sx={{ py: 8, bgcolor: 'background.paper' }}>
        <Container>
          <Grid container spacing={4} justifyContent="center">
            {stats.map((stat, index) => (
              <Grid item xs={6} sm={3} key={index}>
                <Box textAlign="center">
                  <Typography variant="h3" color="primary" fontWeight="bold">
                    {stat.value}
                  </Typography>
                  <Typography variant="h6">{stat.label}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Box sx={{ py: 10, bgcolor: 'background.default' }}>
        <Container>
          <Typography 
            variant="h3" 
            align="center" 
            gutterBottom 
            sx={{ 
              fontWeight: 'bold',
              mb: 8
            }}
          >
            Our Specialized Services
          </Typography>
          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card 
                  sx={{ 
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.3s',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: theme.shadows[6]
                    }
                  }}
                >
                  <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                    <Box sx={{ mb: 2 }}>{service.icon}</Box>
                    <Typography variant="h5" gutterBottom>
                      {service.title}
                    </Typography>
                    <Typography>
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Box textAlign="center" mt={6}>
            <Button 
              variant="outlined" 
              color="primary" 
              size="large"
              component={Link}
              to="/services"
              sx={{ 
                px: 6,
                py: 1.5,
                fontSize: '1.1rem',
                borderWidth: '2px',
                '&:hover': {
                  borderWidth: '2px'
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
          background: `linear-gradient(to right, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
          color: 'white',
          py: 10,
          textAlign: 'center'
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
            Ready to Optimize Your Database?
          </Typography>
          <Typography variant="h5" sx={{ mb: 4 }}>
            Our experts are ready to analyze your database and provide customized solutions.
          </Typography>
          <Button 
            variant="contained" 
            color="secondary" 
            size="large"
            component={Link}
            to="/contact"
            sx={{ 
              px: 6,
              py: 1.5,
              fontSize: '1.1rem',
              mt: 3
            }}
          >
            Get Started Today
          </Button>
        </Container>
      </Box>
    </Box>
  );
}

export default Home;