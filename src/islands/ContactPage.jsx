import App from "../App";
import Layout from "../layout/Layout";
import Contact from "../views/contact/Contact";

export default function ContactPage({ pathname }) {
  return (
    <App>
      <Layout pathname={pathname}>
        <Contact />
      </Layout>
    </App>
  );
}
