import { useState } from 'react';
import { 
  TextField, 
  Button, 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem, 
  Radio, 
  RadioGroup, 
  FormControlLabel,
  Box,
  Typography,
  Alert,
  CircularProgress,
  Grid,
  useTheme,
  useMediaQuery,
  Fade,
  Grow,
  Zoom,
  Paper
} from '@mui/material';
import { Send, Phone, Email, WhatsApp } from '@mui/icons-material';
import { keyframes } from '@emotion/react';

const pulseAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

function ContactForm() {
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
    contactMethod: 'email'
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.database) newErrors.database = 'Please select a database';
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus({ type: 'success', message: 'Thank you! We will contact you shortly.' });
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        database: '',
        message: '',
        contactMethod: 'email'
      });
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Submission failed. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Grow in={true} timeout={800}>
      <Paper 
        component="form" 
        onSubmit={handleSubmit}
        elevation={isMobile ? 0 : 4}
        sx={{ 
          maxWidth: 800,
          mx: 'auto',
          p: isMobile ? 3 : 4,
          borderRadius: 4,
          backgroundColor: 'background.paper',
          backgroundImage: 'linear-gradient(to bottom right, rgba(255,255,255,0.95), rgba(247,250,252,0.95))',
          border: '1px solid rgba(0,0,0,0.08)',
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: isMobile ? 'none' : theme.shadows[6],
            transform: isMobile ? 'none' : 'translateY(-2px)'
          },
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
        <Typography 
          variant={isMobile ? 'h5' : 'h4'} 
          gutterBottom 
          sx={{ 
            fontWeight: 700, 
            mb: 4,
            textAlign: 'center',
            color: theme.palette.text.primary,
            position: 'relative',
            '&:after': {
              content: '""',
              display: 'block',
              width: '60px',
              height: '4px',
              background: theme.palette.primary.main,
              margin: '12px auto 0',
              borderRadius: '2px'
            }
          }}
        >
          Request a Free Consultation
        </Typography>

        {submitStatus && (
          <Zoom in={!!submitStatus}>
            <Alert 
              severity={submitStatus.type} 
              sx={{ 
                mb: 3,
                boxShadow: 1,
                borderRadius: 2
              }}
            >
              {submitStatus.message}
            </Alert>
          </Zoom>
        )}

        <Grid container spacing={isMobile ? 2 : 3}>
          <Grid item xs={12} sm={6}>
            <Fade in={true} timeout={800} style={{ transitionDelay: '100ms' }}>
              <TextField
                label="Full Name*"
                name="name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                size={isMobile ? 'small' : 'medium'}
                error={!!errors.name}
                helperText={errors.name}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'rgba(0,0,0,0.1)',
                      borderRadius: '8px'
                    },
                    '&:hover fieldset': {
                      borderColor: theme.palette.primary.light
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: theme.palette.primary.main,
                      boxShadow: `0 0 0 2px ${theme.palette.primary.light}`
                    }
                  }
                }}
              />
            </Fade>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Fade in={true} timeout={800} style={{ transitionDelay: '200ms' }}>
              <TextField
                label="Company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                fullWidth
                size={isMobile ? 'small' : 'medium'}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'rgba(0,0,0,0.1)',
                      borderRadius: '8px'
                    },
                    '&:hover fieldset': {
                      borderColor: theme.palette.primary.light
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: theme.palette.primary.main,
                      boxShadow: `0 0 0 2px ${theme.palette.primary.light}`
                    }
                  }
                }}
              />
            </Fade>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Fade in={true} timeout={800} style={{ transitionDelay: '300ms' }}>
              <TextField
                label="Email*"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                size={isMobile ? 'small' : 'medium'}
                error={!!errors.email}
                helperText={errors.email}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'rgba(0,0,0,0.1)',
                      borderRadius: '8px'
                    },
                    '&:hover fieldset': {
                      borderColor: theme.palette.primary.light
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: theme.palette.primary.main,
                      boxShadow: `0 0 0 2px ${theme.palette.primary.light}`
                    }
                  }
                }}
              />
            </Fade>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Fade in={true} timeout={800} style={{ transitionDelay: '400ms' }}>
              <TextField
                label="Phone Number*"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                fullWidth
                size={isMobile ? 'small' : 'medium'}
                error={!!errors.phone}
                helperText={errors.phone}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'rgba(0,0,0,0.1)',
                      borderRadius: '8px'
                    },
                    '&:hover fieldset': {
                      borderColor: theme.palette.primary.light
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: theme.palette.primary.main,
                      boxShadow: `0 0 0 2px ${theme.palette.primary.light}`
                    }
                  }
                }}
              />
            </Fade>
          </Grid>
          <Grid item xs={12}>
            <Fade in={true} timeout={800} style={{ transitionDelay: '500ms' }}>
              <FormControl fullWidth error={!!errors.database} size={isMobile ? 'small' : 'medium'}>
                <InputLabel sx={{ 
                  '&.Mui-focused': {
                    color: theme.palette.primary.main
                  }
                }}>
                  Primary Database*
                </InputLabel>
                <Select
                  name="database"
                  value={formData.database}
                  onChange={handleChange}
                  label="Primary Database*"
                  sx={{
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'rgba(0,0,0,0.1)',
                      borderRadius: '8px'
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: theme.palette.primary.light
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: theme.palette.primary.main,
                      boxShadow: `0 0 0 2px ${theme.palette.primary.light}`
                    }
                  }}
                >
                  <MenuItem value="mysql">MySQL</MenuItem>
                  <MenuItem value="postgresql">PostgreSQL</MenuItem>
                  <MenuItem value="mongodb">MongoDB</MenuItem>
                  <MenuItem value="redis">Redis</MenuItem>
                  <MenuItem value="oracle">Oracle</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </Select>
                {errors.database && (
                  <Typography variant="caption" color="error" sx={{ mt: 1, display: 'block' }}>
                    {errors.database}
                  </Typography>
                )}
              </FormControl>
            </Fade>
          </Grid>
          <Grid item xs={12}>
            <Fade in={true} timeout={800} style={{ transitionDelay: '600ms' }}>
              <TextField
                label="How can we help?*"
                name="message"
                value={formData.message}
                onChange={handleChange}
                multiline
                rows={isMobile ? 3 : 4}
                fullWidth
                size={isMobile ? 'small' : 'medium'}
                error={!!errors.message}
                helperText={errors.message}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'rgba(0,0,0,0.1)',
                      borderRadius: '8px'
                    },
                    '&:hover fieldset': {
                      borderColor: theme.palette.primary.light
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: theme.palette.primary.main,
                      boxShadow: `0 0 0 2px ${theme.palette.primary.light}`
                    }
                  }
                }}
              />
            </Fade>
          </Grid>
          <Grid item xs={12}>
            <Fade in={true} timeout={800} style={{ transitionDelay: '700ms' }}>
              <FormControl component="fieldset" fullWidth>
                <Typography 
                  gutterBottom 
                  sx={{ 
                    fontWeight: 500,
                    color: theme.palette.text.secondary
                  }}
                >
                  Preferred Contact Method*
                </Typography>
                <RadioGroup
                  row={!isMobile}
                  name="contactMethod"
                  value={formData.contactMethod}
                  onChange={handleChange}
                  sx={{ gap: isMobile ? 0 : 2 }}
                >
                  <FormControlLabel 
                    value="email" 
                    control={
                      <Radio 
                        size={isMobile ? 'small' : 'medium'} 
                        sx={{
                          color: theme.palette.primary.main,
                          '&.Mui-checked': {
                            color: theme.palette.primary.main
                          }
                        }}
                      />
                    } 
                    label={
                      <Box 
                        sx={{ 
                          display: 'flex', 
                          alignItems: 'center',
                          transition: 'all 0.2s ease',
                          '&:hover': {
                            color: theme.palette.primary.main
                          }
                        }}
                      >
                        <Email sx={{ 
                          mr: 1, 
                          fontSize: isMobile ? '1rem' : '1.25rem',
                          color: formData.contactMethod === 'email' ? 
                            theme.palette.primary.main : 'inherit'
                        }} /> 
                        <Typography 
                          variant={isMobile ? 'body2' : 'body1'} 
                          sx={{
                            color: formData.contactMethod === 'email' ? 
                              theme.palette.primary.main : 'inherit'
                          }}
                        >
                          Email
                        </Typography>
                      </Box>
                    } 
                    sx={{ 
                      mr: isMobile ? 2 : 0,
                      borderRadius: '8px',
                      px: 2,
                      py: 1,
                      backgroundColor: formData.contactMethod === 'email' ? 
                        'rgba(25, 118, 210, 0.08)' : 'transparent',
                      transition: 'all 0.2s ease'
                    }}
                  />
                  <FormControlLabel 
                    value="phone" 
                    control={
                      <Radio 
                        size={isMobile ? 'small' : 'medium'} 
                        sx={{
                          color: theme.palette.primary.main,
                          '&.Mui-checked': {
                            color: theme.palette.primary.main
                          }
                        }}
                      />
                    } 
                    label={
                      <Box 
                        sx={{ 
                          display: 'flex', 
                          alignItems: 'center',
                          transition: 'all 0.2s ease',
                          '&:hover': {
                            color: theme.palette.primary.main
                          }
                        }}
                      >
                        <Phone sx={{ 
                          mr: 1, 
                          fontSize: isMobile ? '1rem' : '1.25rem',
                          color: formData.contactMethod === 'phone' ? 
                            theme.palette.primary.main : 'inherit'
                        }} /> 
                        <Typography 
                          variant={isMobile ? 'body2' : 'body1'} 
                          sx={{
                            color: formData.contactMethod === 'phone' ? 
                              theme.palette.primary.main : 'inherit'
                          }}
                        >
                          Phone
                        </Typography>
                      </Box>
                    } 
                    sx={{ 
                      mr: isMobile ? 2 : 0,
                      borderRadius: '8px',
                      px: 2,
                      py: 1,
                      backgroundColor: formData.contactMethod === 'phone' ? 
                        'rgba(25, 118, 210, 0.08)' : 'transparent',
                      transition: 'all 0.2s ease'
                    }}
                  />
                  <FormControlLabel 
                    value="whatsapp" 
                    control={
                      <Radio 
                        size={isMobile ? 'small' : 'medium'} 
                        sx={{
                          color: theme.palette.primary.main,
                          '&.Mui-checked': {
                            color: theme.palette.primary.main
                          }
                        }}
                      />
                    } 
                    label={
                      <Box 
                        sx={{ 
                          display: 'flex', 
                          alignItems: 'center',
                          transition: 'all 0.2s ease',
                          '&:hover': {
                            color: theme.palette.primary.main
                          }
                        }}
                      >
                        <WhatsApp sx={{ 
                          mr: 1, 
                          fontSize: isMobile ? '1rem' : '1.25rem',
                          color: formData.contactMethod === 'whatsapp' ? 
                            theme.palette.primary.main : 'inherit'
                        }} /> 
                        <Typography 
                          variant={isMobile ? 'body2' : 'body1'} 
                          sx={{
                            color: formData.contactMethod === 'whatsapp' ? 
                              theme.palette.primary.main : 'inherit'
                          }}
                        >
                          WhatsApp
                        </Typography>
                      </Box>
                    } 
                    sx={{ 
                      borderRadius: '8px',
                      px: 2,
                      py: 1,
                      backgroundColor: formData.contactMethod === 'whatsapp' ? 
                        'rgba(25, 118, 210, 0.08)' : 'transparent',
                      transition: 'all 0.2s ease'
                    }}
                  />
                </RadioGroup>
              </FormControl>
            </Fade>
          </Grid>
          <Grid item xs={12}>
            <Fade in={true} timeout={800} style={{ transitionDelay: '800ms' }}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size={isMobile ? 'medium' : 'large'}
                startIcon={isSubmitting ? 
                  <CircularProgress size={20} sx={{ color: 'white' }} /> : 
                  <Send sx={{ transition: 'transform 0.3s ease' }} />
                }
                disabled={isSubmitting}
                fullWidth
                sx={{ 
                  py: isMobile ? 1.5 : 2,
                  fontSize: isMobile ? '0.875rem' : '1rem',
                  borderRadius: '8px',
                  fontWeight: 600,
                  letterSpacing: '0.5px',
                  textTransform: 'none',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 8px rgba(0,0,0,0.15)',
                    animation: `${pulseAnimation} 2s infinite`,
                    '& .MuiSvgIcon-root': {
                      transform: 'translateX(4px)'
                    }
                  },
                  '&:active': {
                    transform: 'translateY(0)'
                  }
                }}
              >
                {isSubmitting ? 'Submitting...' : 'Get Free Consultation'}
              </Button>
            </Fade>
          </Grid>
        </Grid>
      </Paper>
    </Grow>
  );
}

export default ContactForm;