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
  Stack
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

function Contact() {
  const theme = useTheme();
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will contact you shortly.');
  };

  return (
    <Box sx={{ backgroundColor: 'background.default' }}>
      {/* Hero Section */}
      <Box 
        sx={{ 
          background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
          color: 'white',
          py: 12,
          textAlign: 'center'
        }}
      >
        <Container maxWidth="md">
          <Typography 
            variant="h2" 
            component="h1" 
            gutterBottom 
            sx={{ 
              fontWeight: 800,
              mb: 3,
              letterSpacing: '0.5px'
            }}
          >
            Let's Solve Your Database Challenges
          </Typography>
          <Typography variant="h5" sx={{ mb: 4, lineHeight: 1.6 }}>
            Our database experts are ready to help you optimize performance, enhance security, 
            and reduce costs.
          </Typography>
          <Stack 
            direction={{ xs: 'column', sm: 'row' }} 
            spacing={2} 
            justifyContent="center"
            sx={{ mt: 4 }}
          >
            <Chip 
              icon={<Phone fontSize="small" />} 
              label="+1 (555) 123-4567" 
              sx={{ 
                backgroundColor: 'rgba(255,255,255,0.15)',
                color: 'white',
                px: 3,
                py: 1.5,
                fontSize: '1rem',
                fontWeight: 500
              }} 
            />
            <Chip 
              icon={<Email fontSize="small" />} 
              label="contact@fixmydb.com" 
              sx={{ 
                backgroundColor: 'rgba(255,255,255,0.15)',
                color: 'white',
                px: 3,
                py: 1.5,
                fontSize: '1rem',
                fontWeight: 500
              }} 
            />
          </Stack>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Grid container spacing={6} alignItems="flex-start">
          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <Card 
              elevation={3} 
              sx={{ 
                height: '100%',
                borderRadius: 4,
                overflow: 'hidden'
              }}
            >
              <CardContent sx={{ p: 6 }}>
                <Typography 
                  variant="h3" 
                  gutterBottom 
                  sx={{ 
                    fontWeight: 700,
                    mb: 4,
                    color: 'text.primary'
                  }}
                >
                  Send Us a Message
                </Typography>
                
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={4}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Your Name*"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        variant="outlined"
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
                        required
                        variant="outlined"
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
                        sx={{ 
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 2
                          }
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl fullWidth>
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
                        required
                        multiline
                        rows={6}
                        variant="outlined"
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
                          row
                          name="contactMethod"
                          value={formData.contactMethod}
                          onChange={handleChange}
                          sx={{ gap: 3 }}
                        >
                          <FormControlLabel 
                            value="email" 
                            control={<Radio color="primary" />} 
                            label="Email" 
                            sx={{ marginRight: 0 }}
                          />
                          <FormControlLabel 
                            value="phone" 
                            control={<Radio color="primary" />} 
                            label="Phone" 
                            sx={{ marginRight: 0 }}
                          />
                          <FormControlLabel 
                            value="whatsapp" 
                            control={<Radio color="primary" />} 
                            label="WhatsApp" 
                            sx={{ marginRight: 0 }}
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
                          row
                          name="urgency"
                          value={formData.urgency}
                          onChange={handleChange}
                          sx={{ gap: 3 }}
                        >
                          <FormControlLabel 
                            value="standard" 
                            control={<Radio color="primary" />} 
                            label="Standard (24-48 hr)" 
                            sx={{ marginRight: 0 }}
                          />
                          <FormControlLabel 
                            value="urgent" 
                            control={<Radio color="primary" />} 
                            label="Urgent (Same day)" 
                            sx={{ marginRight: 0 }}
                          />
                          <FormControlLabel 
                            value="emergency" 
                            control={<Radio color="primary" />} 
                            label="Emergency (2-4 hr)" 
                            sx={{ marginRight: 0 }}
                          />
                        </RadioGroup>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sx={{ pt: 2 }}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        size="large"
                        startIcon={<Send />}
                        fullWidth
                        sx={{
                          py: 2,
                          borderRadius: 2,
                          fontSize: '1.1rem',
                          fontWeight: 600,
                          textTransform: 'none',
                          boxShadow: 'none',
                          '&:hover': {
                            boxShadow: 'none',
                            backgroundColor: theme.palette.primary.dark
                          }
                        }}
                      >
                        Send Message
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
                border: 'none',
                borderRadius: 4,
                overflow: 'hidden'
              }}
            >
              <CardContent sx={{ p: 6 }}>
                <Typography 
                  variant="h3" 
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
                      justifyContent: 'center'
                    }}>
                      <Phone color="primary" sx={{ fontSize: '1.75rem' }} />
                    </Box>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>Phone Support</Typography>
                      <Typography variant="body1" sx={{ mb: 0.5 }}>+1 (555) 123-4567</Typography>
                      <Typography variant="body2" color="text.secondary">Mon-Fri, 9am-6pm EST</Typography>
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
                      justifyContent: 'center'
                    }}>
                      <Email color="primary" sx={{ fontSize: '1.75rem' }} />
                    </Box>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>Email Us</Typography>
                      <Typography variant="body1" sx={{ mb: 0.5 }}>contact@fixmydb.com</Typography>
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
                      justifyContent: 'center'
                    }}>
                      <WhatsApp color="primary" sx={{ fontSize: '1.75rem' }} />
                    </Box>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>WhatsApp</Typography>
                      <Typography variant="body1" sx={{ mb: 0.5 }}>+1 (555) 123-4567</Typography>
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
                      justifyContent: 'center'
                    }}>
                      <LocationOn color="primary" sx={{ fontSize: '1.75rem' }} />
                    </Box>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>Headquarters</Typography>
                      <Typography variant="body1" sx={{ mb: 0.5 }}>123 Database Lane</Typography>
                      <Typography variant="body1">San Francisco, CA 94107</Typography>
                    </Box>
                  </Box>
                </Stack>

                <Divider sx={{ my: 4 }} />

                {/* Emergency Support */}
                <Box sx={{ 
                  p: 4, 
                  backgroundColor: 'error.light',
                  borderRadius: 3,
                  borderLeft: `4px solid ${theme.palette.error.main}`
                }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <SupportAgent color="error" sx={{ mr: 2, fontSize: '2rem' }} />
                    <Typography variant="h5" sx={{ fontWeight: 700 }}>Emergency Support</Typography>
                  </Box>
                  <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6 }}>
                    For critical database outages or security incidents, call our 24/7 emergency line:
                  </Typography>
                  <Button 
                    variant="contained" 
                    color="error"
                    size="large"
                    startIcon={<Phone />}
                    fullWidth
                    sx={{ 
                      py: 1.5,
                      borderRadius: 2,
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      textTransform: 'none',
                      boxShadow: 'none',
                      '&:hover': {
                        boxShadow: 'none',
                        backgroundColor: theme.palette.error.dark
                      }
                    }}
                  >
                    +1 (555) 987-6543
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Map & Office Hours */}
      <Box sx={{ py: 10, backgroundColor: 'background.paper' }}>
        <Container>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ 
                height: '100%',
                minHeight: 400,
                borderRadius: 4,
                overflow: 'hidden',
                boxShadow: 3,
                position: 'relative'
              }}>
                {/* Replace with your actual map component or iframe */}
                <Box sx={{ 
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%',
                  backgroundColor: 'grey.100',
                  color: 'grey.500'
                }}>
                  <Typography variant="h6">Map would display here</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography 
                variant="h3" 
                gutterBottom 
                sx={{ 
                  fontWeight: 700,
                  mb: 5,
                  color: 'text.primary'
                }}
              >
                Office Hours & Location
              </Typography>
              
              <Box sx={{ mb: 6 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Schedule color="primary" sx={{ mr: 2, fontSize: '2rem' }} />
                  <Typography variant="h4" sx={{ fontWeight: 600 }}>Business Hours</Typography>
                </Box>
                <Box sx={{ pl: 8 }}>
                  <Box sx={{ display: 'flex', mb: 1.5 }}>
                    <Typography sx={{ minWidth: 120, fontWeight: 500 }}>Monday-Friday:</Typography>
                    <Typography>9:00 AM - 6:00 PM EST</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', mb: 1.5 }}>
                    <Typography sx={{ minWidth: 120, fontWeight: 500 }}>Saturday:</Typography>
                    <Typography>10:00 AM - 2:00 PM EST</Typography>
                  </Box>
                  <Box sx={{ display: 'flex' }}>
                    <Typography sx={{ minWidth: 120, fontWeight: 500 }}>Sunday:</Typography>
                    <Typography>Closed</Typography>
                  </Box>
                </Box>
              </Box>
              
              <Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <LocationOn color="primary" sx={{ mr: 2, fontSize: '2rem' }} />
                  <Typography variant="h4" sx={{ fontWeight: 600 }}>Our Office</Typography>
                </Box>
                <Box sx={{ pl: 8 }}>
                  <Typography variant="body1" paragraph sx={{ mb: 1.5 }}>
                    123 Database Lane<br />
                    San Francisco, CA 94107<br />
                    United States
                  </Typography>
                  <Typography variant="body1" paragraph sx={{ mb: 1.5 }}>
                    <Box component="span" sx={{ fontWeight: 500 }}>Parking:</Box> Available in the adjacent garage
                  </Typography>
                  <Typography variant="body1">
                    <Box component="span" sx={{ fontWeight: 500 }}>Public Transit:</Box> 10 minute walk from Montgomery St. BART station
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box 
        sx={{ 
          background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
          color: 'white',
          py: 12,
          textAlign: 'center'
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h2" gutterBottom sx={{ fontWeight: 800, mb: 3 }}>
            Need Immediate Database Help?
          </Typography>
          <Typography variant="h5" sx={{ mb: 6, lineHeight: 1.6 }}>
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
              size="large"
              startIcon={<Phone />}
              sx={{ 
                px: 6,
                py: 1.5,
                fontSize: '1.1rem',
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
              size="large"
              startIcon={<WhatsApp />}
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
              WhatsApp Chat
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

export default Contact;