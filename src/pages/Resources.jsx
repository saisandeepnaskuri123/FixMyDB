import React, { useEffect } from 'react';
import { 
  Box, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Chip, 
  Button, 
  Container,
  Stack,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  Article,
  Event,
  Description,
  Groups,
  CheckCircle,
  Schedule,
  Person,
  Download,
  Link as LinkIcon,
  ArrowForward
} from '@mui/icons-material';
import { Helmet } from 'react-helmet';

const Resources = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const resourceData = {
    technicalBlog: [
      {
        id: 1,
        title: "Optimizing Database Performance",
        description: "Learn advanced techniques to improve your database query performance.",
        date: "May 15, 2023",
        readTime: "8 min read",
        tags: ["Database", "Performance", "SQL"],
        url: "#"
      },
      {
        id: 2,
        title: "Schema Design Best Practices",
        description: "Essential patterns for designing scalable database schemas.",
        date: "April 28, 2023",
        readTime: "10 min read",
        tags: ["Schema", "Design", "NoSQL"],
        url: "#"
      },
      {
        id: 3,
        title: "Migration Strategies for Large Databases",
        description: "How to smoothly migrate terabyte-scale databases with minimal downtime.",
        date: "March 10, 2023",
        readTime: "12 min read",
        tags: ["Migration", "Big Data", "ETL"],
        url: "#"
      }
    ],
    webinarsEvents: [
      {
        id: 1,
        title: "Database Optimization Workshop",
        date: "June 20, 2023",
        time: "2:00 PM EST",
        duration: "2 hours",
        speaker: "Dr. Sarah Johnson",
        description: "Interactive workshop covering indexing strategies and query optimization.",
        registrationLink: "#",
        featured: true
      },
      {
        id: 2,
        title: "Monthly Developer Q&A",
        date: "July 5, 2023",
        time: "1:00 PM EST",
        duration: "1 hour",
        description: "Bring your database questions to our engineering team.",
        registrationLink: "#"
      }
    ],
    caseStudies: [
      {
        id: 1,
        title: "E-commerce Platform Scaling",
        industry: "Retail",
        summary: "How we helped a major retailer handle 10x traffic during holiday sales.",
        results: "Reduced query time by 85%",
        technologies: ["PostgreSQL", "Redis", "Kubernetes"],
        downloadLink: "#"
      },
      {
        id: 2,
        title: "Healthcare Data Migration",
        industry: "Healthcare",
        summary: "Secure migration of sensitive patient records with zero downtime.",
        results: "100% data integrity maintained",
        technologies: ["MongoDB", "AWS", "Node.js"],
        downloadLink: "#"
      },
      {
        id: 3,
        title: "Real-time Analytics Platform",
        industry: "Finance",
        summary: "Building a high-frequency trading analytics system.",
        results: "5ms response time achieved",
        technologies: ["TimescaleDB", "Go", "Kafka"],
        downloadLink: "#"
      }
    ],
    documentation: [
      {
        id: 1,
        title: "API Reference",
        type: "Technical",
        description: "Complete reference for all API endpoints and parameters.",
        version: "2.1.3",
        lastUpdated: "2 weeks ago",
        languages: ["JavaScript", "Python", "Java"],
        url: "#"
      },
      {
        id: 2,
        title: "Getting Started Guide",
        type: "Tutorial",
        description: "Step-by-step guide to implementing our solution.",
        version: "1.0.0",
        lastUpdated: "1 month ago",
        languages: ["JavaScript", "Python"],
        url: "#"
      },
      {
        id: 3,
        title: "Admin Console Manual",
        type: "User Guide",
        description: "How to use the admin dashboard features.",
        version: "3.2.0",
        lastUpdated: "3 days ago",
        languages: ["All"],
        url: "#"
      }
    ],
    communityForum: {
      title: "Developer Community",
      description: "Join thousands of developers discussing best practices, sharing solutions, and helping each other.",
      stats: "10,000+ active members",
      activeDiscussions: "50+ daily discussions",
      newMembers: "100+ new members weekly",
      features: [
        "Expert Q&A",
        "Code samples",
        "Troubleshooting help",
        "Early feature previews"
      ],
      url: "#"
    }
  };

  return (
    <>
      <Helmet>
        <title>Developer Resources | FixMyDB</title>
        <meta name="description" content="Access technical articles, webinars, case studies, documentation, and join our developer community." />
      </Helmet>

      {/* Hero Section */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
          color: 'white',
          py: { xs: 8, md: 12 },
          textAlign: 'center'
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant={isMobile ? 'h3' : 'h2'}
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 800,
              mb: 3,
              lineHeight: 1.2
            }}
          >
            Developer Resources
          </Typography>
          <Typography
            variant={isMobile ? 'h6' : 'h5'}
            sx={{
              mb: 4,
              maxWidth: 800,
              mx: 'auto',
              lineHeight: 1.6,
              opacity: 0.9
            }}
          >
            Everything you need to build, learn, and grow as a developer
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            endIcon={<ArrowForward />}
            sx={{
              px: 4,
              py: 1.5,
              fontWeight: 700,
              borderRadius: 2,
              boxShadow: '0 4px 14px rgba(0,0,0,0.2)',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 6px 20px rgba(0,0,0,0.25)'
              },
              transition: 'all 0.3s ease'
            }}
          >
            Explore Resources
          </Button>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        {/* Technical Blog Section */}
        <Box sx={{ mb: { xs: 8, md: 10 } }}>
          <Box sx={{ mb: 4 }}>
            <Typography
              variant={isMobile ? 'h5' : 'h4'}
              sx={{
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: 2
              }}
            >
              <Article color="primary" fontSize="large" />
              Technical Articles
            </Typography>
            <Typography color="text.secondary">
              Latest insights and tutorials from our engineering team
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {resourceData.technicalBlog.map((blog) => (
              <Grid item xs={12} sm={6} md={4} key={blog.id}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: theme.shadows[6]
                    }
                  }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ display: 'flex', alignItems: 'center' }}
                      >
                        <Schedule fontSize="small" sx={{ mr: 0.5 }} />
                        {blog.date}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ ml: 1.5 }}
                      >
                        • {blog.readTime}
                      </Typography>
                    </Box>
                    <Typography variant="h6" component="h3" gutterBottom>
                      {blog.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                      {blog.description}
                    </Typography>
                    <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: 'wrap' }}>
                      {blog.tags.map(tag => (
                        <Chip
                          key={tag}
                          label={tag}
                          size="small"
                          variant="outlined"
                          sx={{ borderRadius: 1 }}
                        />
                      ))}
                    </Stack>
                    <Button
                      component="a"
                      href={blog.url}
                      variant="text"
                      color="primary"
                      size="small"
                      endIcon={<ArrowForward />}
                    >
                      Read article
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Webinars & Events Section */}
        <Box sx={{ mb: { xs: 8, md: 10 } }}>
          <Box sx={{ mb: 4 }}>
            <Typography
              variant={isMobile ? 'h5' : 'h4'}
              sx={{
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: 2
              }}
            >
              <Event color="primary" fontSize="large" />
              Webinars & Events
            </Typography>
            <Typography color="text.secondary">
              Upcoming learning opportunities and networking events
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {resourceData.webinarsEvents.map((event) => (
              <Grid item xs={12} key={event.id}>
                <Card
                  sx={{
                    borderLeft: event.featured ? `4px solid ${theme.palette.secondary.main}` : 'none',
                    boxShadow: theme.shadows[1],
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-3px)',
                      boxShadow: theme.shadows[4]
                    }
                  }}
                >
                  <CardContent>
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between' }}>
                      <Box sx={{ mb: { xs: 2, md: 0 } }}>
                        {event.featured && (
                          <Chip label="Featured Event" color="secondary" size="small" sx={{ mb: 1 }} />
                        )}
                        <Typography variant="h6" component="h3" gutterBottom>
                          {event.title}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                          <Schedule fontSize="small" color="action" sx={{ mr: 1 }} />
                          <Typography variant="body2" color="text.secondary">
                            {event.date} | {event.time} • {event.duration}
                          </Typography>
                        </Box>
                        {event.speaker && (
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <Person fontSize="small" color="action" sx={{ mr: 1 }} />
                            <Typography variant="body2" color="text.secondary">
                              Speaker: {event.speaker}
                            </Typography>
                          </Box>
                        )}
                        <Typography variant="body1" color="text.secondary">
                          {event.description}
                        </Typography>
                      </Box>
                      <Button
                        component="a"
                        href={event.registrationLink}
                        variant="contained"
                        color="primary"
                        size="large"
                        sx={{ alignSelf: { md: 'center' }, mt: { xs: 2, md: 0 } }}
                      >
                        Register Now
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Case Studies Section */}
        <Box sx={{ mb: { xs: 8, md: 10 } }}>
          <Box sx={{ mb: 4 }}>
            <Typography
              variant={isMobile ? 'h5' : 'h4'}
              sx={{
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: 2
              }}
            >
              <Description color="primary" fontSize="large" />
              Case Studies
            </Typography>
            <Typography color="text.secondary">
              Real-world examples of our solutions in action
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {resourceData.caseStudies.map((caseStudy) => (
              <Grid item xs={12} sm={6} md={4} key={caseStudy.id}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Box
                    sx={{
                      height: 120,
                      background: `linear-gradient(45deg, ${theme.palette.primary.light}, ${theme.palette.secondary.light})`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: 24,
                      fontWeight: 700
                    }}
                  >
                    {caseStudy.industry.charAt(0)}
                  </Box>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Chip
                      label={caseStudy.industry}
                      color="default"
                      size="small"
                      variant="outlined"
                      sx={{ mb: 2 }}
                    />
                    <Typography variant="h6" component="h3" gutterBottom>
                      {caseStudy.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                      {caseStudy.summary}
                    </Typography>
                    {caseStudy.results && (
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <CheckCircle color="success" fontSize="small" sx={{ mr: 1 }} />
                        <Typography variant="body2">
                          {caseStudy.results}
                        </Typography>
                      </Box>
                    )}
                    <Button
                      component="a"
                      href={caseStudy.downloadLink}
                      variant="outlined"
                      color="primary"
                      size="small"
                      startIcon={<Download />}
                    >
                      Download Case Study
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Documentation Section */}
        <Box sx={{ mb: { xs: 8, md: 10 } }}>
          <Box sx={{ mb: 4 }}>
            <Typography
              variant={isMobile ? 'h5' : 'h4'}
              sx={{
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: 2
              }}
            >
              <Description color="primary" fontSize="large" />
              Documentation
            </Typography>
            <Typography color="text.secondary">
              Comprehensive guides and API references
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {resourceData.documentation.map((doc) => (
              <Grid item xs={12} sm={6} md={4} key={doc.id}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="overline" color="text.secondary" display="block" gutterBottom>
                      {doc.type}
                    </Typography>
                    <Box sx={{ fontSize: 40, color: 'text.secondary', mb: 2 }}>
                      <Description fontSize="inherit" />
                    </Box>
                    <Typography variant="h6" component="h3" gutterBottom>
                      {doc.title}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Schedule fontSize="small" color="action" sx={{ mr: 1 }} />
                      <Typography variant="body2" color="text.secondary">
                        Version {doc.version} • Updated {doc.lastUpdated}
                      </Typography>
                    </Box>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                      {doc.description}
                    </Typography>
                    <Button
                      component="a"
                      href={doc.url}
                      variant="outlined"
                      color="primary"
                      size="small"
                      startIcon={<LinkIcon />}
                    >
                      View Documentation
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Community Forum Section */}
        <Box
          sx={{
            background: `linear-gradient(135deg, ${theme.palette.grey[100]} 0%, ${theme.palette.grey[50]} 100%)`,
            borderRadius: 4,
            p: { xs: 3, md: 6 },
            mb: { xs: 8, md: 10 }
          }}
        >
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={7}>
              <Typography variant={isMobile ? 'h5' : 'h4'} gutterBottom sx={{ fontWeight: 700 }}>
                <Groups color="primary" fontSize="large" sx={{ mr: 2 }} />
                {resourceData.communityForum.title}
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                {resourceData.communityForum.description}
              </Typography>
              <Stack spacing={2} sx={{ mb: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <CheckCircle color="success" sx={{ mr: 1.5 }} />
                  <Typography>{resourceData.communityForum.stats}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <CheckCircle color="success" sx={{ mr: 1.5 }} />
                  <Typography>{resourceData.communityForum.activeDiscussions}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <CheckCircle color="success" sx={{ mr: 1.5 }} />
                  <Typography>{resourceData.communityForum.newMembers}</Typography>
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={12} md={5}>
              <Box sx={{ display: 'flex', justifyContent: { xs: 'flex-start', md: 'flex-end' } }}>
                <Button
                  component="a"
                  href={resourceData.communityForum.url}
                  variant="contained"
                  color="primary"
                  size="large"
                  endIcon={<ArrowForward />}
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontWeight: 600,
                    textTransform: 'none',
                    borderRadius: 2
                  }}
                >
                  Join the Community
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Resources;