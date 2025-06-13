import { Container, Typography, Box, Grid, Avatar } from '@mui/material';
import { 
  Storage, 
  Security, 
  Settings, 
  SupportAgent, 
  Groups, 
  Speed 
} from '@mui/icons-material';

const teamMembers = [
  {
    name: 'Madhu Kumar',
    role: 'Founder & Lead DBA',
    bio: '15+ years of database expertise with specialization in MySQL optimization',
    avatar: '/avatars/madhu.jpg'
  },
  {
    name: 'Rajesh Kumar',
    role: 'Senior PostgreSQL Architect',
    bio: 'Database scaling specialist with deep knowledge of distributed systems',
    avatar: '/avatars/rajesh.jpg'
  },
  {
    name: 'Priya Sharma',
    role: 'Database Security Expert',
    bio: 'Security certification specialist focused on compliance and hardening',
    avatar: '/avatars/priya.jpg'
  }
];

function About() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Hero Section */}
      <Box textAlign="center" mb={8}>
        <Typography variant="h2" gutterBottom sx={{ 
          fontWeight: 'bold',
          color: 'primary.main'
        }}>
          About FixMyDB
        </Typography>
        <Typography variant="h5" color="text.secondary">
          Database performance experts saving businesses millions in infrastructure costs
        </Typography>
      </Box>

      {/* Company Story */}
      <Grid container spacing={6} mb={8}>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" gutterBottom sx={{ fontWeight: 'medium' }}>
            Our Mission
          </Typography>
          <Typography paragraph variant="h6">
            To make database management painless, secure, and cost-effective for growing businesses.
          </Typography>
          <Typography paragraph>
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
          <img 
            src="/images/db-team.jpg" 
            alt="FixMyDB team working"
            style={{ 
              width: '100%', 
              borderRadius: '16px',
              boxShadow: '0 8px 20px rgba(0,0,0,0.1)'
            }}
          />
        </Grid>
      </Grid>

      {/* Value Propositions */}
      <Box mb={8}>
        <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 'medium' }}>
          Why FixMyDB Stands Out
        </Typography>
        <Grid container spacing={4} mt={4}>
          {[
            { 
              icon: <Speed fontSize="large" color="primary" sx={{ fontSize: 50 }} />,
              title: "Performance First",
              text: "We optimize queries and infrastructure for maximum throughput"
            },
            { 
              icon: <Security fontSize="large" color="primary" sx={{ fontSize: 50 }} />,
              title: "Security Focused",
              text: "Enterprise-grade security protocols for your sensitive data"
            },
            { 
              icon: <Settings fontSize="large" color="primary" sx={{ fontSize: 50 }} />,
              title: "Proactive Maintenance",
              text: "24/7 monitoring prevents issues before they impact your business"
            },
            { 
              icon: <SupportAgent fontSize="large" color="primary" sx={{ fontSize: 50 }} />,
              title: "Expert Support",
              text: "Direct access to senior database engineers, not junior staff"
            }
          ].map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box textAlign="center" p={3} sx={{
                height: '100%',
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: '8px',
                '&:hover': {
                  boxShadow: '0 8px 15px rgba(0,0,0,0.1)'
                }
              }}>
                {item.icon}
                <Typography variant="h5" mt={2} mb={1}>{item.title}</Typography>
                <Typography variant="body1">{item.text}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Team Section */}
      <Box mb={8}>
        <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 'medium' }}>
          Meet Our Core Team
        </Typography>
        <Grid container spacing={4} justifyContent="center" mt={4}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box textAlign="center" p={3}>
                <Avatar 
                  src={member.avatar} 
                  sx={{ 
                    width: 120, 
                    height: 120, 
                    mx: 'auto',
                    mb: 2,
                    border: '3px solid',
                    borderColor: 'primary.main'
                  }} 
                />
                <Typography variant="h5" gutterBottom>{member.name}</Typography>
                <Typography color="primary" mb={2}>{member.role}</Typography>
                <Typography variant="body1">{member.bio}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default About;