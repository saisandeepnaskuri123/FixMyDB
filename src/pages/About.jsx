import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  Avatar, 
  useTheme, 
  Fade, 
  Chip,
  Button  // Added Button import
} from '@mui/material';
import { 
  Speed as PerformanceIcon,
  Security as SecurityIcon,
  Settings as MaintenanceIcon,
  SupportAgent as SupportIcon,
  Groups as TeamIcon,
  Email as EmailIcon,
  Phone as PhoneIcon
} from '@mui/icons-material';
import { useState } from 'react';

const teamMembers = [
  {
    name: 'Madhu Kumar',
    role: 'Founder & Lead DBA',
    bio: '15+ years of database expertise with specialization in MySQL optimization',
    avatar: '/avatars/madhu.jpg',
    expertise: ['MySQL', 'Performance', 'Architecture']
  },
  {
    name: 'Rajesh Kumar',
    role: 'Senior PostgreSQL Architect',
    bio: 'Database scaling specialist with deep knowledge of distributed systems',
    avatar: '/avatars/rajesh.jpg',
    expertise: ['PostgreSQL', 'Scaling', 'Distributed Systems']
  },
  {
    name: 'Priya Sharma',
    role: 'Database Security Expert',
    bio: 'Security certification specialist focused on compliance and hardening',
    avatar: '/avatars/priya.jpg',
    expertise: ['Security', 'Compliance', 'Encryption']
  }
];

const stats = [
  { value: '200+', label: 'Satisfied Clients' },
  { value: '70%', label: 'Performance Improvement' },
  { value: '24/7', label: 'Support Availability' },
  { value: '40%', label: 'Cost Reduction' }
];

function About() {
  const theme = useTheme();
  const [visible, setVisible] = useState(false);

  return (
    <Box 
      sx={{ 
        backgroundColor: 'background.paper',
        pt: 8,
        pb: 10
      }}
      onMouseEnter={() => setVisible(true)}
    >
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Fade in={visible} timeout={500}>
          <Box textAlign="center" mb={8}>
            <Typography 
              variant="h2" 
              gutterBottom 
              sx={{ 
                fontWeight: 800,
                color: 'primary.main',
                mb: 3
              }}
            >
              About FixMyDB
            </Typography>
            <Typography 
              variant="h5" 
              color="text.secondary"
              sx={{
                maxWidth: 800,
                mx: 'auto',
                lineHeight: 1.6
              }}
            >
              Database performance experts saving businesses millions in infrastructure costs through optimized solutions
            </Typography>
          </Box>
        </Fade>

        {/* Stats Section */}
        <Fade in={visible} timeout={800}>
          <Box sx={{ 
            backgroundColor: theme.palette.mode === 'light' 
              ? 'rgba(25, 118, 210, 0.05)' 
              : 'rgba(25, 118, 210, 0.1)',
            py: 6,
            borderRadius: 4,
            mb: 8
          }}>
            <Grid container spacing={4} justifyContent="center">
              {stats.map((stat, index) => (
                <Grid item xs={6} sm={3} key={index}>
                  <Box textAlign="center">
                    <Typography 
                      variant="h2" 
                      color="primary" 
                      fontWeight="bold"
                      sx={{ mb: 1 }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography variant="h6">{stat.label}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Fade>

        {/* Company Story */}
        <Fade in={visible} timeout={1000}>
          <Grid container spacing={6} mb={10} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography 
                variant="h3" 
                gutterBottom 
                sx={{ 
                  fontWeight: 700,
                  mb: 3
                }}
              >
                Our Mission
              </Typography>
              <Typography paragraph variant="h6" sx={{ mb: 3 }}>
                To make database management painless, secure, and cost-effective for growing businesses.
              </Typography>
              <Typography paragraph sx={{ mb: 2 }}>
                Founded in 2018, FixMyDB emerged from seeing companies struggle with poorly optimized databases 
                that drained resources and slowed growth. We've since helped over 200 clients achieve 
                40-70% performance improvements.
              </Typography>
              <Typography paragraph>
                Our team combines decades of hands-on experience with the latest database technologies 
                to deliver solutions that just work.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  borderRadius: 4,
                  overflow: 'hidden',
                  boxShadow: theme.shadows[6],
                  position: 'relative',
                  '&:hover img': {
                    transform: 'scale(1.03)'
                  }
                }}
              >
                <img 
                  src="/images/db-team.jpg" 
                  alt="FixMyDB team working"
                  style={{ 
                    width: '100%',
                    display: 'block',
                    transition: 'transform 0.5s ease'
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Fade>

        {/* Value Propositions */}
        <Fade in={visible} timeout={1200}>
          <Box mb={10}>
            <Typography 
              variant="h3" 
              align="center" 
              gutterBottom 
              sx={{ 
                fontWeight: 700,
                mb: 6
              }}
            >
              Why Choose FixMyDB
            </Typography>
            <Grid container spacing={4}>
              {[
                { 
                  icon: <PerformanceIcon sx={{ fontSize: 50 }} />,
                  title: "Performance First",
                  text: "We optimize queries and infrastructure for maximum throughput",
                  color: 'primary'
                },
                { 
                  icon: <SecurityIcon sx={{ fontSize: 50 }} />,
                  title: "Security Focused",
                  text: "Enterprise-grade security protocols for your sensitive data",
                  color: 'error'
                },
                { 
                  icon: <MaintenanceIcon sx={{ fontSize: 50 }} />,
                  title: "Proactive Maintenance",
                  text: "24/7 monitoring prevents issues before they impact your business",
                  color: 'warning'
                },
                { 
                  icon: <SupportIcon sx={{ fontSize: 50 }} />,
                  title: "Expert Support",
                  text: "Direct access to senior database engineers, not junior staff",
                  color: 'success'
                }
              ].map((item, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Box 
                    textAlign="center" 
                    p={4} 
                    sx={{
                      height: '100%',
                      border: '1px solid',
                      borderColor: 'divider',
                      borderRadius: 2,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: theme.shadows[4],
                        borderColor: theme.palette[item.color].main,
                        backgroundColor: theme.palette.mode === 'light'
                          ? `${theme.palette[item.color].light}10`
                          : `${theme.palette[item.color].dark}10`
                      }
                    }}
                  >
                    <Box sx={{ 
                      color: `${item.color}.main`,
                      mb: 2
                    }}>
                      {item.icon}
                    </Box>
                    <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {item.text}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Fade>

        {/* Team Section */}
        <Fade in={visible} timeout={1400}>
          <Box>
            <Typography 
              variant="h3" 
              align="center" 
              gutterBottom 
              sx={{ 
                fontWeight: 700,
                mb: 6,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <TeamIcon sx={{ mr: 2, fontSize: 40 }} />
              Meet Our Core Team
            </Typography>
            <Grid container spacing={4}>
              {teamMembers.map((member, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Box 
                    textAlign="center" 
                    p={4}
                    sx={{
                      border: '1px solid',
                      borderColor: 'divider',
                      borderRadius: 2,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: theme.shadows[4],
                        borderColor: 'primary.main'
                      }
                    }}
                  >
                    <Avatar 
                      src={member.avatar} 
                      sx={{ 
                        width: 160, 
                        height: 160, 
                        mx: 'auto',
                        mb: 3,
                        border: '3px solid',
                        borderColor: 'primary.main'
                      }} 
                    />
                    <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
                      {member.name}
                    </Typography>
                    <Typography 
                      color="primary" 
                      variant="h6" 
                      sx={{ 
                        mb: 2,
                        fontWeight: 500
                      }}
                    >
                      {member.role}
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3 }}>
                      {member.bio}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center', flexWrap: 'wrap' }}>
                      {member.expertise.map((skill, i) => (
                        <Chip 
                          key={i}
                          label={skill}
                          size="small"
                          sx={{
                            backgroundColor: 'primary.light',
                            color: 'primary.contrastText'
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Fade>

        {/* Contact CTA */}
        <Fade in={visible} timeout={1600}>
          <Box 
            sx={{ 
              mt: 10,
              p: 6,
              borderRadius: 4,
              backgroundColor: 'primary.main',
              color: 'primary.contrastText',
              textAlign: 'center'
            }}
          >
            <Typography variant="h3" gutterBottom sx={{ fontWeight: 700, mb: 3 }}>
              Ready to Optimize Your Database?
            </Typography>
            <Typography variant="h5" sx={{ mb: 4, maxWidth: 700, mx: 'auto' }}>
              Our experts are ready to analyze your database and provide customized solutions.
            </Typography>
            <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center' }}>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                startIcon={<PhoneIcon />}
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 600
                }}
              >
                Call Us Now
              </Button>
              <Button
                variant="outlined"
                color="inherit"
                size="large"
                startIcon={<EmailIcon />}
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  borderWidth: 2,
                  '&:hover': {
                    borderWidth: 2,
                    backgroundColor: 'rgba(255,255,255,0.1)'
                  }
                }}
              >
                Email Us
              </Button>
            </Box>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
}

export default About;