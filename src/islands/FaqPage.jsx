import App from "../App";
import Layout from "../layout/Layout";
import FAQ from "../views/faq/FAQ";

export default function FaqPage({ pathname }) {
  return (
    <App>
      <Layout pathname={pathname}>
        <FAQ />
      </Layout>
    </App>
  );
}
