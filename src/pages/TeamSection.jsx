import { Avatar, Typography, Chip, Box, Grid, useMediaQuery } from '@mui/material';
import { Groups as TeamIcon } from '@mui/icons-material';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

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

export default function TeamSection({ theme }) {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  
  // Animation controls
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.17, 0.67, 0.83, 0.67]
      }
    }
  };

  const hoverVariants = {
    hover: {
      y: -10,
      boxShadow: `0 20px 25px -5px ${theme.palette.primary.light}40`,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <Box 
      ref={ref}
      component={motion.div}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      sx={{ 
        px: { xs: 2, sm: 3, md: 4 },
        py: { xs: 4, sm: 6, md: 8 },
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Decorative background elements */}
      <Box 
        component={motion.div}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        sx={{
          position: 'absolute',
          top: -100,
          right: -100,
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${theme.palette.primary.main} 0%, transparent 70%)`,
          filter: 'blur(30px)',
          zIndex: 0
        }}
      />

      <Typography 
        variant={isMobile ? 'h4' : isTablet ? 'h3' : 'h2'}
        align="center" 
        gutterBottom 
        component={motion.div}
        variants={itemVariants}
        sx={{ 
          fontWeight: 800,
          mb: { xs: 4, sm: 6 },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          position: 'relative',
          zIndex: 1
        }}
      >
        <TeamIcon sx={{ 
          mr: 2, 
          fontSize: isMobile ? 30 : isTablet ? 36 : 40,
          color: theme.palette.primary.main,
          filter: `drop-shadow(0 2px 4px ${theme.palette.primary.light}80)`
        }} />
        Meet Our Core Team
      </Typography>

      <Grid 
        container 
        spacing={isMobile ? 3 : isTablet ? 4 : 5} 
        justifyContent="center"
        sx={{ position: 'relative', zIndex: 1 }}
      >
        {teamMembers.map((member, index) => (
          <Grid 
            item 
            xs={12} 
            sm={6} 
            md={4} 
            key={index}
            component={motion.div}
            variants={itemVariants}
            whileHover="hover"
          >
            <Box 
              component={motion.div}
              variants={hoverVariants}
              textAlign="center" 
              p={{ xs: 3, sm: 4, md: 5 }}
              sx={{
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 4,
                height: '100%',
                transition: 'all 0.3s ease',
                backgroundColor: theme.palette.background.paper,
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  opacity: 0.8
                }
              }}
            >
              <Box
                component={motion.div}
                whileHover={{ scale: 1.05 }}
                sx={{
                  display: 'inline-block',
                  mb: { xs: 2, sm: 3 },
                  position: 'relative'
                }}
              >
                <Avatar 
                  src={member.avatar} 
                  sx={{ 
                    width: { xs: 120, sm: 140, md: 160 }, 
                    height: { xs: 120, sm: 140, md: 160 }, 
                    mx: 'auto',
                    border: '4px solid',
                    borderColor: theme.palette.background.paper,
                    boxShadow: `0 8px 24px ${theme.palette.primary.light}30`,
                    filter: 'grayscale(20%)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      filter: 'grayscale(0%)'
                    }
                  }} 
                />
                <Box 
                  component={motion.div}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  sx={{
                    position: 'absolute',
                    bottom: 8,
                    right: 8,
                    width: 24,
                    height: 24,
                    borderRadius: '50%',
                    backgroundColor: theme.palette.primary.main,
                    border: `3px solid ${theme.palette.background.paper}`,
                    zIndex: 2
                  }}
                />
              </Box>

              <Typography 
                variant={isMobile ? 'h6' : isTablet ? 'h5' : 'h4'} 
                gutterBottom 
                component={motion.div}
                whileHover={{ color: theme.palette.primary.main }}
                sx={{ 
                  fontWeight: 700,
                  mb: { xs: 1.5, sm: 2 },
                  color: 'text.primary',
                  transition: 'color 0.3s ease'
                }}
              >
                {member.name}
              </Typography>

              <Typography 
                variant={isMobile ? 'body1' : 'h6'} 
                component={motion.div}
                whileHover={{ scale: 1.05 }}
                sx={{ 
                  mb: { xs: 2, sm: 3 },
                  fontWeight: 600,
                  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'inline-block'
                }}
              >
                {member.role}
              </Typography>

              <Typography 
                variant="body1" 
                component={motion.div}
                whileHover={{ 
                  color: theme.palette.mode === 'light' 
                    ? theme.palette.text.primary 
                    : theme.palette.text.secondary
                }}
                sx={{ 
                  mb: { xs: 2, sm: 3 },
                  color: 'text.secondary',
                  lineHeight: 1.7,
                  transition: 'color 0.3s ease'
                }}
              >
                {member.bio}
              </Typography>

              <Box 
                component={motion.div}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                sx={{ 
                  display: 'flex', 
                  gap: 1.5, 
                  justifyContent: 'center', 
                  flexWrap: 'wrap',
                  mt: 'auto'
                }}
              >
                {member.expertise.map((skill, i) => (
                  <Chip 
                    key={i}
                    label={skill}
                    size={isMobile ? 'small' : 'medium'}
                    component={motion.div}
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: theme.palette.primary.dark
                    }}
                    sx={{
                      backgroundColor: theme.palette.primary.main,
                      color: theme.palette.primary.contrastText,
                      fontWeight: 600,
                      borderRadius: 1,
                      px: 1,
                      transition: 'all 0.2s ease',
                      boxShadow: `0 2px 8px ${theme.palette.primary.light}40`
                    }}
                  />
                ))}
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}