import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";

const Conocenos: React.FC = () => {
  return (
    <div className="">
      <Navbar />
      <Main />
      {/* <hr className="my-6  sm:mx-auto dark:border-gray-700 lg:my-8" /> */}
        <Footer />
    
    </div>
  );
};

export default Conocenos;
