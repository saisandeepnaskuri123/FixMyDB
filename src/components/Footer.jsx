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
  useTheme,
  useMediaQuery
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
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
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
    { 
      icon: <Phone fontSize={isMobile ? 'small' : 'medium'} />, 
      text: '+91 7675028957', 
      href: 'tel:+917675028957' 
    },
    { 
      icon: <Email fontSize={isMobile ? 'small' : 'medium'} />, 
      text: 'saisandeepnaskuri2@gmail.com', 
      href: 'mailto:saisandeepnaskuri2@gmail.com' 
    },
    { 
      icon: <LocationOn fontSize={isMobile ? 'small' : 'medium'} />, 
      text: '1-87 Palluru Village, Kunavaram Mandal, Alluri Seetha Rama Raju District, AP 507121', 
      href: 'https://maps.google.com/?q=1-87+Palluru+Village+Kunavaram+Mandal+Alluri+Seetha+Rama+Raju+District+AP+507121' 
    }
  ];

  const socialLinks = [
    { icon: <Facebook fontSize={isMobile ? 'small' : 'medium'} />, url: 'https://www.facebook.com/', label: 'Facebook' },
    { icon: <Twitter fontSize={isMobile ? 'small' : 'medium'} />, url: 'https://x.com/', label: 'Twitter' },
    { icon: <LinkedIn fontSize={isMobile ? 'small' : 'medium'} />, url: 'https://www.linkedin.com/in/sai-sandeep-naskuri-388673205/', label: 'LinkedIn' }
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
        pt: isMobile ? 6 : 10,
        pb: isMobile ? 3 : 4,
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={isMobile ? 3 : { xs: 4, md: 8 }}>
          {/* Services Column */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography 
              variant={isMobile ? 'subtitle1' : 'h6'} 
              gutterBottom 
              sx={{ 
                fontWeight: 700, 
                color: 'text.primary',
                display: 'flex',
                alignItems: 'center',
                mb: 2
              }}
            >
              Our Services
              <ArrowForward sx={{ 
                ml: 1, 
                fontSize: isMobile ? 16 : 20, 
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
                    py: 0.5,
                    '&:hover': {
                      '& .MuiListItemText-primary': {
                        color: 'primary.main'
                      }
                    }
                  }}
                >
                  <ListItemIcon sx={{ 
                    minWidth: isMobile ? 24 : 32,
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
                          fontSize: isMobile ? '0.875rem' : '1rem',
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
              variant={isMobile ? 'subtitle1' : 'h6'} 
              gutterBottom 
              sx={{ 
                fontWeight: 700, 
                color: 'text.primary',
                display: 'flex',
                alignItems: 'center',
                mb: 2
              }}
            >
              Resources
              <ArrowForward sx={{ 
                ml: 1, 
                fontSize: isMobile ? 16 : 20, 
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
                    py: 0.5,
                    '&:hover': {
                      '& .MuiListItemText-primary': {
                        color: 'primary.main'
                      }
                    }
                  }}
                >
                  <ListItemIcon sx={{ 
                    minWidth: isMobile ? 24 : 32,
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
                          fontSize: isMobile ? '0.875rem' : '1rem',
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
              variant={isMobile ? 'subtitle1' : 'h6'} 
              gutterBottom 
              sx={{ 
                fontWeight: 700, 
                color: 'text.primary',
                display: 'flex',
                alignItems: 'center',
                mb: 2
              }}
            >
              Company
              <ArrowForward sx={{ 
                ml: 1, 
                fontSize: isMobile ? 16 : 20, 
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
                    py: 0.5,
                    '&:hover': {
                      '& .MuiListItemText-primary': {
                        color: 'primary.main'
                      }
                    }
                  }}
                >
                  <ListItemIcon sx={{ 
                    minWidth: isMobile ? 24 : 32,
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
                          fontSize: isMobile ? '0.875rem' : '1rem',
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
              variant={isMobile ? 'subtitle1' : 'h6'} 
              gutterBottom 
              sx={{ 
                fontWeight: 700, 
                color: 'text.primary',
                mb: 2
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
                    py: 0.5,
                    alignItems: 'flex-start'
                  }}
                >
                  <ListItemIcon sx={{ 
                    minWidth: isMobile ? 24 : 32,
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
                          fontSize: isMobile ? '0.875rem' : '1rem',
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

            <Box sx={{ mt: 2 }}>
              <Typography variant="body2" sx={{ fontWeight: 500, mb: 1 }}>
                Follow Us
              </Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                {socialLinks.map((social, index) => (
                  <IconButton
                    key={index}
                    href={social.url}
                    aria-label={social.label}
                    size={isMobile ? 'small' : 'medium'}
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
          my: isMobile ? 4 : 6, 
          borderColor: 'divider',
        }} />

        <Box sx={{ 
          display: 'flex', 
          flexDirection: isMobile ? 'column-reverse' : 'row', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          gap: 2
        }}>
          <Typography variant="body2" sx={{ 
            color: 'text.disabled',
            fontSize: isMobile ? '0.75rem' : '0.875rem',
            textAlign: isMobile ? 'center' : 'left'
          }}>
            © {currentYear} FixMyDB. All rights reserved.
          </Typography>
          <Box sx={{ 
            display: 'flex', 
            gap: isMobile ? 1.5 : 3,
            flexWrap: 'wrap',
            justifyContent: isMobile ? 'center' : 'flex-end'
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
                  fontSize: isMobile ? '0.75rem' : '0.875rem',
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