import React from 'react';
// For example, if it's in src/styles:
import styles from '../styles/Resources.module.css';

const Resources = () => {
  const resourceData = {
    technicalBlog: [
      {
        id: 1,
        title: "React 18 Performance Optimization",
        description: "Learn advanced techniques to optimize your React applications with Concurrent Features and the new Suspense API.",
        url: "/blog/react-performance",
        date: "June 15, 2023",
        icon: "📊",
        readTime: "12 min read",
        tags: ["React", "Frontend"]
      },
      {
        id: 2,
        title: "Node.js Microservices Architecture",
        description: "Best practices for building scalable microservices with Node.js, Docker, and Kubernetes in production environments.",
        url: "/blog/nodejs-microservices",
        date: "July 2, 2023",
        icon: "⚙️",
        readTime: "15 min read",
        tags: ["Node.js", "Backend"]
      },
      {
        id: 3,
        title: "TypeScript Best Practices 2023",
        description: "Modern TypeScript patterns and type safety techniques for large-scale applications.",
        url: "/blog/typescript-best-practices",
        date: "August 10, 2023",
        icon: "🧩", 
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
        logo: "💳",
        results: "5x throughput improvement",
        technologies: ["Node.js", "Redis", "Kafka"]
      },
      {
        id: 2,
        title: "Healthcare Data Analytics Platform",
        industry: "Healthcare",
        summary: "Building a HIPAA-compliant data analytics platform processing 10TB of patient data daily.",
        downloadLink: "/case-studies/healthcare-analytics",
        logo: "🏥",
        results: "80% faster insights delivery",
        technologies: ["Python", "Spark", "Snowflake"]
      },
      {
        id: 3,
        title: "E-commerce Personalization Engine",
        industry: "Retail",
        summary: "Implementing a real-time recommendation system that increased conversion rates by 35%.",
        downloadLink: "/case-studies/ecommerce-personalization",
        logo: "🛒",
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
    <div className={styles.resourcesContainer}>
      {/* Hero Header */}
      <div className={styles.heroHeader}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Developer Resources</h1>
          <p className={styles.heroSubtitle}>
            Everything you need to build, learn, and grow as a developer
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className={styles.mainContent}>
        {/* Technical Blog Section */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <div>
              <h2 className={styles.sectionTitle}>
                <span className={styles.sectionIcon}>📝</span>
                Technical Articles
              </h2>
              <p className={styles.sectionDescription}>
                Latest insights and tutorials from our engineering team
              </p>
            </div>
            <a href="/blog" className={styles.viewAllLink}>
              View all articles
              <svg className={styles.linkIcon} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>

          <div className={styles.resourceGrid}>
            {resourceData.technicalBlog.map(blog => (
              <div key={blog.id} className={styles.resourceCard}>
                <div className={styles.cardContent}>
                  <div className={styles.cardHeader}>
                    <div className={styles.cardIcon}>{blog.icon}</div>
                    <div>
                      <div className={styles.cardMeta}>
                        <span>{blog.date}</span>
                        <span className={styles.metaSeparator}>•</span>
                        <span>{blog.readTime}</span>
                      </div>
                      <h3 className={styles.cardTitle}>{blog.title}</h3>
                    </div>
                  </div>
                  <p className={styles.cardDescription}>{blog.description}</p>
                  {blog.tags && (
                    <div className={styles.tagsContainer}>
                      {blog.tags.map(tag => (
                        <span key={tag} className={styles.tag}>{tag}</span>
                      ))}
                    </div>
                  )}
                  <a href={blog.url} className={styles.cardLink}>
                    Read article
                    <svg className={styles.linkIcon} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Webinars & Events Section */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <div>
              <h2 className={styles.sectionTitle}>
                <span className={styles.sectionIcon}>🎤</span>
                Webinars & Events
              </h2>
              <p className={styles.sectionDescription}>
                Upcoming learning opportunities and networking events
              </p>
            </div>
            <a href="/events" className={styles.viewAllLink}>
              View all events
              <svg className={styles.linkIcon} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>

          <div className={styles.eventsContainer}>
            {resourceData.webinarsEvents.map(event => (
              <div 
                key={event.id} 
                className={`${styles.eventCard} ${event.featured ? styles.featuredCard : ''}`}
              >
                <div className={styles.eventContent}>
                  <div className={styles.eventHeader}>
                    {event.featured && (
                      <span className={styles.featuredBadge}>Featured Event</span>
                    )}
                    <h3 className={styles.eventTitle}>{event.title}</h3>
                    <div className={styles.eventMeta}>
                      <svg className={styles.metaIcon} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      <span>{event.date} | {event.time}</span>
                      <span className={styles.metaSeparator}>•</span>
                      <span>{event.duration}</span>
                    </div>
                  </div>
                  <p className={styles.eventDescription}>{event.description}</p>
                  {event.speaker && (
                    <div className={styles.eventSpeaker}>
                      <svg className={styles.metaIcon} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                      </svg>
                      <span>Speaker: {event.speaker}</span>
                    </div>
                  )}
                </div>
                <div className={styles.eventActions}>
                  <a href={event.registrationLink} className={styles.primaryButton}>
                    Register Now
                    <svg className={styles.buttonIcon} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Case Studies Section */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <div>
              <h2 className={styles.sectionTitle}>
                <span className={styles.sectionIcon}>📊</span>
                Case Studies
              </h2>
              <p className={styles.sectionDescription}>
                Real-world examples of our solutions in action
              </p>
            </div>
            <a href="/case-studies" className={styles.viewAllLink}>
              View all case studies
              <svg className={styles.linkIcon} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>

          <div className={styles.resourceGrid}>
            {resourceData.caseStudies.map(caseStudy => (
              <div key={caseStudy.id} className={styles.resourceCard}>
                <div className={styles.cardContent}>
                  <div className={styles.cardHeader}>
                    <div className={styles.cardIcon}>{caseStudy.logo}</div>
                    <div>
                      <span className={styles.industryTag}>{caseStudy.industry}</span>
                      <h3 className={styles.cardTitle}>{caseStudy.title}</h3>
                    </div>
                  </div>
                  <p className={styles.cardDescription}>{caseStudy.summary}</p>
                  {caseStudy.results && (
                    <div className={styles.resultsBadge}>
                      <svg className={styles.successIcon} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {caseStudy.results}
                    </div>
                  )}
                  {caseStudy.technologies && (
                    <div className={styles.techStack}>
                      <span className={styles.techLabel}>Tech Stack:</span>
                      <div className={styles.techTags}>
                        {caseStudy.technologies.map(tech => (
                          <span key={tech} className={styles.techTag}>{tech}</span>
                        ))}
                      </div>
                    </div>
                  )}
                  <a href={caseStudy.downloadLink} className={styles.secondaryButton}>
                    <svg className={styles.buttonIcon} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    Download Case Study
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Documentation Section */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <div>
              <h2 className={styles.sectionTitle}>
                <span className={styles.sectionIcon}>📚</span>
                Documentation
              </h2>
              <p className={styles.sectionDescription}>
                Comprehensive guides and API references
              </p>
            </div>
            <a href="/docs" className={styles.viewAllLink}>
              View all documentation
              <svg className={styles.linkIcon} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>

          <div className={styles.resourceGrid}>
            {resourceData.documentation.map(doc => (
              <div key={doc.id} className={styles.resourceCard}>
                <div className={styles.cardContent}>
                  <div className={styles.cardHeader}>
                    <div className={styles.docIconContainer}>
                      <svg className={styles.docIcon} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <span className={styles.docType}>{doc.type}</span>
                      <h3 className={styles.cardTitle}>{doc.title}</h3>
                    </div>
                  </div>
                  <div className={styles.docMeta}>
                    <svg className={styles.metaIcon} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <span>Version {doc.version}</span>
                    <span className={styles.metaSeparator}>•</span>
                    <span>Updated {doc.lastUpdated}</span>
                  </div>
                  <p className={styles.cardDescription}>{doc.description}</p>
                  {doc.languages && (
                    <div className={styles.languages}>
                      <span className={styles.languageLabel}>Available in:</span>
                      <div className={styles.languageTags}>
                        {doc.languages.map(lang => (
                          <span key={lang} className={styles.languageTag}>{lang}</span>
                        ))}
                      </div>
                    </div>
                  )}
                  <a href={doc.url} className={styles.secondaryButton}>
                    <svg className={styles.buttonIcon} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5z" clipRule="evenodd" />
                    </svg>
                    View Documentation
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Community Forum Section */}
        <section>
          <div className={styles.communitySection}>
            <div className={styles.communityContent}>
              <div className={styles.communityInfo}>
                <h2 className={styles.communityTitle}>{resourceData.communityForum.title}</h2>
                <p className={styles.communityDescription}>{resourceData.communityForum.description}</p>
                <div className={styles.communityStats}>
                  <div className={styles.communityStat}>
                    <svg className={styles.statIcon} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {resourceData.communityForum.stats}
                  </div>
                  <div className={styles.communityStat}>
                    <svg className={styles.statIcon} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {resourceData.communityForum.activeDiscussions}
                  </div>
                  <div className={styles.communityStat}>
                    <svg className={styles.statIcon} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {resourceData.communityForum.newMembers}
                  </div>
                </div>
                {resourceData.communityForum.features && (
                  <div className={styles.communityFeatures}>
                    <h4 className={styles.featuresTitle}>Community Features:</h4>
                    <ul className={styles.featuresList}>
                      {resourceData.communityForum.features.map((feature, index) => (
                        <li key={index} className={styles.featureItem}>
                          <svg className={styles.featureIcon} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div className={styles.communityAction}>
                <a href={resourceData.communityForum.url} className={styles.communityButton}>
                  Join the Community
                  <svg className={styles.buttonIcon} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Resources;