import App from "../App";
import Layout from "../layout/Layout";
import Portfolio from "../views/portfolio/Portfolio";

export default function PortfolioPage({ pathname }) {
  return (
    <App>
      <Layout pathname={pathname}>
        <Portfolio />
      </Layout>
    </App>
  );
}
