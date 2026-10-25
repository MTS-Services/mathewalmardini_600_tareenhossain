import App from "../App";
import Layout from "../layout/Layout";
import About from "../views/about/About";

export default function AboutPage({ pathname }) {
  return (
    <App>
      <Layout pathname={pathname}>
        <About />
      </Layout>
    </App>
  );
}
