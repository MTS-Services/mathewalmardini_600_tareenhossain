import App from "../App";
import Layout from "../layout/Layout";
import Blog from "../views/blog/Blog";

export default function BlogPage({ pathname }) {
  return (
    <App>
      <Layout pathname={pathname}>
        <Blog />
      </Layout>
    </App>
  );
}
