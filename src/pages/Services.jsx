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
  Divider,
  useMediaQuery,
  Grow,
  Fade,
  Slide,
  Zoom
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
import { motion } from 'framer-motion';

// Animation variants
const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

function Services() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const services = [
    {
      icon: <Speed fontSize={isMobile ? "medium" : "large"} />,
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
      icon: <Security fontSize={isMobile ? "medium" : "large"} />,
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
      icon: <Storage fontSize={isMobile ? "medium" : "large"} />,
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
      icon: <Cloud fontSize={isMobile ? "medium" : "large"} />,
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
      icon: <Assessment fontSize={isMobile ? "medium" : "large"} />,
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
      icon: <Build fontSize={isMobile ? "medium" : "large"} />,
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
    { name: "MySQL", icon: <Dns fontSize={isMobile ? "small" : "medium"} />, color: "primary" },
    { name: "PostgreSQL", icon: <Dns fontSize={isMobile ? "small" : "medium"} />, color: "secondary" },
    { name: "MongoDB", icon: <Storage fontSize={isMobile ? "small" : "medium"} />, color: "success" },
    { name: "Redis", icon: <QueryBuilder fontSize={isMobile ? "small" : "medium"} />, color: "error" },
    { name: "Amazon RDS", icon: <Cloud fontSize={isMobile ? "small" : "medium"} />, color: "warning" },
    { name: "Microsoft SQL", icon: <Dns fontSize={isMobile ? "small" : "medium"} />, color: "info" },
    { name: "MariaDB", icon: <Dns fontSize={isMobile ? "small" : "medium"} />, color: "primary" },
    { name: "Oracle", icon: <MonetizationOn fontSize={isMobile ? "small" : "medium"} />, color: "secondary" }
  ];

  return (
    <Box sx={{ backgroundColor: 'background.default' }}>
      {/* Hero Section */}
      <Box 
        sx={{ 
          //background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
          backgroundColor: '#fed7aa', // bg-orange-200 (solid color)
          color: 'Black',
          py: { xs: 6, sm: 8, md: 12 },
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          '&:before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 75% 30%, rgba(255,255,255,0.1) 0%, transparent 60%)',
            zIndex: 1
          }
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Slide direction="down" in={true} timeout={800}>
            <Typography 
              variant={isMobile ? "h3" : "h2"} 
              component="h1" 
              gutterBottom 
              sx={{ 
                fontWeight: 800,
                mb: 3,
                letterSpacing: { xs: 'normal', md: '0.5px' },
                lineHeight: 1.2,
                px: { xs: 1, sm: 0 },
                textShadow: '0 2px 10px rgba(0,0,0,0.2)'
              }}
            >
              Database Services That Deliver Results
            </Typography>
          </Slide>
          <Fade in={true} timeout={1000}>
            <Typography 
              variant={isMobile ? "body1" : "h5"} 
              sx={{ 
                mb: 4, 
                maxWidth: 800,
                mx: 'auto',
                lineHeight: 1.6,
                px: { xs: 2, sm: 0 },
                opacity: 0.9
              }}
            >
              Comprehensive solutions tailored to your database needs - from optimization 
              to security and everything in between.
            </Typography>
          </Fade>
          <Zoom in={true} timeout={1200}>
            <Button 
              variant="contained" 
              color="secondary" 
              size={isMobile ? "medium" : "large"}
              component={Link}
              to="/contact"
              sx={{ 
                px: { xs: 4, sm: 6 },
                py: 1.5,
                fontSize: isMobile ? '1rem' : '1.1rem',
                fontWeight: 600,
                borderRadius: 2,
                textTransform: 'none',
                boxShadow: theme.shadows[6],
                mt: 3,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: theme.shadows[8],
                  backgroundColor: theme.palette.secondary.dark
                }
              }}
            >
              Get Custom Solution
            </Button>
          </Zoom>
        </Container>
      </Box>

      {/* Supported Databases */}
      <Box sx={{ py: { xs: 4, sm: 6, md: 8 }, backgroundColor: 'background.paper' }}>
        <Container>
          <Fade in={true} timeout={800}>
            <Typography 
              variant={isMobile ? "h4" : "h3"} 
              align="center" 
              gutterBottom 
              sx={{ 
                fontWeight: 700,
                mb: { xs: 3, sm: 4, md: 6 },
                color: 'text.primary',
                px: { xs: 2, sm: 0 }
              }}
            >
              Supported Database Technologies
            </Typography>
          </Fade>
          <Grid container spacing={2} justifyContent="center">
            {databaseTypes.map((db, index) => (
              <Grid item key={index} xs={6} sm={4} md={3} lg="auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Chip
                    icon={db.icon}
                    label={db.name}
                    color={db.color}
                    variant="outlined"
                    sx={{ 
                      px: { xs: 1, sm: 3 },
                      py: { xs: 0.5, sm: 1.5 },
                      fontSize: isMobile ? '0.875rem' : '1rem',
                      fontWeight: 500,
                      borderWidth: 2,
                      width: { xs: '100%', lg: 'auto' },
                      transition: 'all 0.3s ease',
                      '& .MuiChip-icon': {
                        color: `${db.color}.main`,
                        ml: { xs: 0, sm: '4px' }
                      },
                      '&:hover': {
                        transform: 'scale(1.05)',
                        backgroundColor: `${db.color}.light`
                      }
                    }}
                  />
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Services Grid */}
      <Box sx={{ py: { xs: 4, sm: 6, md: 10 }, backgroundColor: 'background.default' }}>
        <Container>
          <Fade in={true} timeout={800}>
            <Typography 
              variant={isMobile ? "h4" : "h3"} 
              align="center" 
              gutterBottom 
              sx={{ 
                fontWeight: 700,
                mb: { xs: 4, sm: 6, md: 8 },
                color: 'text.primary',
                px: { xs: 2, sm: 0 }
              }}
            >
              Our Database Services
            </Typography>
          </Fade>
          <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={cardVariants}
                >
                  <Card 
                    elevation={isMobile ? 1 : 3}
                    sx={{ 
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: { xs: 2, sm: 3 },
                      overflow: 'hidden',
                      transition: 'all 0.3s ease',
                      border: '1px solid',
                      borderColor: 'divider',
                      background: `linear-gradient(to bottom, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 100%)`,
                      '&:hover': {
                        transform: isMobile ? 'none' : 'translateY(-8px)',
                        boxShadow: isMobile ? theme.shadows[4] : theme.shadows[12],
                        borderColor: theme.palette[service.color].main,
                        '& .service-icon': {
                          transform: 'scale(1.1)',
                          backgroundColor: theme.palette[service.color].dark,
                          color: 'white'
                        }
                      }
                    }}
                  >
                    <CardContent sx={{ 
                      flexGrow: 1, 
                      p: { xs: 3, sm: 4 },
                      '&:last-child': {
                        pb: { xs: 3, sm: 4 }
                      }
                    }}>
                      <Box 
                        sx={{ 
                          display: 'flex',
                          alignItems: 'center',
                          mb: 3
                        }}
                      >
                        <Box 
                          className="service-icon"
                          sx={{ 
                            mr: 2,
                            color: `${service.color}.main`,
                            backgroundColor: `${service.color}.light`,
                            borderRadius: '50%',
                            width: { xs: 50, sm: 60 },
                            height: { xs: 50, sm: 60 },
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            transition: 'all 0.3s ease'
                          }}
                        >
                          {service.icon}
                        </Box>
                        <Typography 
                          variant={isMobile ? "h6" : "h5"} 
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
                      <Divider sx={{ my: 2, borderColor: 'divider' }} />
                      <Box sx={{ mb: 3 }}>
                        {service.features.map((feature, i) => (
                          <Box 
                            key={i} 
                            sx={{ 
                              display: 'flex',
                              alignItems: 'flex-start',
                              mb: 2,
                              transition: 'all 0.2s ease',
                              '&:hover': {
                                transform: 'translateX(4px)'
                              }
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
                                mt: '2px',
                                flexShrink: 0
                              }}
                            >
                              <Box 
                                component="span" 
                                sx={{ 
                                  width: 8,
                                  height: 8,
                                  borderRadius: '50%',
                                  backgroundColor: `${service.color}.main`,
                                  transition: 'all 0.3s ease'
                                }} 
                              />
                            </Box>
                            <Typography variant="body2">{feature}</Typography>
                          </Box>
                        ))}
                      </Box>
                    </CardContent>
                    <Box sx={{ p: { xs: 2, sm: 3 }, pt: 0 }}>
                      <Button 
                        variant="contained" 
                        color={service.color}
                        fullWidth
                        component={Link}
                        to="/contact"
                        size={isMobile ? "medium" : "large"}
                        sx={{ 
                          py: 1,
                          borderRadius: 2,
                          fontSize: isMobile ? '0.875rem' : '1rem',
                          fontWeight: 600,
                          textTransform: 'none',
                          boxShadow: theme.shadows[2],
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            boxShadow: theme.shadows[4],
                            backgroundColor: theme.palette[service.color].dark,
                            transform: 'translateY(-2px)'
                          }
                        }}
                      >
                        {service.cta}
                      </Button>
                    </Box>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* FAQ Section */}
      <Box sx={{ py: { xs: 4, sm: 6, md: 10 }, backgroundColor: 'background.paper' }}>
        <Container maxWidth="md">
          <Fade in={true} timeout={800}>
            <Typography 
              variant={isMobile ? "h4" : "h3"} 
              align="center" 
              gutterBottom 
              sx={{ 
                fontWeight: 700,
                mb: { xs: 3, sm: 4, md: 6 },
                color: 'text.primary',
                px: { xs: 2, sm: 0 }
              }}
            >
              Frequently Asked Questions
            </Typography>
          </Fade>
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
              <Grow in={true} timeout={(index + 1) * 300} key={index}>
                <Accordion 
                  elevation={0}
                  sx={{ 
                    mb: 2,
                    borderRadius: 2,
                    overflow: 'hidden',
                    border: '1px solid',
                    borderColor: 'divider',
                    transition: 'all 0.3s ease',
                    '&:before': {
                      display: 'none'
                    },
                    '&:hover': {
                      borderColor: theme.palette.primary.main,
                      boxShadow: theme.shadows[1]
                    }
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMore color="primary" />}
                    sx={{ 
                      backgroundColor: 'background.default',
                      '& .MuiAccordionSummary-content': {
                        my: { xs: 1, sm: 2 }
                      },
                      '&:hover': {
                        backgroundColor: 'action.hover'
                      }
                    }}
                  >
                    <Typography variant={isMobile ? "body1" : "subtitle1"} sx={{ fontWeight: 600 }}>
                      {item.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ backgroundColor: 'background.paper' }}>
                    <Typography variant="body1" color="text.secondary">
                      {item.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Grow>
            ))}
          </Box>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box 
        sx={{ 
          //background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
          backgroundColor: '#fed7aa', // bg-orange-200 (solid color)
          color: 'Black',
          py: { xs: 6, sm: 8, md: 12 },
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          '&:before': {
            content: '""',
            position: 'absolute',
            top: '-50%',
            left: '-50%',
            width: '200%',
            height: '200%',
            background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
            transform: 'rotate(30deg)',
            zIndex: 1
          }
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Fade in={true} timeout={800}>
            <Typography 
              variant={isMobile ? "h3" : "h2"} 
              gutterBottom 
              sx={{ 
                fontWeight: 800,
                mb: 3,
                px: { xs: 2, sm: 0 },
                textShadow: '0 2px 8px rgba(0,0,0,0.2)'
              }}
            >
              Ready to Transform Your Database Performance?
            </Typography>
          </Fade>
          <Fade in={true} timeout={1000}>
            <Typography 
              variant={isMobile ? "body1" : "h5"} 
              sx={{ 
                mb: { xs: 4, sm: 6 },
                maxWidth: 700,
                mx: 'auto',
                lineHeight: 1.6,
                px: { xs: 2, sm: 0 },
                opacity: 0.9
              }}
            >
              Contact us today for a free initial consultation and database assessment.
            </Typography>
          </Fade>
          <Stack 
            direction={{ xs: 'column', sm: 'row' }} 
            spacing={2} 
            justifyContent="center"
            sx={{ px: { xs: 2, sm: 0 } }}
          >
            <Zoom in={true} timeout={1200}>
              <Button 
                variant="contained" 
                color="secondary" 
                size={isMobile ? "medium" : "large"}
                component={Link}
                to="/contact"
                sx={{ 
                  px: { xs: 4, sm: 6 },
                  py: 1.5,
                  fontSize: isMobile ? '1rem' : '1.1rem',
                  fontWeight: 600,
                  borderRadius: 2,
                  textTransform: 'none',
                  boxShadow: theme.shadows[6],
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: theme.shadows[8],
                    backgroundColor: theme.palette.secondary.dark
                  }
                }}
              >
                Get Started
              </Button>
            </Zoom>
            <Zoom in={true} timeout={1400}>
              <Button 
                variant="outlined" 
                color="inherit" 
                size={isMobile ? "medium" : "large"}
                component={Link}
                to="/about"
                sx={{ 
                  px: { xs: 4, sm: 6 },
                  py: 1.5,
                  fontSize: isMobile ? '1rem' : '1.1rem',
                  fontWeight: 600,
                  borderRadius: 2,
                  textTransform: 'none',
                  borderWidth: 2,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderWidth: 2,
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    transform: 'translateY(-2px)'
                  }
                }}
              >
                Learn About Us
              </Button>
            </Zoom>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

export default Services;