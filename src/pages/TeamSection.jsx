import { Avatar, Typography, Chip, Box, Grid, Fade } from '@mui/material';
import { Groups as TeamIcon } from '@mui/icons-material';

const teamMembers = [
  {
    name: 'MADHU SAI VAVILALA',
    role: 'Founder & Lead DBA',
    bio: '15+ years of database expertise with specialization in MySQL optimization',
    avatar: '/avatars/madhu.jpg.png',
    expertise: ['MongoDB', 'Performance', 'Architecture']
  },
  {
    name: 'Sai Sandeep Naskuri',
    role: 'Senior PostgreSQL Architect',
    bio: 'Database scaling specialist with deep knowledge of distributed systems',
    avatar: '/avatars/sai.jpg.jpg',
    expertise: ['PostgreSQL', 'Scaling', 'Distributed Systems']
  },
  {
    name: 'Galaba Bala Chandra Sekhar',
    role: 'Database Security Expert',
    bio: 'Security certification specialist focused on compliance and hardening',
    avatar: '/avatars/chandu.jpg.png',
    expertise: ['Security', 'Compliance', 'Encryption']
  }
];

export default function TeamSection({ visible, isMobile, theme }) {
  return (
    <Fade in={visible} timeout={isMobile ? 700 : 1400}>
      <Box>
        <Typography 
          variant={isMobile ? 'h4' : 'h3'}
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
          <TeamIcon sx={{ mr: 2, fontSize: isMobile ? 30 : 40 }} />
          Meet Our Core Team
        </Typography>
        <Grid container spacing={isMobile ? 2 : 4}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box 
                textAlign="center" 
                p={isMobile ? 2 : 4}
                sx={{
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 2,
                  height: '100%'
                }}
              >
                <Avatar 
                  src={member.avatar} 
                  sx={{ 
                    width: isMobile ? 100 : 160, 
                    height: isMobile ? 100 : 160, 
                    mx: 'auto',
                    mb: 3,
                    border: '3px solid',
                    borderColor: 'primary.main'
                  }} 
                />
                <Typography variant={isMobile ? 'h5' : 'h4'} gutterBottom sx={{ fontWeight: 600 }}>
                  {member.name}
                </Typography>
                <Typography 
                  color="primary" 
                  variant={isMobile ? 'body1' : 'h6'} 
                  sx={{ 
                    mb: 2,
                    fontWeight: 500
                  }}
                >
                  {member.role}
                </Typography>
                <Typography variant="body2" sx={{ mb: 3 }}>
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
  );
}