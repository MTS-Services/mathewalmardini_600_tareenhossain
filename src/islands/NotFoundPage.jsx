import App from "../App";
import Layout from "../layout/Layout";
import BlogPost from "../views/blog/BlogPost";

// Unknown /blog/:slug shows BlogPost's "Article Not Found"; any other unknown URL stays blank
export default function NotFoundPage() {
  const { pathname } = window.location;
  const blogSlug = pathname.match(/^\/blog\/([^/]+)\/?$/)?.[1];

  return (
    <App>
      {blogSlug && (
        <Layout pathname={pathname}>
          <BlogPost slug={decodeURIComponent(blogSlug)} />
        </Layout>
      )}
    </App>
  );
}
