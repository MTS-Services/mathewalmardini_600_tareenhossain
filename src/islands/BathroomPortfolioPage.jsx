import App from "../App";
import Layout from "../layout/Layout";
import BathroomPortfolio from "../views/bathroom_portfolio/BathroomPortfolio";

export default function BathroomPortfolioPage({ pathname }) {
  return (
    <App>
      <Layout pathname={pathname}>
        <BathroomPortfolio />
      </Layout>
    </App>
  );
}
