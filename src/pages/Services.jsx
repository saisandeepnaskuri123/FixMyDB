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
  Chip
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
      icon: <Speed fontSize="large" color="primary" />,
      title: "Performance Optimization",
      description: "Expert tuning for maximum database speed and efficiency",
      features: [
        "Query optimization and indexing",
        "Configuration tuning",
        "Bottleneck identification",
        "Benchmarking & load testing"
      ],
      cta: "Boost Performance"
    },
    {
      icon: <Security fontSize="large" color="primary" />,
      title: "Security Hardening",
      description: "Enterprise-grade database protection",
      features: [
        "Vulnerability assessment",
        "Access control implementation",
        "Encryption setup",
        "Compliance auditing"
      ],
      cta: "Secure Your Data"
    },
    {
      icon: <Storage fontSize="large" color="primary" />,
      title: "Managed Database Services",
      description: "24/7 monitoring and maintenance",
      features: [
        "Proactive monitoring",
        "Regular health checks",
        "Backup management",
        "Patch & upgrade management"
      ],
      cta: "Get Managed"
    },
    {
      icon: <Cloud fontSize="large" color="primary" />,
      title: "Cloud Database Solutions",
      description: "Optimized cloud database infrastructure",
      features: [
        "AWS/GCP/Azure optimization",
        "Cost reduction strategies",
        "Migration services",
        "Hybrid cloud setups"
      ],
      cta: "Cloud Setup"
    },
    {
      icon: <Assessment fontSize="large" color="primary" />,
      title: "Database Audits",
      description: "Comprehensive health check for your databases",
      features: [
        "Performance assessment",
        "Security review",
        "Capacity planning",
        "Architecture evaluation"
      ],
      cta: "Schedule Audit"
    },
    {
      icon: <Build fontSize="large" color="primary" />,
      title: "Emergency Support",
      description: "Critical issue resolution when you need it most",
      features: [
        "24/7 emergency response",
        "Crash recovery",
        "Data corruption repair",
        "Performance firefighting"
      ],
      cta: "Get Help Now"
    }
  ];

  const databaseTypes = [
    { name: "MySQL", color: "primary" },
    { name: "PostgreSQL", color: "secondary" },
    { name: "MongoDB", color: "success" },
    { name: "Redis", color: "error" },
    { name: "Amazon RDS", color: "warning" },
    { name: "Microsoft SQL", color: "info" },
    { name: "MariaDB", color: "primary" },
    { name: "Oracle", color: "secondary" }
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box 
        sx={{ 
          background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
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
            Database Services That Deliver Results
          </Typography>
          <Typography variant="h5" sx={{ mb: 4 }}>
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
              mt: 2
            }}
          >
            Get Custom Solution
          </Button>
        </Container>
      </Box>

      {/* Supported Databases */}
      <Box sx={{ py: 6, bgcolor: 'background.paper' }}>
        <Container>
          <Typography 
            variant="h4" 
            align="center" 
            gutterBottom 
            sx={{ 
              fontWeight: 'bold',
              mb: 4
            }}
          >
            Supported Database Technologies
          </Typography>
          <Box sx={{ 
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 2,
            maxWidth: 800,
            mx: 'auto'
          }}>
            {databaseTypes.map((db, index) => (
              <Chip
                key={index}
                label={db.name}
                color={db.color}
                variant="outlined"
                sx={{ 
                  px: 2,
                  py: 1.5,
                  fontSize: '1rem',
                  borderWidth: '2px'
                }}
              />
            ))}
          </Box>
        </Container>
      </Box>

      {/* Services Grid */}
      <Box sx={{ py: 8, bgcolor: 'background.default' }}>
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
            Our Database Services
          </Typography>
          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card 
                  sx={{ 
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s ease',
                    border: '1px solid',
                    borderColor: 'divider',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: theme.shadows[8],
                      borderColor: theme.palette.primary.main
                    }
                  }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Box 
                      sx={{ 
                        display: 'flex',
                        alignItems: 'center',
                        mb: 2
                      }}
                    >
                      <Box sx={{ 
                        mr: 2,
                        color: theme.palette.primary.main
                      }}>
                        {service.icon}
                      </Box>
                      <Typography 
                        variant="h5" 
                        component="h3"
                        sx={{ fontWeight: 'bold' }}
                      >
                        {service.title}
                      </Typography>
                    </Box>
                    <Typography paragraph sx={{ mb: 2 }}>
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
                  </CardContent>
                  <Box sx={{ p: 2, textAlign: 'center' }}>
                    <Button 
                      variant="contained" 
                      color="primary"
                      component={Link}
                      to="/contact"
                      sx={{ 
                        width: '100%',
                        py: 1.5
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
      <Box sx={{ py: 8, bgcolor: 'background.paper' }}>
        <Container maxWidth="md">
          <Typography 
            variant="h3" 
            align="center" 
            gutterBottom 
            sx={{ 
              fontWeight: 'bold',
              mb: 6
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
                sx={{ 
                  mb: 2,
                  borderRadius: '8px !important',
                  boxShadow: 'none',
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
                    fontWeight: 'bold',
                    '& .MuiAccordionSummary-content': {
                      my: 1.5
                    }
                  }}
                >
                  {item.question}
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{item.answer}</Typography>
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
          py: 10,
          textAlign: 'center'
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
            Ready to Transform Your Database Performance?
          </Typography>
          <Typography variant="h5" sx={{ mb: 4 }}>
            Contact us today for a free initial consultation and database assessment.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', mt: 4 }}>
            <Button 
              variant="contained" 
              color="secondary" 
              size="large"
              component={Link}
              to="/contact"
              sx={{ 
                px: 6,
                py: 1.5,
                fontSize: '1.1rem'
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
                borderWidth: '2px',
                '&:hover': {
                  borderWidth: '2px'
                }
              }}
            >
              Learn About Us
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default Services;