// Mock data - replace with real API calls
const searchContent = async (query) => {
  // In a real app, this would be an API call to your backend
  const allContent = [
    {
      id: 1,
      title: 'MySQL Performance Tuning',
      type: 'Documentation',
      path: '/docs/mysql-performance',
      content: 'Guide to optimizing MySQL databases...'
    },
    {
      id: 2,
      title: 'PostgreSQL Security Best Practices',
      type: 'Blog Post',
      path: '/blog/postgres-security',
      content: 'How to secure your PostgreSQL instances...'
    },
    // Add more content as needed
  ];

  // Simple client-side search (replace with server-side in production)
  const normalizedQuery = query.toLowerCase();
  return allContent.filter(item => 
    item.title.toLowerCase().includes(normalizedQuery) || 
    item.content.toLowerCase().includes(normalizedQuery)
  );
};

export { searchContent };