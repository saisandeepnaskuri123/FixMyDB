import { Box, Typography, Button, Container, Grid, useTheme, Stack } from '@mui/material';
import { ArrowForward, Phone, CheckCircle } from '@mui/icons-material';
import { useState, useEffect } from 'react';
import { useMediaQuery } from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function HeroSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
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

  const features = [
    { label: '24/7 Support', icon: <CheckCircle fontSize="small" /> },
    { label: '99.9% Uptime', icon: <CheckCircle fontSize="small" /> },
    { label: 'Enterprise Security', icon: <CheckCircle fontSize="small" /> },
    { label: 'Performance Guarantee', icon: <CheckCircle fontSize="small" /> }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <Box
      ref={ref}
      sx={{
        background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
        color: 'white',
        py: { xs: 8, sm: 10, md: 15 },
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: -100,
          right: -100,
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.05)',
          zIndex: 0,
          animation: 'pulse 15s infinite alternate'
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: -150,
          left: -150,
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.03)',
          zIndex: 0,
          animation: 'pulse 20s infinite alternate-reverse'
        }
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid 
          container 
          spacing={4} 
          alignItems="center" 
          justifyContent="center"
          component={motion.div}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <Grid item xs={12} md={6} sx={{ position: 'relative', zIndex: 1 }}>
            <motion.div variants={itemVariants}>
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  fontWeight: 800,
                  lineHeight: 1.2,
                  mb: 3,
                  fontSize: { 
                    xs: '2.25rem', 
                    sm: '2.75rem', 
                    md: '3.25rem',
                    lg: '3.75rem' 
                  },
                  textAlign: { xs: 'center', md: 'left' },
                  textShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}
              >
                Optimize, Secure & Empower Your Database
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Typography
                variant="h5"
                component="p"
                sx={{
                  mb: 4,
                  opacity: 0.9,
                  lineHeight: 1.6,
                  fontSize: { 
                    xs: '1.1rem', 
                    sm: '1.2rem', 
                    md: '1.3rem' 
                  },
                  textAlign: { xs: 'center', md: 'left' },
                }}
              >
                FixMyDB provides expert database management services to optimize performance, 
                reduce costs by up to 60%, and ensure enterprise-grade data security.
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Stack 
                direction={{ xs: 'column', sm: 'row' }} 
                spacing={2}
                sx={{ 
                  mb: 4,
                  justifyContent: { xs: 'center', md: 'flex-start' }
                }}
              >
                <Button
                  component={motion.button}
                  whileHover={{ y: -2, boxShadow: theme.shadows[6] }}
                  whileTap={{ scale: 0.98 }}
                  variant="contained"
                  color="secondary"
                  size={isMobile ? 'medium' : 'large'}
                  endIcon={<ArrowForward />}
                  sx={{
                    px: { xs: 3, sm: 4 },
                    py: { xs: 1, sm: 1.5 },
                    fontSize: { xs: '0.95rem', sm: '1.05rem', md: '1.15rem' },
                    fontWeight: 600,
                    whiteSpace: 'nowrap',
                    minWidth: { xs: '100%', sm: 'auto' },
                    borderRadius: '12px',
                    boxShadow: theme.shadows[3],
                    transition: 'all 0.3s ease'
                  }}
                >
                  Get in Touch
                </Button>
                <Button
                  component={motion.button}
                  whileHover={{ 
                    y: -2, 
                    backgroundColor: 'rgba(255,255,255,0.15)',
                    boxShadow: theme.shadows[4]
                  }}
                  whileTap={{ scale: 0.98 }}
                  variant="outlined"
                  color="inherit"
                  size={isMobile ? 'medium' : 'large'}
                  startIcon={<Phone />}
                  sx={{
                    px: { xs: 3, sm: 4 },
                    py: { xs: 1, sm: 1.5 },
                    fontSize: { xs: '0.95rem', sm: '1.05rem', md: '1.15rem' },
                    fontWeight: 600,
                    borderWidth: 2,
                    whiteSpace: 'nowrap',
                    minWidth: { xs: '100%', sm: 'auto' },
                    borderRadius: '12px',
                    transition: 'all 0.3s ease'
                  }}
                >
                  Book a Call
                </Button>
              </Stack>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Grid 
                container 
                spacing={2} 
                sx={{ 
                  mt: 2,
                  justifyContent: { xs: 'center', md: 'flex-start' }
                }}
              >
                {features.map((feature, index) => (
                  <Grid item xs={6} sm={6} md={6} key={index}>
                    <Box 
                      component={motion.div}
                      whileHover={{ scale: 1.02 }}
                      sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: 1,
                        justifyContent: { xs: 'center', md: 'flex-start' },
                        p: 1,
                        borderRadius: '8px',
                        background: 'rgba(255,255,255,0.05)',
                        backdropFilter: 'blur(5px)'
                      }}
                    >
                      <Box 
                        component={motion.div}
                        animate={{ 
                          scale: [1, 1.1, 1],
                          transition: { 
                            repeat: Infinity, 
                            repeatDelay: 3,
                            duration: 1.5 
                          }
                        }}
                        sx={{ color: 'success.light' }}
                      >
                        {feature.icon}
                      </Box>
                      <Typography 
                        variant="body1"
                        sx={{ 
                          fontSize: { xs: '0.9rem', sm: '1.05rem' },
                          fontWeight: 500
                        }}
                      >
                        {feature.label}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Grid>
          
          <Grid item xs={12} md={6} sx={{ 
            position: 'relative',
            display: 'flex',
            justifyContent: { xs: 'center', md: 'flex-end' }
          }}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, x: 50 }}
              animate={{ 
                opacity: 1, 
                x: 0,
                transition: { 
                  delay: 0.4,
                  type: "spring",
                  stiffness: 60
                }
              }}
              whileHover={{ 
                transform: { md: 'perspective(1000px) rotateY(-5deg) scale(1.02)' },
              }}
              sx={{
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: theme.shadows[16],
                position: 'relative',
                aspectRatio: '1/0.7',
                width: '100%',
                maxWidth: { xs: '100%', sm: '80%', md: '100%' },
                backgroundImage: 'url(/images/dashboard-preview.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transform: { xs: 'none', md: 'perspective(1000px) rotateY(-10deg)' },
                transition: 'transform 0.5s ease, box-shadow 0.5s ease',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  inset: 0,
                  background: `linear-gradient(to bottom right, ${theme.palette.primary.main}30, transparent)`,
                  borderRadius: '16px'
                },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '16px',
                  padding: '2px',
                  background: 'linear-gradient(45deg, rgba(255,255,255,0.3), rgba(255,255,255,0))',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                  pointerEvents: 'none'
                }
              }}
            >
              {/* Floating elements animation */}
              {[...Array(5)].map((_, i) => (
                <Box
                  key={i}
                  component={motion.div}
                  animate={{
                    y: [0, 15, 0],
                    opacity: [0.7, 1, 0.7],
                    transition: {
                      duration: 5 + Math.random() * 5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                  sx={{
                    position: 'absolute',
                    background: 'rgba(255,255,255,0.8)',
                    borderRadius: '50%',
                    filter: 'blur(1px)'
                  }}
                  style={{
                    width: `${Math.random() * 10 + 5}px`,
                    height: `${Math.random() * 10 + 5}px`,
                    left: `${Math.random() * 80 + 10}%`,
                    top: `${Math.random() * 80 + 10}%`
                  }}
                />
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Animation styles */}
      <style jsx global>{`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.1); opacity: 0.9; }
          100% { transform: scale(1); opacity: 0.7; }
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </Box>
  );
}

export default HeroSection;