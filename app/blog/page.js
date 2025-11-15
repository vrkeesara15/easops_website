import { BlogLanding } from '../../Components/BlogLanding.jsx';
import { blogPosts } from '../../Entities/blogposts.js';

export const metadata = {
  title: 'Blog'
};

export default function BlogPage() {
  return <BlogLanding posts={blogPosts} />;
}
