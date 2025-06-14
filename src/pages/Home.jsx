import { Box, Button, Container, Grid, Typography, Card, CardContent, useTheme, Stack } from '@mui/material';
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
      description: "Optimize queries and configurations for maximum database speed and efficiency",
      color: 'primary'
    },
    {
      icon: <Security fontSize="large" color="primary" sx={{ fontSize: 50 }} />,
      title: "Security Hardening",
      description: "Enterprise-grade security measures to protect your sensitive data",
      color: 'error'
    },
    {
      icon: <Storage fontSize="large" color="primary" sx={{ fontSize: 50 }} />,
      title: "24/7 Monitoring",
      description: "Proactive monitoring prevents issues before they impact your business",
      color: 'warning'
    },
    {
      icon: <Cloud fontSize="large" color="primary" sx={{ fontSize: 50 }} />,
      title: "Cloud Optimization",
      description: "Reduce AWS/GCP costs while improving performance and reliability",
      color: 'success'
    }
  ];

  const stats = [
    { value: "70%", label: "Performance Improvement" },
    { value: "24/7", label: "Expert Support" },
    { value: "200+", label: "Satisfied Clients" },
    { value: "40%", label: "Cost Reduction" }
  ];

  return (
    <Box sx={{ backgroundColor: 'background.default' }}>
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
            variant="h2" 
            component="h1" 
            gutterBottom 
            sx={{ 
              fontWeight: 800,
              mb: 3,
              letterSpacing: '0.5px',
              lineHeight: 1.2
            }}
          >
            Database Experts at Your Service
          </Typography>
          <Typography 
            variant="h5" 
            sx={{ 
              mb: 4, 
              maxWidth: 800,
              mx: 'auto',
              lineHeight: 1.6
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
              size="large"
              component={Link}
              to="/contact"
              sx={{ 
                px: 6,
                py: 1.5,
                fontSize: '1.1rem',
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
              size="large"
              component={Link}
              to="/services"
              sx={{ 
                px: 6,
                py: 1.5,
                fontSize: '1.1rem',
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

      {/* Stats Section */}
      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 2, md: 4 }} justifyContent="center">
            {stats.map((stat, index) => (
              <Grid item xs={6} sm={3} key={index}>
                <Box 
                  textAlign="center"
                  sx={{
                    p: 3,
                    borderRadius: 2,
                    height: '100%',
                    backgroundColor: 'background.default'
                  }}
                >
                  <Typography 
                    variant="h2" 
                    color="primary" 
                    fontWeight={800}
                    sx={{ mb: 1 }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
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
            variant="h3" 
            align="center" 
            gutterBottom 
            sx={{ 
              fontWeight: 800,
              mb: { xs: 4, md: 8 },
              color: 'text.primary'
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
                      borderColor: theme.palette[service.color].main
                    }
                  }}
                >
                  <CardContent 
                    sx={{ 
                      flexGrow: 1, 
                      textAlign: 'center',
                      p: 4,
                      '&:last-child': {
                        pb: 4
                      }
                    }}
                  >
                    <Box 
                      sx={{ 
                        mb: 3,
                        color: `${service.color}.main`
                      }}
                    >
                      {service.icon}
                    </Box>
                    <Typography 
                      variant="h5" 
                      gutterBottom 
                      sx={{ 
                        fontWeight: 700,
                        mb: 2
                      }}
                    >
                      {service.title}
                    </Typography>
                    <Typography color="text.secondary">
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
              size="large"
              component={Link}
              to="/services"
              sx={{ 
                px: 6,
                py: 1.5,
                fontSize: '1.1rem',
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
            variant="h2" 
            gutterBottom 
            sx={{ 
              fontWeight: 800,
              mb: 3
            }}
          >
            Ready to Optimize Your Database?
          </Typography>
          <Typography 
            variant="h5" 
            sx={{ 
              mb: 6,
              maxWidth: 700,
              mx: 'auto',
              lineHeight: 1.6
            }}
          >
            Our certified database administrators are ready to analyze your database 
            and provide customized solutions tailored to your needs.
          </Typography>
          <Button 
            variant="contained" 
            color="secondary" 
            size="large"
            component={Link}
            to="/contact"
            sx={{ 
              px: 8,
              py: 1.5,
              fontSize: '1.1rem',
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
    </Box>
  );
}

export default Home;