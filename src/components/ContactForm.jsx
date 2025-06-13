import { useState } from 'react';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, Radio, RadioGroup, FormControlLabel } from '@mui/material';

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form className="contact-form">
      <TextField
        label="Name*"
        name="name"
        value={formData.name}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Company Email ID*"
        name="email"
        value={formData.email}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Mobile No.*"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <FormControl fullWidth margin="normal">
        <InputLabel>Select Database*</InputLabel>
        <Select
          name="database"
          value={formData.database}
          onChange={handleChange}
          label="Select Database*"
        >
          <MenuItem value="mysql">MySQL</MenuItem>
          <MenuItem value="postgresql">PostgreSQL</MenuItem>
          <MenuItem value="mongodb">MongoDB</MenuItem>
        </Select>
      </FormControl>
      <TextField
        label="Message*"
        name="message"
        value={formData.message}
        onChange={handleChange}
        multiline
        rows={4}
        fullWidth
        margin="normal"
      />
      <FormControl component="fieldset" margin="normal">
        <RadioGroup
          name="contactMethod"
          value={formData.contactMethod}
          onChange={handleChange}
          row
        >
          <FormControlLabel value="phone" control={<Radio />} label="Phone" />
          <FormControlLabel value="email" control={<Radio />} label="Email" />
          <FormControlLabel value="whatsapp" control={<Radio />} label="WhatsApp" />
        </RadioGroup>
      </FormControl>
      <Button type="submit" variant="contained" color="primary">
        Get a Free Consultation Today!
      </Button>
    </form>
  );
}

export default ContactForm;