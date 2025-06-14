import { Typography, Box, Grid, Fade } from '@mui/material';

export default function StatsSection({ stats, theme, visible, isMobile }) {
  return (
    <Fade in={visible} timeout={isMobile ? 500 : 800}>
      <Box sx={{ 
        backgroundColor: theme.palette.mode === 'light' 
          ? 'rgba(25, 118, 210, 0.05)' 
          : 'rgba(25, 118, 210, 0.1)',
        py: isMobile ? 4 : 6,
        borderRadius: 4,
        mb: 8
      }}>
        <Grid container spacing={isMobile ? 2 : 4} justifyContent="center">
          {stats.map((stat, index) => (
            <Grid item xs={6} sm={3} key={index}>
              <Box textAlign="center">
                <Typography 
                  variant={isMobile ? 'h3' : 'h2'}
                  color="primary" 
                  fontWeight="bold"
                  sx={{ mb: 1 }}
                >
                  {stat.value}
                </Typography>
                <Typography variant={isMobile ? 'body2' : 'h6'}>{stat.label}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Fade>
  );
}