import { Routes, Route } from "react-router";
import Layout from "../layout/Layout";
import Home from "../pages/homePage/Home";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* Add more routes here - they will all have Header and Footer */}
      </Route>
    </Routes>
  );
};

export default AppRouter;
