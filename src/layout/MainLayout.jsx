import { Outlet } from "react-router-dom";
import Header from "../pages/Shared/Header";
import Footer from "../pages/Shared/Footer";

const MainLayout = () => {
  return (
    <div className="w-9/12 mx-auto">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
