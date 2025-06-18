/**
 * Mock search service that simulates API calls for content search
 * In production, replace with actual API calls to your backend
 */

// Sample content database (would come from your CMS/backend in production)
const contentDatabase = [
  {
    id: 1,
    title: 'MySQL Performance Tuning',
    type: 'Documentation',
    category: 'MySQL',
    path: '/docs/mysql-performance',
    description: 'Comprehensive guide to optimizing MySQL database performance',
    content: 'This guide covers query optimization, indexing strategies, configuration tuning, and bottleneck identification for MySQL databases...',
    lastUpdated: '2023-05-15',
    tags: ['performance', 'optimization', 'mysql']
  },
  {
    id: 2,
    title: 'PostgreSQL Security Best Practices',
    type: 'Blog Post',
    category: 'PostgreSQL',
    path: '/blog/postgres-security',
    description: 'Essential security measures for PostgreSQL deployments',
    content: 'Learn how to secure your PostgreSQL instances with authentication, encryption, role management, and compliance standards...',
    lastUpdated: '2023-06-22',
    tags: ['security', 'postgresql', 'compliance']
  },
  {
    id: 3,
    title: 'MongoDB Indexing Strategies',
    type: 'Tutorial',
    category: 'MongoDB',
    path: '/tutorials/mongodb-indexing',
    description: 'Advanced indexing techniques for MongoDB',
    content: 'Master MongoDB indexing patterns including single field, compound, multikey, and special index types for optimal query performance...',
    lastUpdated: '2023-04-10',
    tags: ['mongodb', 'performance', 'indexing']
  },
  {
    id: 4,
    title: 'Database Connection Pooling in Node.js',
    type: 'Code Example',
    category: 'JavaScript',
    path: '/examples/node-connection-pooling',
    description: 'Implementing efficient database connections in Node.js applications',
    content: 'This example demonstrates how to properly configure and manage database connection pools in Node.js applications...',
    lastUpdated: '2023-07-05',
    tags: ['nodejs', 'connection-pooling', 'performance']
  }
];

/**
 * Simulates a content search API call
 * @param {string} query - The search term
 * @param {Object} [options] - Search options
 * @param {number} [options.limit] - Maximum number of results to return
 * @param {string[]} [options.contentTypes] - Filter by content types
 * @param {string[]} [options.categories] - Filter by categories
 * @returns {Promise<Array>} - Array of search results
 */
const searchContent = async (query, options = {}) => {
  // Simulate network delay (remove in production)
  await new Promise(resolve => setTimeout(resolve, 150));
  
  try {
    if (!query || typeof query !== 'string') {
      throw new Error('Invalid search query');
    }

    const { limit, contentTypes, categories } = options;
    const normalizedQuery = query.toLowerCase().trim();

    // Filter content based on search criteria
    let results = contentDatabase.filter(item => {
      // Check content type filter if provided
      if (contentTypes && !contentTypes.includes(item.type)) {
        return false;
      }
      
      // Check category filter if provided
      if (categories && !categories.includes(item.category)) {
        return false;
      }

      // Search in title, description, content, and tags
      return (
        item.title.toLowerCase().includes(normalizedQuery) ||
        (item.description && item.description.toLowerCase().includes(normalizedQuery)) ||
        item.content.toLowerCase().includes(normalizedQuery) ||
        (item.tags && item.tags.some(tag => tag.toLowerCase().includes(normalizedQuery)))
      );
    });

    // Apply limit if specified
    if (limit && limit > 0) {
      results = results.slice(0, limit);
    }

    // Format results for consistency
    return results.map(item => ({
      id: item.id,
      title: item.title,
      type: item.type,
      category: item.category,
      path: item.path,
      description: item.description || item.content.substring(0, 150) + '...',
      lastUpdated: item.lastUpdated,
      tags: item.tags || []
    }));

  } catch (error) {
    console.error('Search error:', error);
    throw error; // Re-throw to allow error handling in components
  }
};

export { searchContent };