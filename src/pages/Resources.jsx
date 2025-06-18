import React from 'react';
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
  Divider,
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
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const resourceData = {
    technicalBlog: [
      {
        id: 1,
        title: "React 18 Performance Optimization",
        description: "Learn advanced techniques to optimize your React applications with Concurrent Features and the new Suspense API.",
        url: "/blog/react-performance",
        date: "June 15, 2023",
        readTime: "12 min read",
        tags: ["React", "Frontend"]
      },
      {
        id: 2,
        title: "Node.js Microservices Architecture",
        description: "Best practices for building scalable microservices with Node.js, Docker, and Kubernetes in production environments.",
        url: "/blog/nodejs-microservices",
        date: "July 2, 2023",
        readTime: "15 min read",
        tags: ["Node.js", "Backend"]
      },
      {
        id: 3,
        title: "TypeScript Best Practices 2023",
        description: "Modern TypeScript patterns and type safety techniques for large-scale applications.",
        url: "/blog/typescript-best-practices",
        date: "August 10, 2023",
        readTime: "10 min read",
        tags: ["TypeScript", "Fullstack"]
      }
    ],
    webinarsEvents: [
      {
        id: 1,
        title: "Next.js 13 Workshop",
        date: "September 15, 2023",
        time: "1:00 PM EST",
        description: "Hands-on workshop covering the new App Router, Server Components, and Data Fetching in Next.js 13.",
        registrationLink: "/events/nextjs-workshop",
        featured: true,
        speaker: "Sarah Johnson",
        duration: "2 hours"
      },
      {
        id: 2,
        title: "Cloud Native Architecture",
        date: "October 5, 2023",
        time: "10:00 AM EST",
        description: "Building scalable cloud-native applications with AWS, Terraform, and Kubernetes.",
        registrationLink: "/events/cloud-architecture",
        speaker: "Michael Chen",
        duration: "1.5 hours"
      },
      {
        id: 3,
        title: "Web3 Development Fundamentals",
        date: "November 8, 2023",
        time: "3:30 PM EST",
        description: "Introduction to blockchain development with Ethereum, Solidity, and Hardhat.",
        registrationLink: "/events/web3-fundamentals",
        speaker: "David Wilson",
        duration: "2 hours"
      }
    ],
    caseStudies: [
      {
        id: 1,
        title: "FinTech Payment System Scaling",
        industry: "Financial Services",
        summary: "How we scaled a payment processing system to handle 5,000 transactions per second with 99.999% availability.",
        downloadLink: "/case-studies/fintech-scaling",
        results: "5x throughput improvement",
        technologies: ["Node.js", "Redis", "Kafka"]
      },
      {
        id: 2,
        title: "Healthcare Data Analytics Platform",
        industry: "Healthcare",
        summary: "Building a HIPAA-compliant data analytics platform processing 10TB of patient data daily.",
        downloadLink: "/case-studies/healthcare-analytics",
        results: "80% faster insights delivery",
        technologies: ["Python", "Spark", "Snowflake"]
      },
      {
        id: 3,
        title: "E-commerce Personalization Engine",
        industry: "Retail",
        summary: "Implementing a real-time recommendation system that increased conversion rates by 35%.",
        downloadLink: "/case-studies/ecommerce-personalization",
        results: "35% conversion increase",
        technologies: ["React", "GraphQL", "TensorFlow"]
      }
    ],
    documentation: [
      {
        id: 1,
        title: "API Reference v3.2",
        version: "v3.2",
        description: "Complete documentation for all REST API endpoints including authentication, pagination, and error handling.",
        url: "/docs/api-reference",
        type: "API",
        lastUpdated: "3 days ago",
        languages: ["JavaScript", "Python", "Java"]
      },
      {
        id: 2,
        title: "Getting Started Guide",
        version: "v2.1",
        description: "Step-by-step instructions to set up your development environment and deploy your first application.",
        url: "/docs/getting-started",
        type: "Guide",
        lastUpdated: "2 weeks ago",
        languages: ["JavaScript", "TypeScript"]
      },
      {
        id: 3,
        title: "Security Best Practices",
        version: "v1.5",
        description: "Comprehensive guide to securing your applications and infrastructure following OWASP standards.",
        url: "/docs/security-guide",
        type: "Handbook",
        lastUpdated: "1 month ago",
        languages: ["All"]
      }
    ],
    communityForum: {
      title: "Developer Community Hub",
      description: "Connect with thousands of developers worldwide to share knowledge, ask questions, and collaborate on projects.",
      url: "/community",
      stats: "15,200+ members",
      activeDiscussions: "428 active discussions",
      newMembers: "120 new members this week",
      features: [
        "Q&A with core team members",
        "Monthly coding challenges",
        "Exclusive webinars",
        "Job board"
      ]
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
              lineHeight: 1.6
            }}
          >
            Everything you need to build, learn, and grow as a developer
          </Typography>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        {/* Technical Blog Section */}
        <Box sx={{ mb: { xs: 8, md: 10 } }}>
          <Box 
            sx={{ 
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'space-between',
              alignItems: { xs: 'flex-start', sm: 'center' },
              mb: 4
            }}
          >
            <Box sx={{ mb: { xs: 2, sm: 0 } }}>
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
            <Button
              component="a"
              href="/blog"
              variant="text"
              color="primary"
              endIcon={<ArrowForward />}
              sx={{
                fontWeight: 600,
                textTransform: 'none',
                fontSize: '1rem'
              }}
            >
              View all articles
            </Button>
          </Box>

          <Grid container spacing={3}>
            {resourceData.technicalBlog.map(blog => (
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
                        sx={{ ml: 1.5, display: 'flex', alignItems: 'center' }}
                      >
                        • {blog.readTime}
                      </Typography>
                    </Box>
                    <Typography
                      variant="h6"
                      component="h3"
                      gutterBottom
                      sx={{ fontWeight: 600 }}
                    >
                      {blog.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ mb: 2 }}
                    >
                      {blog.description}
                    </Typography>
                    {blog.tags && (
                      <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                        {blog.tags.map(tag => (
                          <Chip
                            key={tag}
                            label={tag}
                            size="small"
                            variant="outlined"
                          />
                        ))}
                      </Stack>
                    )}
                    <Button
                      component="a"
                      href={blog.url}
                      variant="text"
                      color="primary"
                      size="small"
                      endIcon={<ArrowForward />}
                      sx={{
                        fontWeight: 600,
                        textTransform: 'none',
                        pl: 0
                      }}
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
          <Box 
            sx={{ 
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'space-between',
              alignItems: { xs: 'flex-start', sm: 'center' },
              mb: 4
            }}
          >
            <Box sx={{ mb: { xs: 2, sm: 0 } }}>
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
            <Button
              component="a"
              href="/events"
              variant="text"
              color="primary"
              endIcon={<ArrowForward />}
              sx={{
                fontWeight: 600,
                textTransform: 'none',
                fontSize: '1rem'
              }}
            >
              View all events
            </Button>
          </Box>

          <Grid container spacing={3}>
            {resourceData.webinarsEvents.map(event => (
              <Grid item xs={12} key={event.id}>
                <Card
                  sx={{
                    borderLeft: event.featured ? `4px solid ${theme.palette.secondary.main}` : 'none',
                    boxShadow: theme.shadows[2],
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-3px)',
                      boxShadow: theme.shadows[4]
                    }
                  }}
                >
                  <CardContent>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        justifyContent: 'space-between'
                      }}
                    >
                      <Box sx={{ mb: { xs: 2, md: 0 } }}>
                        {event.featured && (
                          <Chip
                            label="Featured Event"
                            color="secondary"
                            size="small"
                            sx={{ mb: 1 }}
                          />
                        )}
                        <Typography
                          variant="h6"
                          component="h3"
                          gutterBottom
                          sx={{ fontWeight: 600 }}
                        >
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
                        sx={{
                          alignSelf: { md: 'center' },
                          mt: { xs: 2, md: 0 },
                          minWidth: 160
                        }}
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
          <Box 
            sx={{ 
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'space-between',
              alignItems: { xs: 'flex-start', sm: 'center' },
              mb: 4
            }}
          >
            <Box sx={{ mb: { xs: 2, sm: 0 } }}>
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
            <Button
              component="a"
              href="/case-studies"
              variant="text"
              color="primary"
              endIcon={<ArrowForward />}
              sx={{
                fontWeight: 600,
                textTransform: 'none',
                fontSize: '1rem'
              }}
            >
              View all case studies
            </Button>
          </Box>

          <Grid container spacing={3}>
            {resourceData.caseStudies.map(caseStudy => (
              <Grid item xs={12} sm={6} md={4} key={caseStudy.id}>
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
                    <Chip
                      label={caseStudy.industry}
                      color="default"
                      size="small"
                      variant="outlined"
                      sx={{ mb: 2 }}
                    />
                    <Typography
                      variant="h6"
                      component="h3"
                      gutterBottom
                      sx={{ fontWeight: 600 }}
                    >
                      {caseStudy.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ mb: 2 }}
                    >
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
                    {caseStudy.technologies && (
                      <Box sx={{ mb: 2 }}>
                        <Typography variant="caption" color="text.secondary">
                          Tech Stack:
                        </Typography>
                        <Stack direction="row" spacing={1} sx={{ mt: 1, flexWrap: 'wrap' }}>
                          {caseStudy.technologies.map(tech => (
                            <Chip
                              key={tech}
                              label={tech}
                              size="small"
                              variant="outlined"
                            />
                          ))}
                        </Stack>
                      </Box>
                    )}
                    <Button
                      component="a"
                      href={caseStudy.downloadLink}
                      variant="outlined"
                      color="primary"
                      size="small"
                      startIcon={<Download />}
                      sx={{
                        fontWeight: 600,
                        textTransform: 'none'
                      }}
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
          <Box 
            sx={{ 
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'space-between',
              alignItems: { xs: 'flex-start', sm: 'center' },
              mb: 4
            }}
          >
            <Box sx={{ mb: { xs: 2, sm: 0 } }}>
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
            <Button
              component="a"
              href="/docs"
              variant="text"
              color="primary"
              endIcon={<ArrowForward />}
              sx={{
                fontWeight: 600,
                textTransform: 'none',
                fontSize: '1rem'
              }}
            >
              View all documentation
            </Button>
          </Box>

          <Grid container spacing={3}>
            {resourceData.documentation.map(doc => (
              <Grid item xs={12} sm={6} md={4} key={doc.id}>
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
                    <Typography
                      variant="overline"
                      color="text.secondary"
                      display="block"
                      gutterBottom
                    >
                      {doc.type}
                    </Typography>
                    <Typography
                      variant="h6"
                      component="h3"
                      gutterBottom
                      sx={{ fontWeight: 600 }}
                    >
                      {doc.title}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Schedule fontSize="small" color="action" sx={{ mr: 1 }} />
                      <Typography variant="body2" color="text.secondary">
                        Version {doc.version} • Updated {doc.lastUpdated}
                      </Typography>
                    </Box>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ mb: 2 }}
                    >
                      {doc.description}
                    </Typography>
                    {doc.languages && (
                      <Box sx={{ mb: 2 }}>
                        <Typography variant="caption" color="text.secondary">
                          Available in:
                        </Typography>
                        <Stack direction="row" spacing={1} sx={{ mt: 1, flexWrap: 'wrap' }}>
                          {doc.languages.map(lang => (
                            <Chip
                              key={lang}
                              label={lang}
                              size="small"
                              variant="outlined"
                            />
                          ))}
                        </Stack>
                      </Box>
                    )}
                    <Button
                      component="a"
                      href={doc.url}
                      variant="outlined"
                      color="primary"
                      size="small"
                      startIcon={<LinkIcon />}
                      sx={{
                        fontWeight: 600,
                        textTransform: 'none'
                      }}
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
            backgroundColor: theme.palette.grey[100],
            borderRadius: 2,
            p: { xs: 3, md: 6 },
            mb: { xs: 8, md: 10 }
          }}
        >
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={7}>
              <Typography
                variant={isMobile ? 'h5' : 'h4'}
                gutterBottom
                sx={{
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2
                }}
              >
                <Groups color="primary" fontSize="large" />
                {resourceData.communityForum.title}
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ mb: 3 }}
              >
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
              {resourceData.communityForum.features && (
                <Box sx={{ mb: 3 }}>
                  <Typography variant="subtitle2" gutterBottom>
                    Community Features:
                  </Typography>
                  <Grid container spacing={1}>
                    {resourceData.communityForum.features.map((feature, index) => (
                      <Grid item xs={12} sm={6} key={index}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <CheckCircle color="success" sx={{ mr: 1, fontSize: '1rem' }} />
                          <Typography variant="body2">{feature}</Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              )}
            </Grid>
            <Grid item xs={12} md={5}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: { xs: 'flex-start', md: 'flex-end' }
                }}
              >
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
                    textTransform: 'none'
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