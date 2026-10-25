import App from "../App";
import Layout from "../layout/Layout";
import LaundryRenovation from "../views/laundry_renovation/LaundryRenovation";

export default function LaundryRenovationPage({ pathname }) {
  return (
    <App>
      <Layout pathname={pathname}>
        <LaundryRenovation />
      </Layout>
    </App>
  );
}
