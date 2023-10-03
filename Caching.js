const _ = require('lodash');
const memoizedBlogStats = _.memoize(computeBlogStats, (query) => query);

function computeBlogStats(query) {
  // Calculate and return blog statistics here
}

// Inside the '/api/blog-stats' route handler
const query = req.query.query || '';
const cachedStats = memoizedBlogStats(query);
res.json(cachedStats);
