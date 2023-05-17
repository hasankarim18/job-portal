import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";


const MainLayout = () => {
  
    return (
      <>
        <div className="container  mx-auto">
          <div className="ml-2 mr-2 sm:ml-0 sm:mr-0">
            <Header />
            <Outlet />
            <Footer />
          </div>
        </div>
      </>
    );
};

export default MainLayout;