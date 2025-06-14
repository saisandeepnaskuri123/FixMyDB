import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  Link, 
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  useTheme
} from '@mui/material';
import { 
  Facebook, 
  Twitter, 
  LinkedIn,
  Email,
  Phone,
  LocationOn,
  ArrowForward
} from '@mui/icons-material';

function Footer() {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();
  
  const services = [
    'Database Performance Tuning',
    'Security Hardening',
    '24/7 Monitoring',
    'Cloud Optimization',
    'Migration Services',
    'Emergency Support'
  ];

  const resources = [
    'Technical Blog',
    'Webinars & Events',
    'Case Studies',
    'Documentation',
    'Community Forum'
  ];

  const companyLinks = [
    'About Our Team',
    'Client Success Stories',
    'Careers',
    'Press Center',
    'Contact Us'
  ];

  const contactInfo = [
    { icon: <Phone fontSize="small" />, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: <Email fontSize="small" />, text: 'contact@fixmydb.com', href: 'mailto:contact@fixmydb.com' },
    { icon: <LocationOn fontSize="small" />, text: '123 Database Lane, San Francisco, CA', href: 'https://maps.google.com' }
  ];

  const socialLinks = [
    { icon: <Facebook />, url: '#', label: 'Facebook' },
    { icon: <Twitter />, url: '#', label: 'Twitter' },
    { icon: <LinkedIn />, url: '#', label: 'LinkedIn' }
  ];

  const legalLinks = [
    { text: 'Privacy Policy', url: '#' },
    { text: 'Terms of Service', url: '#' },
    { text: 'Cookie Policy', url: '#' },
    { text: 'GDPR Compliance', url: '#' }
  ];

  return (
    <Box 
      component="footer" 
      sx={{ 
        backgroundColor: 'background.paper',
        color: 'text.secondary',
        pt: 10,
        pb: 4,
        borderTop: `1px solid ${theme.palette.divider}`,
        [theme.breakpoints.up('md')]: {
          pt: 12
        }
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 8 }}>
          {/* Services Column */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography 
              variant="h6" 
              gutterBottom 
              sx={{ 
                fontWeight: 700, 
                color: 'text.primary',
                display: 'flex',
                alignItems: 'center',
                mb: 3
              }}
            >
              Our Services
              <ArrowForward sx={{ 
                ml: 1, 
                fontSize: 20, 
                color: 'primary.main',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'translateX(4px)'
                }
              }} />
            </Typography>
            <List dense disablePadding>
              {services.map((service, index) => (
                <ListItem 
                  key={index} 
                  disableGutters 
                  disablePadding 
                  sx={{ 
                    py: 0.75,
                    '&:hover': {
                      '& .MuiListItemText-primary': {
                        color: 'primary.main'
                      }
                    }
                  }}
                >
                  <ListItemIcon sx={{ 
                    minWidth: 32,
                    color: 'primary.main',
                    fontSize: '0.75rem'
                  }}>
                    ›
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Link 
                        href="#" 
                        underline="none" 
                        color="inherit"
                        sx={{
                          fontWeight: 500,
                          transition: 'all 0.2s ease',
                          '&:hover': {
                            color: 'primary.main',
                            transform: 'translateX(4px)'
                          }
                        }}
                      >
                        {service}
                      </Link>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Grid>

          {/* Resources Column */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography 
              variant="h6" 
              gutterBottom 
              sx={{ 
                fontWeight: 700, 
                color: 'text.primary',
                display: 'flex',
                alignItems: 'center',
                mb: 3
              }}
            >
              Resources
              <ArrowForward sx={{ 
                ml: 1, 
                fontSize: 20, 
                color: 'primary.main',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'translateX(4px)'
                }
              }} />
            </Typography>
            <List dense disablePadding>
              {resources.map((resource, index) => (
                <ListItem 
                  key={index} 
                  disableGutters 
                  disablePadding 
                  sx={{ 
                    py: 0.75,
                    '&:hover': {
                      '& .MuiListItemText-primary': {
                        color: 'primary.main'
                      }
                    }
                  }}
                >
                  <ListItemIcon sx={{ 
                    minWidth: 32,
                    color: 'primary.main',
                    fontSize: '0.75rem'
                  }}>
                    ›
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Link 
                        href="#" 
                        underline="none" 
                        color="inherit"
                        sx={{
                          fontWeight: 500,
                          transition: 'all 0.2s ease',
                          '&:hover': {
                            color: 'primary.main',
                            transform: 'translateX(4px)'
                          }
                        }}
                      >
                        {resource}
                      </Link>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Grid>

          {/* Company Column */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography 
              variant="h6" 
              gutterBottom 
              sx={{ 
                fontWeight: 700, 
                color: 'text.primary',
                display: 'flex',
                alignItems: 'center',
                mb: 3
              }}
            >
              Company
              <ArrowForward sx={{ 
                ml: 1, 
                fontSize: 20, 
                color: 'primary.main',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'translateX(4px)'
                }
              }} />
            </Typography>
            <List dense disablePadding>
              {companyLinks.map((item, index) => (
                <ListItem 
                  key={index} 
                  disableGutters 
                  disablePadding 
                  sx={{ 
                    py: 0.75,
                    '&:hover': {
                      '& .MuiListItemText-primary': {
                        color: 'primary.main'
                      }
                    }
                  }}
                >
                  <ListItemIcon sx={{ 
                    minWidth: 32,
                    color: 'primary.main',
                    fontSize: '0.75rem'
                  }}>
                    ›
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Link 
                        href="#" 
                        underline="none" 
                        color="inherit"
                        sx={{
                          fontWeight: 500,
                          transition: 'all 0.2s ease',
                          '&:hover': {
                            color: 'primary.main',
                            transform: 'translateX(4px)'
                          }
                        }}
                      >
                        {item}
                      </Link>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Grid>

          {/* Contact Column */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography 
              variant="h6" 
              gutterBottom 
              sx={{ 
                fontWeight: 700, 
                color: 'text.primary',
                mb: 3
              }}
            >
              Contact Us
            </Typography>
            <List dense disablePadding>
              {contactInfo.map((contact, index) => (
                <ListItem 
                  key={index} 
                  disableGutters 
                  disablePadding 
                  sx={{ 
                    py: 0.75,
                    alignItems: 'flex-start'
                  }}
                >
                  <ListItemIcon sx={{ 
                    minWidth: 32,
                    color: 'primary.main',
                    mt: '2px'
                  }}>
                    {contact.icon}
                  </ListItemIcon>
                  <ListItemText 
                    primary={
                      <Link 
                        href={contact.href} 
                        underline="hover" 
                        color="inherit"
                        sx={{
                          fontWeight: 500,
                          transition: 'color 0.2s ease',
                          '&:hover': {
                            color: 'primary.main'
                          }
                        }}
                      >
                        {contact.text}
                      </Link>
                    } 
                    primaryTypographyProps={{ 
                      sx: { 
                        lineHeight: 1.4 
                      } 
                    }}
                  />
                </ListItem>
              ))}
            </List>

            <Box sx={{ mt: 3 }}>
              <Typography variant="body2" sx={{ fontWeight: 500, mb: 1.5 }}>
                Follow Us
              </Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                {socialLinks.map((social, index) => (
                  <IconButton
                    key={index}
                    href={social.url}
                    aria-label={social.label}
                    sx={{ 
                      color: 'text.secondary',
                      backgroundColor: 'action.hover',
                      '&:hover': {
                        color: 'primary.main',
                        backgroundColor: 'rgba(25, 118, 210, 0.08)'
                      },
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {social.icon}
                  </IconButton>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ 
          my: 6, 
          borderColor: 'divider',
          [theme.breakpoints.up('md')]: {
            my: 8
          }
        }} />

        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column-reverse', md: 'row' }, 
          justifyContent: 'space-between', 
          alignItems: 'center',
          gap: 2
        }}>
          <Typography variant="body2" sx={{ 
            color: 'text.disabled',
            textAlign: { xs: 'center', md: 'left' }
          }}>
            © {currentYear} FixMyDB. All rights reserved.
          </Typography>
          <Box sx={{ 
            display: 'flex', 
            gap: 3,
            flexWrap: 'wrap',
            justifyContent: { xs: 'center', md: 'flex-end' }
          }}>
            {legalLinks.map((link, index) => (
              <Link 
                key={index}
                href={link.url}
                variant="body2"
                underline="hover"
                sx={{ 
                  color: 'text.secondary',
                  fontWeight: 500,
                  '&:hover': {
                    color: 'primary.main'
                  },
                  whiteSpace: 'nowrap'
                }}
              >
                {link.text}
              </Link>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;