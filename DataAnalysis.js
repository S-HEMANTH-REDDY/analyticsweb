const _ = require('lodash');

// Inside the '/api/blog-stats' route handler
const totalBlogs = blogData.length;
const longestBlog = _.maxBy(blogData, (blog) => blog.title.length);
const blogsWithPrivacy = _.filter(blogData, (blog) =>
  _.includes(_.toLower(blog.title), 'privacy')
);
const uniqueTitles = _.uniqBy(blogData, 'title');

const statistics = {
  totalBlogs,
  longestBlog: longestBlog.title,
  blogsWithPrivacy: blogsWithPrivacy.length,
  uniqueTitles: uniqueTitles.map((blog) => blog.title),
};

res.json(statistics);
