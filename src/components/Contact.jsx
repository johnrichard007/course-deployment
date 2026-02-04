import { useState } from "react";
import { TextField, Button, Paper, Typography, Box, Grid, Alert, Snackbar } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SendIcon from '@mui/icons-material/Send';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    { icon: <EmailIcon />, title: "Email", value: "support@ilearning.com", link: "mailto:support@ilearning.com" },
    { icon: <PhoneIcon />, title: "Phone", value: "+91 2301019019", link: "tel:+912301019019" },
    { icon: <LocationOnIcon />, title: "Address", value: "Chennai, Tamil Nadu, India" },
    { icon: <AccessTimeIcon />, title: "Working Hours", value: "Monday – Friday (9 AM – 6 PM)" }
  ];

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Valid email is required";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error for this field
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ""
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Here you would typically send the data to a backend
      console.log("Form submitted:", formData);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    }
  };

  const handleCloseSnackbar = () => {
    setIsSubmitted(false);
  };

  return (
    <div className="contact-container">
      <div className="page-header">
        <Typography variant="h3" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          We'd love to hear from you. Get in touch with us!
        </Typography>
      </div>

      <Grid container spacing={4} className="contact-content">
        <Grid item xs={12} md={6}>
          <Paper elevation={3} className="contact-form-paper">
            <Typography variant="h5" gutterBottom>
              Send us a Message
            </Typography>
            
            <Box component="form" onSubmit={handleSubmit} noValidate>
              <TextField
                fullWidth
                label="Your Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                error={!!errors.name}
                helperText={errors.name}
                margin="normal"
                required
              />
              
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                error={!!errors.email}
                helperText={errors.email}
                margin="normal"
                required
              />
              
              <TextField
                fullWidth
                label="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                error={!!errors.subject}
                helperText={errors.subject}
                margin="normal"
                required
              />
              
              <TextField
                fullWidth
                label="Your Message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                error={!!errors.message}
                helperText={errors.message}
                margin="normal"
                multiline
                rows={4}
                required
              />
              
              <Button
                type="submit"
                variant="contained"
                color="primary"
                startIcon={<SendIcon />}
                size="large"
                fullWidth
                className="submit-btn"
                sx={{ mt: 2 }}
              >
                Send Message
              </Button>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3} className="contact-info-paper">
            <Typography variant="h5" gutterBottom>
              Contact Information
            </Typography>
            
            <Typography variant="body1" paragraph>
              Thank you for visiting our e-learning platform. We're here to help you with any questions or concerns you may have.
            </Typography>
            
            <div className="contact-info-grid">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-info-item">
                  <div className="contact-icon">
                    {info.icon}
                  </div>
                  <div className="contact-details">
                    <Typography variant="subtitle2" color="textSecondary">
                      {info.title}
                    </Typography>
                    {info.link ? (
                      <a href={info.link} className="contact-link">
                        <Typography variant="body1">
                          {info.value}
                        </Typography>
                      </a>
                    ) : (
                      <Typography variant="body1">
                        {info.value}
                      </Typography>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="map-placeholder">
              <Typography variant="subtitle1" gutterBottom>
                Our Location
              </Typography>
              <div className="map-container">
                {/* You can add Google Maps embed here */}
                <div className="map-frame">
                  <Typography variant="body2" color="textSecondary">
                    Chennai, Tamil Nadu
                  </Typography>
                  <Typography variant="caption">
                    (Map integration available)
                  </Typography>
                </div>
              </div>
            </div>
          </Paper>
        </Grid>
      </Grid>

      <Snackbar
        open={isSubmitted}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          Thank you! Your message has been sent successfully.
        </Alert>
      </Snackbar>
    </div>
  );
};