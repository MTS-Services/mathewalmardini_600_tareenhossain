import App from "../App";
import Layout from "../layout/Layout";
import Home from "../views/homePage/Home";

export default function HomePage({ pathname }) {
  return (
    <App>
      <Layout pathname={pathname}>
        <Home />
      </Layout>
    </App>
  );
}
