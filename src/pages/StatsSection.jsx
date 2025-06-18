import { Typography, Box, Grid, Fade, useMediaQuery } from '@mui/material';

export default function StatsSection({ stats, theme, visible }) {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  return (
    <Fade in={visible} timeout={isMobile ? 500 : 800}>
      <Box sx={{ 
        backgroundColor: theme.palette.mode === 'light' 
          ? 'rgba(25, 118, 210, 0.05)' 
          : 'rgba(25, 118, 210, 0.1)',
        py: { xs: 4, sm: 5, md: 6 },
        px: { xs: 2, sm: 3 },
        borderRadius: { xs: 2, sm: 4 },
        mb: { xs: 6, md: 8 },
        border: '1px solid',
        borderColor: theme.palette.mode === 'light'
          ? 'rgba(25, 118, 210, 0.1)'
          : 'rgba(25, 118, 210, 0.2)',
        boxShadow: theme.shadows[1]
      }}>
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
                    backgroundColor: theme.palette.divider,
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
                  py: { xs: 1, sm: 2 }
                }}
              >
                <Typography 
                  variant={isMobile ? 'h4' : isTablet ? 'h3' : 'h2'}
                  color="primary" 
                  fontWeight="bold"
                  sx={{ 
                    mb: { xs: 0.5, sm: 1 },
                    lineHeight: 1.2,
                    background: theme.palette.mode === 'light'
                      ? `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`
                      : `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    textFillColor: 'transparent'
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography 
                  variant={isMobile ? 'body2' : 'subtitle1'}
                  sx={{
                    color: 'text.secondary',
                    fontWeight: isMobile ? 500 : 600,
                    lineHeight: 1.4
                  }}
                >
                  {stat.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Fade>
  );
}