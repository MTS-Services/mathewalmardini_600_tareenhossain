import App from "../App";
import Layout from "../layout/Layout";
import BathroomRenovation from "../views/bathroom_renovation/BathroomRenovation";

export default function BathroomRenovationPage({ pathname }) {
  return (
    <App>
      <Layout pathname={pathname}>
        <BathroomRenovation />
      </Layout>
    </App>
  );
}
