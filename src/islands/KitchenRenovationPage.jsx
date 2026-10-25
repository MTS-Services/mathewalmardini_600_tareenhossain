import App from "../App";
import Layout from "../layout/Layout";
import KitchenRenovation from "../views/kitchen_renovation/KitchenRenovation";

export default function KitchenRenovationPage({ pathname }) {
  return (
    <App>
      <Layout pathname={pathname}>
        <KitchenRenovation />
      </Layout>
    </App>
  );
}
