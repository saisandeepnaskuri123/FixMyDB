import { Typography, Box, Grid, useMediaQuery } from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import CountUp from 'react-countup';

export default function StatsSection({ stats, theme }) {
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
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
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
        backgroundColor: theme.palette.mode === 'light' 
          ? 'rgba(25, 118, 210, 0.05)' 
          : 'rgba(25, 118, 210, 0.1)',
        py: { xs: 6, sm: 8, md: 10 },
        px: { xs: 2, sm: 3 },
        borderRadius: { xs: 2, sm: 4 },
        mb: { xs: 6, md: 10 },
        border: '1px solid',
        borderColor: theme.palette.mode === 'light'
          ? 'rgba(25, 118, 210, 0.1)'
          : 'rgba(25, 118, 210, 0.2)',
        boxShadow: theme.shadows[2],
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
      <Grid 
        container 
        spacing={{ xs: 2, sm: 3, md: 4 }} 
        justifyContent="center"
        alignItems="center"
      >
        {stats.map((stat, index) => (
          <Grid 
            item 
            xs={6} 
            sm={stats.length > 2 ? 4 : 6} 
            md={stats.length > 2 ? 3 : 4}
            key={index}
            component={motion.div}
            variants={itemVariants}
            whileHover={{ 
              y: -5,
              transition: { duration: 0.2 }
            }}
            sx={{
              position: 'relative',
              '&:not(:last-child)': {
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  right: 0,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  height: { xs: '40%', sm: '50%' },
                  width: '1px',
                  background: `linear-gradient(to bottom, transparent, ${theme.palette.divider}, transparent)`,
                  display: { 
                    xs: index % 2 === 0 && index !== stats.length - 1 ? 'block' : 'none',
                    sm: index !== stats.length - 1 ? 'block' : 'none'
                  }
                }
              }
            }}
          >
            <Box 
              textAlign="center"
              sx={{
                px: { xs: 1, sm: 2 },
                py: { xs: 1, sm: 2 },
                position: 'relative',
                zIndex: 1
              }}
            >
              <Typography 
                variant={isMobile ? 'h4' : isTablet ? 'h3' : 'h2'}
                fontWeight="bold"
                sx={{ 
                  mb: { xs: 0.5, sm: 1 },
                  lineHeight: 1.2,
                  background: theme.palette.mode === 'light'
                    ? `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.secondary.main} 100%)`
                    : `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.secondary.light} 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textFillColor: 'transparent',
                  filter: `drop-shadow(0 2px 4px ${theme.palette.primary.light}30)`
                }}
              >
                <CountUp
                  end={stat.value}
                  duration={2.5}
                  separator=","
                  delay={0.2}
                />
                {stat.unit && (
                  <Box 
                    component="span" 
                    sx={{ 
                      fontSize: '0.6em',
                      ml: 0.5,
                      verticalAlign: 'super'
                    }}
                  >
                    {stat.unit}
                  </Box>
                )}
              </Typography>
              <Typography 
                variant={isMobile ? 'body2' : 'subtitle1'}
                component={motion.div}
                whileHover={{ scale: 1.05 }}
                sx={{
                  color: 'text.secondary',
                  fontWeight: isMobile ? 500 : 600,
                  lineHeight: 1.4,
                  position: 'relative',
                  display: 'inline-block',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -4,
                    left: 0,
                    width: '0%',
                    height: '2px',
                    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    transition: 'width 0.3s ease'
                  },
                  '&:hover::after': {
                    width: '100%'
                  }
                }}
              >
                {stat.label}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Decorative elements */}
      <Box 
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ delay: 0.5 }}
        sx={{
          position: 'absolute',
          top: -50,
          right: -50,
          width: 200,
          height: 200,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${theme.palette.primary.main} 0%, transparent 70%)`,
          filter: 'blur(20px)'
        }}
      />
      <Box 
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ delay: 0.7 }}
        sx={{
          position: 'absolute',
          bottom: -30,
          left: -30,
          width: 150,
          height: 150,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${theme.palette.secondary.main} 0%, transparent 70%)`,
          filter: 'blur(15px)'
        }}
      />
    </Box>
  );
}