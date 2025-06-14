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
  CircularProgress
} from '@mui/material';
import { Send, Phone, Email, WhatsApp } from '@mui/icons-material';

function ContactForm() {
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
    // Clear error when user starts typing
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
      // Replace with your actual submission logic
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
    <Box 
      component="form" 
      onSubmit={handleSubmit}
      sx={{ 
        maxWidth: 800,
        mx: 'auto',
        p: 3,
        boxShadow: 1,
        borderRadius: 2
      }}
    >
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
        Request a Free Consultation
      </Typography>

      {submitStatus && (
        <Alert severity={submitStatus.type} sx={{ mb: 3 }}>
          {submitStatus.message}
        </Alert>
      )}

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Full Name*"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            error={!!errors.name}
            helperText={errors.name}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Email*"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            error={!!errors.email}
            helperText={errors.email}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Phone Number*"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            fullWidth
            error={!!errors.phone}
            helperText={errors.phone}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth error={!!errors.database}>
            <InputLabel>Primary Database*</InputLabel>
            <Select
              name="database"
              value={formData.database}
              onChange={handleChange}
              label="Primary Database*"
            >
              <MenuItem value="mysql">MySQL</MenuItem>
              <MenuItem value="postgresql">PostgreSQL</MenuItem>
              <MenuItem value="mongodb">MongoDB</MenuItem>
              <MenuItem value="redis">Redis</MenuItem>
              <MenuItem value="oracle">Oracle</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
            {errors.database && (
              <Typography variant="caption" color="error">
                {errors.database}
              </Typography>
            )}
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="How can we help?*"
            name="message"
            value={formData.message}
            onChange={handleChange}
            multiline
            rows={4}
            fullWidth
            error={!!errors.message}
            helperText={errors.message}
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
              sx={{ gap: 2 }}
            >
              <FormControlLabel 
                value="email" 
                control={<Radio />} 
                label={
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Email sx={{ mr: 1 }} /> Email
                  </Box>
                } 
              />
              <FormControlLabel 
                value="phone" 
                control={<Radio />} 
                label={
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Phone sx={{ mr: 1 }} /> Phone
                  </Box>
                } 
              />
              <FormControlLabel 
                value="whatsapp" 
                control={<Radio />} 
                label={
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <WhatsApp sx={{ mr: 1 }} /> WhatsApp
                  </Box>
                } 
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
            startIcon={isSubmitting ? <CircularProgress size={20} /> : <Send />}
            disabled={isSubmitting}
            fullWidth
            sx={{ py: 1.5 }}
          >
            {isSubmitting ? 'Submitting...' : 'Get Free Consultation'}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ContactForm;