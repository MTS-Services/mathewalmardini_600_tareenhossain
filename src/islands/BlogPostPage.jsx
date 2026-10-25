import App from "../App";
import Layout from "../layout/Layout";
import BlogPost from "../views/blog/BlogPost";

export default function BlogPostPage({ pathname, slug }) {
  return (
    <App>
      <Layout pathname={pathname}>
        <BlogPost slug={slug} />
      </Layout>
    </App>
  );
}
