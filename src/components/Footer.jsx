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
  useMediaQuery,
  Fade,
  Grow,
  Zoom,
  Slide,
  Paper,
  Tooltip
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
import { keyframes } from '@emotion/react';

const pulseAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

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
        backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[900] : theme.palette.background.paper,
        color: 'text.secondary',
        pt: isMobile ? 6 : 10,
        pb: isMobile ? 3 : 4,
        borderTop: `1px solid ${theme.palette.divider}`,
        position: 'relative',
        overflow: 'hidden',
        '&:before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`
        }
      }}
    >
      <Container maxWidth="lg">
        <Grow in={true} timeout={800}>
          <Grid container spacing={isMobile ? 3 : { xs: 4, md: 8 }}>
            {/* Services Column */}
            <Grid item xs={12} sm={6} md={3}>
              <Slide in={true} direction="up" timeout={800}>
                <Box>
                  <Typography 
                    variant={isMobile ? 'subtitle1' : 'h6'} 
                    gutterBottom 
                    sx={{ 
                      fontWeight: 700, 
                      color: 'text.primary',
                      display: 'flex',
                      alignItems: 'center',
                      mb: 2,
                      position: 'relative',
                      '&:after': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        bottom: -8,
                        left: 0,
                        width: '40px',
                        height: '3px',
                        background: theme.palette.primary.main,
                        borderRadius: '2px'
                      }
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
                      <Fade in={true} key={index} timeout={800} style={{ transitionDelay: `${index * 100}ms` }}>
                        <ListItem 
                          disableGutters 
                          disablePadding 
                          sx={{ 
                            py: 0.5,
                            '&:hover': {
                              '& .MuiListItemText-primary': {
                                color: 'primary.main'
                              },
                              '& .MuiListItemIcon-root': {
                                transform: 'translateX(4px)'
                              }
                            }
                          }}
                        >
                          <ListItemIcon sx={{ 
                            minWidth: isMobile ? 24 : 32,
                            color: 'primary.main',
                            fontSize: '0.75rem',
                            transition: 'transform 0.2s ease'
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
                      </Fade>
                    ))}
                  </List>
                </Box>
              </Slide>
            </Grid>

            {/* Resources Column */}
            <Grid item xs={12} sm={6} md={3}>
              <Slide in={true} direction="up" timeout={800} style={{ transitionDelay: '100ms' }}>
                <Box>
                  <Typography 
                    variant={isMobile ? 'subtitle1' : 'h6'} 
                    gutterBottom 
                    sx={{ 
                      fontWeight: 700, 
                      color: 'text.primary',
                      display: 'flex',
                      alignItems: 'center',
                      mb: 2,
                      position: 'relative',
                      '&:after': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        bottom: -8,
                        left: 0,
                        width: '40px',
                        height: '3px',
                        background: theme.palette.primary.main,
                        borderRadius: '2px'
                      }
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
                      <Fade in={true} key={index} timeout={800} style={{ transitionDelay: `${index * 100 + 100}ms` }}>
                        <ListItem 
                          disableGutters 
                          disablePadding 
                          sx={{ 
                            py: 0.5,
                            '&:hover': {
                              '& .MuiListItemText-primary': {
                                color: 'primary.main'
                              },
                              '& .MuiListItemIcon-root': {
                                transform: 'translateX(4px)'
                              }
                            }
                          }}
                        >
                          <ListItemIcon sx={{ 
                            minWidth: isMobile ? 24 : 32,
                            color: 'primary.main',
                            fontSize: '0.75rem',
                            transition: 'transform 0.2s ease'
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
                      </Fade>
                    ))}
                  </List>
                </Box>
              </Slide>
            </Grid>

            {/* Company Column */}
            <Grid item xs={12} sm={6} md={3}>
              <Slide in={true} direction="up" timeout={800} style={{ transitionDelay: '200ms' }}>
                <Box>
                  <Typography 
                    variant={isMobile ? 'subtitle1' : 'h6'} 
                    gutterBottom 
                    sx={{ 
                      fontWeight: 700, 
                      color: 'text.primary',
                      display: 'flex',
                      alignItems: 'center',
                      mb: 2,
                      position: 'relative',
                      '&:after': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        bottom: -8,
                        left: 0,
                        width: '40px',
                        height: '3px',
                        background: theme.palette.primary.main,
                        borderRadius: '2px'
                      }
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
                      <Fade in={true} key={index} timeout={800} style={{ transitionDelay: `${index * 100 + 200}ms` }}>
                        <ListItem 
                          disableGutters 
                          disablePadding 
                          sx={{ 
                            py: 0.5,
                            '&:hover': {
                              '& .MuiListItemText-primary': {
                                color: 'primary.main'
                              },
                              '& .MuiListItemIcon-root': {
                                transform: 'translateX(4px)'
                              }
                            }
                          }}
                        >
                          <ListItemIcon sx={{ 
                            minWidth: isMobile ? 24 : 32,
                            color: 'primary.main',
                            fontSize: '0.75rem',
                            transition: 'transform 0.2s ease'
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
                      </Fade>
                    ))}
                  </List>
                </Box>
              </Slide>
            </Grid>

            {/* Contact Column */}
            <Grid item xs={12} sm={6} md={3}>
              <Slide in={true} direction="up" timeout={800} style={{ transitionDelay: '300ms' }}>
                <Box>
                  <Typography 
                    variant={isMobile ? 'subtitle1' : 'h6'} 
                    gutterBottom 
                    sx={{ 
                      fontWeight: 700, 
                      color: 'text.primary',
                      mb: 2,
                      position: 'relative',
                      '&:after': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        bottom: -8,
                        left: 0,
                        width: '40px',
                        height: '3px',
                        background: theme.palette.primary.main,
                        borderRadius: '2px'
                      }
                    }}
                  >
                    Contact Us
                  </Typography>
                  <List dense disablePadding>
                    {contactInfo.map((contact, index) => (
                      <Fade in={true} key={index} timeout={800} style={{ transitionDelay: `${index * 100 + 300}ms` }}>
                        <ListItem 
                          disableGutters 
                          disablePadding 
                          sx={{ 
                            py: 0.5,
                            alignItems: 'flex-start',
                            '&:hover': {
                              '& .MuiListItemIcon-root': {
                                transform: 'scale(1.1)',
                                color: 'primary.main'
                              }
                            }
                          }}
                        >
                          <ListItemIcon sx={{ 
                            minWidth: isMobile ? 24 : 32,
                            color: 'primary.main',
                            mt: '2px',
                            transition: 'all 0.2s ease'
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
                      </Fade>
                    ))}
                  </List>

                  <Box sx={{ mt: 2 }}>
                    <Typography variant="body2" sx={{ fontWeight: 500, mb: 1 }}>
                      Follow Us
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      {socialLinks.map((social, index) => (
                        <Tooltip key={index} title={social.label} arrow>
                          <IconButton
                            href={social.url}
                            aria-label={social.label}
                            size={isMobile ? 'small' : 'medium'}
                            sx={{ 
                              color: 'text.secondary',
                              backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : 'rgba(0,0,0,0.05)',
                              '&:hover': {
                                color: 'primary.main',
                                backgroundColor: 'rgba(25, 118, 210, 0.08)',
                                animation: `${pulseAnimation} 0.5s ease`
                              },
                              transition: 'all 0.2s ease'
                            }}
                          >
                            {social.icon}
                          </IconButton>
                        </Tooltip>
                      ))}
                    </Box>
                  </Box>
                </Box>
              </Slide>
            </Grid>
          </Grid>
        </Grow>

        <Zoom in={true} timeout={800} style={{ transitionDelay: '500ms' }}>
          <Divider sx={{ 
            my: isMobile ? 4 : 6, 
            borderColor: 'divider',
            borderBottomWidth: 1,
            opacity: 0.8
          }} />
        </Zoom>

        <Fade in={true} timeout={800} style={{ transitionDelay: '600ms' }}>
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
                      color: 'primary.main',
                      textDecoration: 'underline'
                    },
                    whiteSpace: 'nowrap'
                  }}
                >
                  {link.text}
                </Link>
              ))}
            </Box>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
}

export default Footer;