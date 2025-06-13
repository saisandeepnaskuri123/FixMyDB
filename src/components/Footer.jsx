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
  ListItemText
} from '@mui/material';
import { 
  Facebook, 
  Twitter, 
  LinkedIn,
  Email,
  Phone,
  LocationOn
} from '@mui/icons-material';

function Footer() {
  return (
    <Box 
      component="footer" 
      sx={{ 
        backgroundColor: 'background.paper',
        color: 'text.secondary',
        pt: 8,
        pb: 4,
        borderTop: '1px solid',
        borderColor: 'divider'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {/* Services Column */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: 'text.primary' }}>
              Services
            </Typography>
            <List dense>
              {[
                'Managed Services',
                'Consulting',
                'Performance & Security Audit',
                'Remote DBA',
                'Cloud Cost Optimization',
                'Database Proxies'
              ].map((service) => (
                <ListItem key={service} disableGutters>
                  <Link 
                    href="#" 
                    underline="hover" 
                    color="inherit"
                    sx={{
                      '&:hover': {
                        color: 'primary.main'
                      }
                    }}
                  >
                    {service}
                  </Link>
                </ListItem>
              ))}
            </List>
          </Grid>

          {/* Resources Column */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: 'text.primary' }}>
              Resources
            </Typography>
            <List dense>
              {[
                'Blogs',
                'Webinars',
                'Case Studies',
                'Podcasts',
                'Meetups'
              ].map((resource) => (
                <ListItem key={resource} disableGutters>
                  <Link 
                    href="#" 
                    underline="hover" 
                    color="inherit"
                    sx={{
                      '&:hover': {
                        color: 'primary.main'
                      }
                    }}
                  >
                    {resource}
                  </Link>
                </ListItem>
              ))}
            </List>
          </Grid>

          {/* Company Column */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: 'text.primary' }}>
              Company
            </Typography>
            <List dense>
              {[
                'About Us',
                'Contact Us',
                'Careers',
                'Privacy Policy',
                'Terms & Conditions'
              ].map((item) => (
                <ListItem key={item} disableGutters>
                  <Link 
                    href="#" 
                    underline="hover" 
                    color="inherit"
                    sx={{
                      '&:hover': {
                        color: 'primary.main'
                      }
                    }}
                  >
                    {item}
                  </Link>
                </ListItem>
              ))}
            </List>
          </Grid>

          {/* Contact Column */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: 'text.primary' }}>
              Contact Us
            </Typography>
            <List dense>
              <ListItem disableGutters>
                <ListItemIcon sx={{ minWidth: 36, color: 'primary.main' }}>
                  <Phone fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="+1 (555) 123-4567" />
              </ListItem>
              <ListItem disableGutters>
                <ListItemIcon sx={{ minWidth: 36, color: 'primary.main' }}>
                  <Email fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="contact@fixmydb.com" />
              </ListItem>
              <ListItem disableGutters>
                <ListItemIcon sx={{ minWidth: 36, color: 'primary.main' }}>
                  <LocationOn fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="123 Database Lane, San Francisco, CA" />
              </ListItem>
            </List>

            <Box sx={{ mt: 2, display: 'flex', gap: 2 }}>
              <Link href="#" color="inherit">
                <Facebook />
              </Link>
              <Link href="#" color="inherit">
                <Twitter />
              </Link>
              <Link href="#" color="inherit">
                <LinkedIn />
              </Link>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', sm: 'row' }, 
          justifyContent: 'space-between', 
          alignItems: 'center'
        }}>
          <Typography variant="body2">
            © {new Date().getFullYear()} FixMyDB. All Rights Reserved.
          </Typography>
          <Box sx={{ mt: { xs: 2, sm: 0 } }}>
            <Link href="#" variant="body2" underline="hover" sx={{ mr: 2 }}>
              Privacy Policy
            </Link>
            <Link href="#" variant="body2" underline="hover" sx={{ mr: 2 }}>
              Terms & Conditions
            </Link>
            <Link href="#" variant="body2" underline="hover">
              Sitemap
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;