import { Avatar, Typography, Chip, Box, Grid, Fade, useMediaQuery } from '@mui/material';
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

export default function TeamSection({ visible, theme }) {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  return (
    <Fade in={visible} timeout={isMobile ? 700 : 1400}>
      <Box sx={{ px: { xs: 2, sm: 3 } }}>
        <Typography 
          variant={isMobile ? 'h4' : isTablet ? 'h3' : 'h2'}
          align="center" 
          gutterBottom 
          sx={{ 
            fontWeight: 700,
            mb: { xs: 4, sm: 6 },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'text.primary'
          }}
        >
          <TeamIcon sx={{ 
            mr: 2, 
            fontSize: isMobile ? 30 : isTablet ? 36 : 40,
            color: 'primary.main'
          }} />
          Meet Our Core Team
        </Typography>
        <Grid container spacing={isMobile ? 2 : isTablet ? 3 : 4} justifyContent="center">
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box 
                textAlign="center" 
                p={{ xs: 2, sm: 3, md: 4 }}
                sx={{
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: { xs: 2, sm: 3 },
                  height: '100%',
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
                    width: { xs: 100, sm: 120, md: 160 }, 
                    height: { xs: 100, sm: 120, md: 160 }, 
                    mx: 'auto',
                    mb: { xs: 2, sm: 3 },
                    border: '3px solid',
                    borderColor: 'primary.main',
                    boxShadow: theme.shadows[2]
                  }} 
                />
                <Typography 
                  variant={isMobile ? 'h6' : isTablet ? 'h5' : 'h4'} 
                  gutterBottom 
                  sx={{ 
                    fontWeight: 600,
                    mb: { xs: 1, sm: 2 },
                    color: 'text.primary'
                  }}
                >
                  {member.name}
                </Typography>
                <Typography 
                  color="primary" 
                  variant={isMobile ? 'body1' : 'h6'} 
                  sx={{ 
                    mb: { xs: 1.5, sm: 2 },
                    fontWeight: 500
                  }}
                >
                  {member.role}
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    mb: { xs: 2, sm: 3 },
                    color: 'text.secondary',
                    lineHeight: 1.6
                  }}
                >
                  {member.bio}
                </Typography>
                <Box sx={{ 
                  display: 'flex', 
                  gap: 1, 
                  justifyContent: 'center', 
                  flexWrap: 'wrap',
                  mt: 'auto'
                }}>
                  {member.expertise.map((skill, i) => (
                    <Chip 
                      key={i}
                      label={skill}
                      size={isMobile ? 'small' : 'medium'}
                      sx={{
                        backgroundColor: 'primary.light',
                        color: 'primary.contrastText',
                        fontWeight: 500,
                        '&:hover': {
                          backgroundColor: 'primary.main'
                        }
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