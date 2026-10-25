import App from "../App";
import Layout from "../layout/Layout";
import ShopFitouts from "../views/shop_fitouts/ShopFitouts";

export default function ShopFitoutsPage({ pathname }) {
  return (
    <App>
      <Layout pathname={pathname}>
        <ShopFitouts />
      </Layout>
    </App>
  );
}
