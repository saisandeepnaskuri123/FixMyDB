import { Box, Typography, Card, CardContent, Grid, Container, useTheme } from '@mui/material';
import { Speed, Security, Storage, Cloud } from '@mui/icons-material';

function ServicesSection() {
  const theme = useTheme();

  const services = [
    {
      icon: <Speed fontSize="large" color="primary" />,
      title: "Performance Tuning",
      description: "Optimize queries and configurations for maximum database speed and efficiency"
    },
    {
      icon: <Security fontSize="large" color="primary" />,
      title: "Security Hardening",
      description: "Enterprise-grade database protection with vulnerability assessment"
    },
    {
      icon: <Storage fontSize="large" color="primary" />,
      title: "Managed Services",
      description: "24/7 monitoring and maintenance by database experts"
    },
    {
      icon: <Cloud fontSize="large" color="primary" />,
      title: "Cloud Optimization",
      description: "Reduce AWS/GCP costs while improving performance"
    }
  ];

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography 
          variant="h2" 
          align="center" 
          sx={{ 
            mb: { xs: 4, md: 6 },
            fontWeight: 700
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
                  transition: 'all 0.3s ease',
                  boxShadow: theme.shadows[2],
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: theme.shadows[6],
                    borderColor: theme.palette.primary.main
                  },
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 2
                }}
              >
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Box sx={{ 
                    display: 'flex',
                    alignItems: 'center',
                    mb: 2,
                    color: theme.palette.primary.main
                  }}>
                    {service.icon}
                    <Typography 
                      variant="h5" 
                      component="h3"
                      sx={{ 
                        fontWeight: 600,
                        ml: 1.5
                      }}
                    >
                      {service.title}
                    </Typography>
                  </Box>
                  <Typography sx={{ color: 'text.secondary' }}>
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default ServicesSection;