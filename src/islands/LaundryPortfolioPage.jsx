import App from "../App";
import Layout from "../layout/Layout";
import LaundryPortfolio from "../views/laundry_portfolio/LaundryPortfolio";

export default function LaundryPortfolioPage({ pathname }) {
  return (
    <App>
      <Layout pathname={pathname}>
        <LaundryPortfolio />
      </Layout>
    </App>
  );
}
