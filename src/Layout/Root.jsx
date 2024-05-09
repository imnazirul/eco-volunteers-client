import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";

const Root = () => {
  return (
    <>
      <div className="overflow-x-hidden">
        <div className="space-y-5 lg:space-y-10">
          <div className="container mx-auto font-roboto px-5 lg:px-10 ">
            <Navbar></Navbar>
            <Outlet></Outlet>
          </div>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
};

export default Root;
