import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  TextField, 
  Button, 
  Card, 
  CardContent, 
  Divider,
  useTheme,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Radio,
  RadioGroup,
  FormControlLabel,
  Chip,
  Stack,
  useMediaQuery
} from '@mui/material';
import { 
  Email, 
  Phone, 
  LocationOn, 
  Schedule,
  Send,
  WhatsApp,
  SupportAgent
} from '@mui/icons-material';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import CircularProgress from '@mui/material/CircularProgress';


function Contact() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    database: '',
    message: '',
    contactMethod: 'email',
    urgency: 'standard'
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        database: '',
        message: '',
        contactMethod: 'email',
        urgency: 'standard'
      });
    }, 1500);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | FixMyDB - Database Experts</title>
        <meta name="description" content="Get in touch with our database experts for performance tuning, security hardening, and optimization services." />
      </Helmet>

      <Box sx={{ backgroundColor: 'background.default' }}>
        {/* Hero Section */}
        <Box 
          sx={{ 
            background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
            color: 'white',
            py: { xs: 8, md: 12 },
            textAlign: 'center'
          }}
        >
          <Container maxWidth="md">
            <Typography 
              variant={isMobile ? 'h3' : 'h2'}
              component="h1" 
              gutterBottom 
              sx={{ 
                fontWeight: 800,
                mb: 3,
                px: isMobile ? 2 : 0
              }}
            >
              Let's Solve Your Database Challenges
            </Typography>
            <Typography 
              variant={isMobile ? 'body1' : 'h5'} 
              sx={{ 
                mb: 4, 
                lineHeight: 1.6,
                px: isMobile ? 2 : 0
              }}
            >
              Our database experts are ready to help you optimize performance, enhance security, 
              and reduce costs.
            </Typography>
            <Stack 
              direction={{ xs: 'column', sm: 'row' }} 
              spacing={2} 
              justifyContent="center"
              sx={{ mt: 4 }}
            >
              <Button
                variant="contained"
                color="secondary"
                size={isMobile ? 'medium' : 'large'}
                startIcon={<Phone />}
                href="tel:+917675028957"
                sx={{ 
                  px: { xs: 3, md: 4 },
                  py: 1.5,
                  fontWeight: 600,
                  whiteSpace: 'nowrap'
                }}
              >
                Call Us Now
              </Button>
              <Button
                variant="outlined"
                color="inherit"
                size={isMobile ? 'medium' : 'large'}
                startIcon={<WhatsApp />}
                href="https://wa.me/917675028957"
                target="_blank"
                sx={{ 
                  px: { xs: 3, md: 4 },
                  py: 1.5,
                  fontWeight: 600,
                  whiteSpace: 'nowrap',
                  borderWidth: 2,
                  '&:hover': {
                    borderWidth: 2
                  }
                }}
              >
                WhatsApp Chat
              </Button>
            </Stack>
          </Container>
        </Box>

        {/* Main Content */}
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          <Grid container spacing={{ xs: 4, md: 6 }} alignItems="flex-start">
            {/* Contact Form */}
            <Grid item xs={12} md={7}>
              <Card 
                elevation={3} 
                sx={{ 
                  height: '100%',
                  borderRadius: 4,
                  overflow: 'hidden',
                  border: '1px solid',
                  borderColor: 'divider'
                }}
              >
                <CardContent sx={{ p: { xs: 3, md: 6 } }}>
                  <Typography 
                    variant={isMobile ? 'h4' : 'h3'}
                    gutterBottom 
                    sx={{ 
                      fontWeight: 700,
                      mb: 4,
                      color: 'text.primary'
                    }}
                  >
                    Send Us a Message
                  </Typography>
                  
                  {submitSuccess && (
                    <Box 
                      sx={{ 
                        backgroundColor: 'success.light',
                        color: 'success.dark',
                        p: 2,
                        mb: 3,
                        borderRadius: 1,
                        display: 'flex',
                        alignItems: 'center'
                      }}
                    >
                      <Typography variant="body1">
                        Thank you! Your message has been sent. We'll contact you shortly.
                      </Typography>
                    </Box>
                  )}

                  <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Your Name*"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          error={!!errors.name}
                          helperText={errors.name}
                          variant="outlined"
                          size={isMobile ? 'small' : 'medium'}
                          sx={{ 
                            '& .MuiOutlinedInput-root': {
                              borderRadius: 2
                            }
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Company Name"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          variant="outlined"
                          size={isMobile ? 'small' : 'medium'}
                          sx={{ 
                            '& .MuiOutlinedInput-root': {
                              borderRadius: 2
                            }
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Email Address*"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          error={!!errors.email}
                          helperText={errors.email}
                          required
                          variant="outlined"
                          size={isMobile ? 'small' : 'medium'}
                          sx={{ 
                            '& .MuiOutlinedInput-root': {
                              borderRadius: 2
                            }
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Phone Number"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          variant="outlined"
                          size={isMobile ? 'small' : 'medium'}
                          sx={{ 
                            '& .MuiOutlinedInput-root': {
                              borderRadius: 2
                            }
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <FormControl fullWidth size={isMobile ? 'small' : 'medium'}>
                          <InputLabel>Primary Database*</InputLabel>
                          <Select
                            name="database"
                            value={formData.database}
                            onChange={handleChange}
                            label="Primary Database*"
                            required
                            sx={{ 
                              borderRadius: 2,
                              '& .MuiOutlinedInput-root': {
                                borderRadius: 2
                              }
                            }}
                          >
                            <MenuItem value="mysql">MySQL</MenuItem>
                            <MenuItem value="postgresql">PostgreSQL</MenuItem>
                            <MenuItem value="mongodb">MongoDB</MenuItem>
                            <MenuItem value="redis">Redis</MenuItem>
                            <MenuItem value="oracle">Oracle</MenuItem>
                            <MenuItem value="sqlserver">SQL Server</MenuItem>
                            <MenuItem value="other">Other</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="How can we help?*"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          error={!!errors.message}
                          helperText={errors.message}
                          required
                          multiline
                          rows={isMobile ? 4 : 6}
                          variant="outlined"
                          size={isMobile ? 'small' : 'medium'}
                          sx={{ 
                            '& .MuiOutlinedInput-root': {
                              borderRadius: 2
                            }
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <FormControl component="fieldset" fullWidth>
                          <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
                            Preferred Contact Method*
                          </Typography>
                          <RadioGroup
                            row={!isMobile}
                            name="contactMethod"
                            value={formData.contactMethod}
                            onChange={handleChange}
                            sx={{ gap: isMobile ? 0 : 3 }}
                          >
                            <FormControlLabel 
                              value="email" 
                              control={<Radio color="primary" size={isMobile ? 'small' : 'medium'} />} 
                              label="Email" 
                              sx={{ mr: isMobile ? 2 : 0 }}
                            />
                            <FormControlLabel 
                              value="phone" 
                              control={<Radio color="primary" size={isMobile ? 'small' : 'medium'} />} 
                              label="Phone" 
                              sx={{ mr: isMobile ? 2 : 0 }}
                            />
                            <FormControlLabel 
                              value="whatsapp" 
                              control={<Radio color="primary" size={isMobile ? 'small' : 'medium'} />} 
                              label="WhatsApp" 
                            />
                          </RadioGroup>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12}>
                        <FormControl component="fieldset" fullWidth>
                          <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
                            Urgency Level
                          </Typography>
                          <RadioGroup
                            row={!isMobile}
                            name="urgency"
                            value={formData.urgency}
                            onChange={handleChange}
                            sx={{ gap: isMobile ? 0 : 3 }}
                          >
                            <FormControlLabel 
                              value="standard" 
                              control={<Radio color="primary" size={isMobile ? 'small' : 'medium'} />} 
                              label="Standard (24-48 hr)" 
                              sx={{ mr: isMobile ? 2 : 0 }}
                            />
                            <FormControlLabel 
                              value="urgent" 
                              control={<Radio color="primary" size={isMobile ? 'small' : 'medium'} />} 
                              label="Urgent (Same day)" 
                              sx={{ mr: isMobile ? 2 : 0 }}
                            />
                            <FormControlLabel 
                              value="emergency" 
                              control={<Radio color="primary" size={isMobile ? 'small' : 'medium'} />} 
                              label="Emergency (2-4 hr)" 
                            />
                          </RadioGroup>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} sx={{ pt: 1 }}>
                        <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                          size={isMobile ? 'medium' : 'large'}
                          startIcon={isSubmitting ? <CircularProgress size={20} /> : <Send />}
                          disabled={isSubmitting}
                          fullWidth
                          sx={{
                            py: isMobile ? 1.2 : 1.5,
                            borderRadius: 2,
                            fontSize: isMobile ? '0.875rem' : '1rem',
                            fontWeight: 600,
                            textTransform: 'none',
                            boxShadow: 'none',
                            '&:hover': {
                              boxShadow: 'none',
                              backgroundColor: theme.palette.primary.dark
                            }
                          }}
                        >
                          {isSubmitting ? 'Sending...' : 'Send Message'}
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </CardContent>
              </Card>
            </Grid>

            {/* Contact Info */}
            <Grid item xs={12} md={5}>
              <Card 
                elevation={3}
                sx={{ 
                  height: '100%',
                  borderRadius: 4,
                  overflow: 'hidden',
                  border: '1px solid',
                  borderColor: 'divider'
                }}
              >
                <CardContent sx={{ p: { xs: 3, md: 6 } }}>
                  <Typography 
                    variant={isMobile ? 'h4' : 'h3'}
                    gutterBottom 
                    sx={{ 
                      fontWeight: 700,
                      mb: 5,
                      color: 'text.primary'
                    }}
                  >
                    Contact Information
                  </Typography>

                  {/* Contact Methods */}
                  <Stack spacing={4} sx={{ mb: 6 }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                      <Box sx={{ 
                        backgroundColor: 'primary.light', 
                        borderRadius: '50%', 
                        p: 1.5,
                        mr: 3,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        <Phone color="primary" sx={{ fontSize: isMobile ? '1.5rem' : '1.75rem' }} />
                      </Box>
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>Phone Support</Typography>
                        <Typography variant="body1" sx={{ mb: 0.5 }}>+91 7675028957</Typography>
                        <Typography variant="body2" color="text.secondary">Mon-Fri, 9am-6pm IST</Typography>
                      </Box>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                      <Box sx={{ 
                        backgroundColor: 'primary.light', 
                        borderRadius: '50%', 
                        p: 1.5,
                        mr: 3,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        <Email color="primary" sx={{ fontSize: isMobile ? '1.5rem' : '1.75rem' }} />
                      </Box>
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>Email Us</Typography>
                        <Typography variant="body1" sx={{ mb: 0.5 }}>saisandeepnaskuri2@gmail.com</Typography>
                        <Typography variant="body2" color="text.secondary">Typically respond within 24 hours</Typography>
                      </Box>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                      <Box sx={{ 
                        backgroundColor: 'primary.light', 
                        borderRadius: '50%', 
                        p: 1.5,
                        mr: 3,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        <WhatsApp color="primary" sx={{ fontSize: isMobile ? '1.5rem' : '1.75rem' }} />
                      </Box>
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>WhatsApp</Typography>
                        <Typography variant="body1" sx={{ mb: 0.5 }}>+91 7675028957</Typography>
                        <Typography variant="body2" color="text.secondary">24/7 for urgent issues</Typography>
                      </Box>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                      <Box sx={{ 
                        backgroundColor: 'primary.light', 
                        borderRadius: '50%', 
                        p: 1.5,
                        mr: 3,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        <LocationOn color="primary" sx={{ fontSize: isMobile ? '1.5rem' : '1.75rem' }} />
                      </Box>
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>Headquarters</Typography>
                        <Typography variant="body1" sx={{ mb: 0.5 }}>1-87 Palluru Village</Typography>
                        <Typography variant="body1">Kunavaram Mandal, AP 507121</Typography>
                      </Box>
                    </Box>
                  </Stack>

                  <Divider sx={{ my: 4 }} />

                  {/* Emergency Support */}
                  <Box sx={{ 
                    p: { xs: 3, md: 4 }, 
                    backgroundColor: 'error.light',
                    borderRadius: 3,
                    borderLeft: `4px solid ${theme.palette.error.main}`
                  }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <SupportAgent color="error" sx={{ mr: 2, fontSize: isMobile ? '1.5rem' : '2rem' }} />
                      <Typography variant={isMobile ? 'h5' : 'h5'} sx={{ fontWeight: 700 }}>Emergency Support</Typography>
                    </Box>
                    <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6 }}>
                      For critical database outages or security incidents, call our 24/7 emergency line:
                    </Typography>
                    <Button 
                      variant="contained" 
                      color="error"
                      size={isMobile ? 'medium' : 'large'}
                      startIcon={<Phone />}
                      fullWidth
                      href="tel:+917675028957"
                      sx={{ 
                        py: isMobile ? 1 : 1.5,
                        borderRadius: 2,
                        fontSize: isMobile ? '0.875rem' : '1rem',
                        fontWeight: 600,
                        textTransform: 'none',
                        boxShadow: 'none',
                        '&:hover': {
                          boxShadow: 'none',
                          backgroundColor: theme.palette.error.dark
                        }
                      }}
                    >
                      +91 7675028957
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>

        {/* CTA Section */}
        <Box 
          sx={{ 
            background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
            color: 'white',
            py: { xs: 8, md: 12 },
            textAlign: 'center'
          }}
        >
          <Container maxWidth="md">
            <Typography 
              variant={isMobile ? 'h3' : 'h2'} 
              gutterBottom 
              sx={{ 
                fontWeight: 800, 
                mb: 3,
                px: isMobile ? 2 : 0
              }}
            >
              Need Immediate Database Help?
            </Typography>
            <Typography 
              variant={isMobile ? 'body1' : 'h5'} 
              sx={{ 
                mb: 6, 
                lineHeight: 1.6,
                px: isMobile ? 2 : 0
              }}
            >
              Our certified database administrators are ready to assist you with any urgent issues.
            </Typography>
            <Stack 
              direction={{ xs: 'column', sm: 'row' }} 
              spacing={3} 
              justifyContent="center"
            >
              <Button 
                variant="contained" 
                color="secondary" 
                size={isMobile ? 'medium' : 'large'}
                startIcon={<Phone />}
                href="tel:+917675028957"
                sx={{ 
                  px: { xs: 4, md: 6 },
                  py: 1.5,
                  fontSize: isMobile ? '0.875rem' : '1rem',
                  fontWeight: 600,
                  borderRadius: 2,
                  textTransform: 'none',
                  boxShadow: 'none',
                  '&:hover': {
                    boxShadow: 'none',
                    backgroundColor: theme.palette.secondary.dark
                  }
                }}
              >
                Call Now
              </Button>
              <Button 
                variant="outlined" 
                color="inherit" 
                size={isMobile ? 'medium' : 'large'}
                startIcon={<WhatsApp />}
                href="https://wa.me/917675028957"
                target="_blank"
                sx={{ 
                  px: { xs: 4, md: 6 },
                  py: 1.5,
                  fontSize: isMobile ? '0.875rem' : '1rem',
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
                WhatsApp Chat
              </Button>
            </Stack>
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default Contact;