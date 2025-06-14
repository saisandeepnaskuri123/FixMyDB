import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Button, 
  Accordion, 
  AccordionSummary, 
  AccordionDetails,
  useTheme,
  Chip,
  Stack,
  Divider
} from '@mui/material';
import { 
  ExpandMore,
  Speed,
  Security,
  Storage,
  Cloud,
  Assessment,
  Build,
  Dns,
  Lock,
  QueryBuilder,
  MonetizationOn
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

function Services() {
  const theme = useTheme();

  const services = [
    {
      icon: <Speed fontSize="large" />,
      title: "Performance Optimization",
      description: "Expert tuning for maximum database speed and efficiency",
      features: [
        "Query optimization and indexing",
        "Configuration tuning",
        "Bottleneck identification",
        "Benchmarking & load testing"
      ],
      cta: "Boost Performance",
      color: 'primary'
    },
    {
      icon: <Security fontSize="large" />,
      title: "Security Hardening",
      description: "Enterprise-grade database protection",
      features: [
        "Vulnerability assessment",
        "Access control implementation",
        "Encryption setup",
        "Compliance auditing"
      ],
      cta: "Secure Your Data",
      color: 'error'
    },
    {
      icon: <Storage fontSize="large" />,
      title: "Managed Database Services",
      description: "24/7 monitoring and maintenance",
      features: [
        "Proactive monitoring",
        "Regular health checks",
        "Backup management",
        "Patch & upgrade management"
      ],
      cta: "Get Managed",
      color: 'warning'
    },
    {
      icon: <Cloud fontSize="large" />,
      title: "Cloud Database Solutions",
      description: "Optimized cloud database infrastructure",
      features: [
        "AWS/GCP/Azure optimization",
        "Cost reduction strategies",
        "Migration services",
        "Hybrid cloud setups"
      ],
      cta: "Cloud Setup",
      color: 'info'
    },
    {
      icon: <Assessment fontSize="large" />,
      title: "Database Audits",
      description: "Comprehensive health check for your databases",
      features: [
        "Performance assessment",
        "Security review",
        "Capacity planning",
        "Architecture evaluation"
      ],
      cta: "Schedule Audit",
      color: 'success'
    },
    {
      icon: <Build fontSize="large" />,
      title: "Emergency Support",
      description: "Critical issue resolution when you need it most",
      features: [
        "24/7 emergency response",
        "Crash recovery",
        "Data corruption repair",
        "Performance firefighting"
      ],
      cta: "Get Help Now",
      color: 'secondary'
    }
  ];

  const databaseTypes = [
    { name: "MySQL", icon: <Dns />, color: "primary" },
    { name: "PostgreSQL", icon: <Dns />, color: "secondary" },
    { name: "MongoDB", icon: <Storage />, color: "success" },
    { name: "Redis", icon: <QueryBuilder />, color: "error" },
    { name: "Amazon RDS", icon: <Cloud />, color: "warning" },
    { name: "Microsoft SQL", icon: <Dns />, color: "info" },
    { name: "MariaDB", icon: <Dns />, color: "primary" },
    { name: "Oracle", icon: <MonetizationOn />, color: "secondary" }
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
            Database Services That Deliver Results
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
            Comprehensive solutions tailored to your database needs - from optimization 
            to security and everything in between.
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
              fontWeight: 600,
              borderRadius: 2,
              textTransform: 'none',
              boxShadow: theme.shadows[4],
              mt: 3,
              '&:hover': {
                boxShadow: theme.shadows[6],
                backgroundColor: theme.palette.secondary.dark
              }
            }}
          >
            Get Custom Solution
          </Button>
        </Container>
      </Box>

      {/* Supported Databases */}
      <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: 'background.paper' }}>
        <Container>
          <Typography 
            variant="h3" 
            align="center" 
            gutterBottom 
            sx={{ 
              fontWeight: 700,
              mb: { xs: 4, md: 6 },
              color: 'text.primary'
            }}
          >
            Supported Database Technologies
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {databaseTypes.map((db, index) => (
              <Grid item key={index}>
                <Chip
                  icon={db.icon}
                  label={db.name}
                  color={db.color}
                  variant="outlined"
                  sx={{ 
                    px: 3,
                    py: 1.5,
                    fontSize: '1rem',
                    fontWeight: 500,
                    borderWidth: 2,
                    '& .MuiChip-icon': {
                      color: `${db.color}.main`
                    }
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Services Grid */}
      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: 'background.default' }}>
        <Container>
          <Typography 
            variant="h3" 
            align="center" 
            gutterBottom 
            sx={{ 
              fontWeight: 700,
              mb: { xs: 6, md: 8 },
              color: 'text.primary'
            }}
          >
            Our Database Services
          </Typography>
          <Grid container spacing={{ xs: 3, md: 4 }}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card 
                  elevation={3}
                  sx={{ 
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 3,
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
                  <CardContent sx={{ flexGrow: 1, p: 4 }}>
                    <Box 
                      sx={{ 
                        display: 'flex',
                        alignItems: 'center',
                        mb: 3
                      }}
                    >
                      <Box 
                        sx={{ 
                          mr: 3,
                          color: `${service.color}.main`,
                          backgroundColor: `${service.color}.light`,
                          borderRadius: '50%',
                          width: 60,
                          height: 60,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
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
                    <Typography 
                      variant="body1" 
                      color="text.secondary"
                      sx={{ mb: 3 }}
                    >
                      {service.description}
                    </Typography>
                    <Divider sx={{ my: 2 }} />
                    <Box sx={{ mb: 3 }}>
                      {service.features.map((feature, i) => (
                        <Box 
                          key={i} 
                          sx={{ 
                            display: 'flex',
                            alignItems: 'flex-start',
                            mb: 2
                          }}
                        >
                          <Box 
                            sx={{ 
                              minWidth: 24,
                              height: 24,
                              borderRadius: '50%',
                              backgroundColor: `${service.color}.light`,
                              color: `${service.color}.main`,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              mr: 2,
                              mt: '2px'
                            }}
                          >
                            <Box 
                              component="span" 
                              sx={{ 
                                width: 8,
                                height: 8,
                                borderRadius: '50%',
                                backgroundColor: `${service.color}.main`
                              }} 
                            />
                          </Box>
                          <Typography variant="body2">{feature}</Typography>
                        </Box>
                      ))}
                    </Box>
                  </CardContent>
                  <Box sx={{ p: 3, pt: 0 }}>
                    <Button 
                      variant="contained" 
                      color={service.color}
                      fullWidth
                      component={Link}
                      to="/contact"
                      sx={{ 
                        py: 1.5,
                        borderRadius: 2,
                        fontSize: '1rem',
                        fontWeight: 600,
                        textTransform: 'none',
                        boxShadow: 'none',
                        '&:hover': {
                          boxShadow: 'none',
                          backgroundColor: theme.palette[service.color].dark
                        }
                      }}
                    >
                      {service.cta}
                    </Button>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* FAQ Section */}
      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: 'background.paper' }}>
        <Container maxWidth="md">
          <Typography 
            variant="h3" 
            align="center" 
            gutterBottom 
            sx={{ 
              fontWeight: 700,
              mb: { xs: 4, md: 6 },
              color: 'text.primary'
            }}
          >
            Frequently Asked Questions
          </Typography>
          <Box>
            {[
              {
                question: "How quickly can you resolve performance issues?",
                answer: "Most critical performance issues are resolved within 4-8 hours. Our average response time for emergency cases is under 30 minutes."
              },
              {
                question: "Do you offer ongoing maintenance contracts?",
                answer: "Yes, we provide flexible retainer agreements with tiered support levels to match your business needs and budget."
              },
              {
                question: "What makes your security services different?",
                answer: "We combine automated scanning with manual penetration testing by certified security experts who specialize in database systems."
              },
              {
                question: "Can you help reduce our cloud database costs?",
                answer: "On average, we reduce clients' cloud database costs by 40-60% through right-sizing, query optimization, and architecture improvements."
              }
            ].map((item, index) => (
              <Accordion 
                key={index} 
                elevation={0}
                sx={{ 
                  mb: 2,
                  borderRadius: 2,
                  overflow: 'hidden',
                  border: '1px solid',
                  borderColor: 'divider',
                  '&:before': {
                    display: 'none'
                  }
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMore color="primary" />}
                  sx={{ 
                    backgroundColor: 'background.default',
                    '& .MuiAccordionSummary-content': {
                      my: 2
                    },
                    '&:hover': {
                      backgroundColor: 'action.hover'
                    }
                  }}
                >
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    {item.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ backgroundColor: 'background.paper' }}>
                  <Typography variant="body1" color="text.secondary">
                    {item.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
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
            variant="h3" 
            gutterBottom 
            sx={{ 
              fontWeight: 800,
              mb: 3
            }}
          >
            Ready to Transform Your Database Performance?
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
            Contact us today for a free initial consultation and database assessment.
          </Typography>
          <Stack 
            direction={{ xs: 'column', sm: 'row' }} 
            spacing={3} 
            justifyContent="center"
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
              Get Started
            </Button>
            <Button 
              variant="outlined" 
              color="inherit" 
              size="large"
              component={Link}
              to="/about"
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
              Learn About Us
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

export default Services;