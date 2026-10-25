import App from "../App";
import Layout from "../layout/Layout";
import BookConsultation from "../views/book_consultation/BookConsultation";

export default function BookConsultationPage({ pathname }) {
  return (
    <App>
      <Layout pathname={pathname}>
        <BookConsultation />
      </Layout>
    </App>
  );
}
