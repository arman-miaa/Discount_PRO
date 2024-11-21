import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = () => {
    return (
      <div>
        <div className="">
          <Header></Header>
        </div>

        <div className="min-h-[calc(100vh-344px)]">
          <Outlet></Outlet>
            </div>
            
        <Footer></Footer>
      </div>
    );
};

export default MainLayout;