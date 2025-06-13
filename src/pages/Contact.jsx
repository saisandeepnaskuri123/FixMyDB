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
  Chip
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
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will contact you shortly.');
  };

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
            Let's Solve Your Database Challenges
          </Typography>
          <Typography variant="h5" sx={{ mb: 4 }}>
            Our database experts are ready to help you optimize performance, enhance security, 
            and reduce costs.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mt: 4 }}>
            <Chip 
              icon={<Phone />} 
              label="+1 (555) 123-4567" 
              sx={{ 
                background: 'rgba(255,255,255,0.2)',
                color: 'white',
                px: 2,
                fontSize: '1.1rem'
              }} 
            />
            <Chip 
              icon={<Email />} 
              label="contact@fixmydb.com" 
              sx={{ 
                background: 'rgba(255,255,255,0.2)',
                color: 'white',
                px: 2,
                fontSize: '1.1rem'
              }} 
            />
          </Box>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6}>
          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <Typography 
              variant="h3" 
              gutterBottom 
              sx={{ 
                fontWeight: 'bold',
                mb: 4
              }}
            >
              Send Us a Message
            </Typography>
            
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Your Name*"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    variant="outlined"
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
                    rows={4}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl component="fieldset">
                    <Typography gutterBottom>Preferred Contact Method*</Typography>
                    <RadioGroup
                      row
                      name="contactMethod"
                      value={formData.contactMethod}
                      onChange={handleChange}
                    >
                      <FormControlLabel value="email" control={<Radio />} label="Email" />
                      <FormControlLabel value="phone" control={<Radio />} label="Phone" />
                      <FormControlLabel value="whatsapp" control={<Radio />} label="WhatsApp" />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl component="fieldset">
                    <Typography gutterBottom>Urgency Level</Typography>
                    <RadioGroup
                      row
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleChange}
                    >
                      <FormControlLabel 
                        value="standard" 
                        control={<Radio />} 
                        label="Standard (24-48 hr response)" 
                      />
                      <FormControlLabel 
                        value="urgent" 
                        control={<Radio />} 
                        label="Urgent (Same day response)" 
                      />
                      <FormControlLabel 
                        value="emergency" 
                        control={<Radio />} 
                        label="Emergency (2-4 hr response)" 
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    startIcon={<Send />}
                    sx={{
                      py: 1.5,
                      px: 4,
                      fontSize: '1.1rem'
                    }}
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={5}>
            <Card 
              sx={{ 
                height: '100%',
                border: '1px solid',
                borderColor: 'divider',
                boxShadow: 'none'
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Typography 
                  variant="h4" 
                  gutterBottom 
                  sx={{ 
                    fontWeight: 'bold',
                    mb: 4
                  }}
                >
                  Contact Information
                </Typography>

                {/* Contact Methods */}
                <Box sx={{ mb: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Phone color="primary" sx={{ mr: 2, fontSize: '2rem' }} />
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Phone Support</Typography>
                      <Typography>+1 (555) 123-4567</Typography>
                      <Typography color="text.secondary">Mon-Fri, 9am-6pm EST</Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Email color="primary" sx={{ mr: 2, fontSize: '2rem' }} />
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Email Us</Typography>
                      <Typography>contact@fixmydb.com</Typography>
                      <Typography color="text.secondary">Typically respond within 24 hours</Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <WhatsApp color="primary" sx={{ mr: 2, fontSize: '2rem' }} />
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>WhatsApp</Typography>
                      <Typography>+1 (555) 123-4567</Typography>
                      <Typography color="text.secondary">24/7 for urgent issues</Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <LocationOn color="primary" sx={{ mr: 2, fontSize: '2rem' }} />
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Headquarters</Typography>
                      <Typography>123 Database Lane</Typography>
                      <Typography>San Francisco, CA 94107</Typography>
                    </Box>
                  </Box>
                </Box>

                <Divider sx={{ my: 4 }} />

                {/* Emergency Support */}
                <Box sx={{ 
                  p: 3, 
                  bgcolor: 'rgba(244, 67, 54, 0.1)',
                  borderRadius: 2
                }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <SupportAgent color="error" sx={{ mr: 1.5 }} />
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Emergency Support</Typography>
                  </Box>
                  <Typography paragraph sx={{ mb: 2 }}>
                    For critical database outages or security incidents, call our 24/7 emergency line:
                  </Typography>
                  <Button 
                    variant="contained" 
                    color="error"
                    startIcon={<Phone />}
                    fullWidth
                    sx={{ py: 1.5 }}
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
      <Box sx={{ py: 8, bgcolor: 'background.paper' }}>
        <Container>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Box sx={{ 
                height: '100%',
                bgcolor: 'grey.100',
                borderRadius: 2,
                overflow: 'hidden',
                minHeight: 400
              }}>
                {/* Replace with your actual map component or iframe */}
                <Box sx={{ 
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%',
                  color: 'grey.500'
                }}>
                  <Typography>Map would display here</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography 
                variant="h3" 
                gutterBottom 
                sx={{ 
                  fontWeight: 'bold',
                  mb: 4
                }}
              >
                Office Hours & Location
              </Typography>
              <Box sx={{ mb: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Schedule color="primary" sx={{ mr: 2 }} />
                  <Typography variant="h5" sx={{ fontWeight: 'bold' }}>Business Hours</Typography>
                </Box>
                <Box sx={{ pl: 6 }}>
                  <Typography><strong>Monday-Friday:</strong> 9:00 AM - 6:00 PM EST</Typography>
                  <Typography><strong>Saturday:</strong> 10:00 AM - 2:00 PM EST</Typography>
                  <Typography><strong>Sunday:</strong> Closed</Typography>
                </Box>
              </Box>
              <Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <LocationOn color="primary" sx={{ mr: 2 }} />
                  <Typography variant="h5" sx={{ fontWeight: 'bold' }}>Our Office</Typography>
                </Box>
                <Box sx={{ pl: 6 }}>
                  <Typography paragraph>
                    123 Database Lane<br />
                    San Francisco, CA 94107<br />
                    United States
                  </Typography>
                  <Typography paragraph>
                    <strong>Parking:</strong> Available in the adjacent garage
                  </Typography>
                  <Typography>
                    <strong>Public Transit:</strong> 10 minute walk from Montgomery St. BART station
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
          py: 10,
          textAlign: 'center'
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
            Need Immediate Database Help?
          </Typography>
          <Typography variant="h5" sx={{ mb: 4 }}>
            Our certified database administrators are ready to assist you with any urgent issues.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', mt: 4 }}>
            <Button 
              variant="contained" 
              color="secondary" 
              size="large"
              startIcon={<Phone />}
              sx={{ 
                px: 6,
                py: 1.5,
                fontSize: '1.1rem'
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
                borderWidth: '2px',
                '&:hover': {
                  borderWidth: '2px'
                }
              }}
            >
              WhatsApp Chat
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default Contact;