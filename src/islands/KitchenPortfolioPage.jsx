import App from "../App";
import Layout from "../layout/Layout";
import KitchenPortfolio from "../views/kitchen_portfolio/KitchenPortfolio";

export default function KitchenPortfolioPage({ pathname }) {
  return (
    <App>
      <Layout pathname={pathname}>
        <KitchenPortfolio />
      </Layout>
    </App>
  );
}
