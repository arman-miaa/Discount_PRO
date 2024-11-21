import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 
import Banner from "../components/Banner";
import BrandsOnSell from "../components/BrandsOnSell";
import BrandsSlide from "../components/BrandsSlide";
import TopBrands from "../components/TopBrands";
import Contact from "../components/Contact";
import Review from "../components/Review";
import { Helmet } from "react-helmet";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, 
      once: true, 
    });
  }, []);

  return (
    <div className="container mx-auto py-4">
      <Helmet>
        <title>Discount PRO || Home Page</title>
      </Helmet>
      <div data-aos="fade-up">
        <Banner />
      </div>
      <div data-aos="fade-down">
        <TopBrands />
      </div>
      <div data-aos="fade-up">
        <BrandsSlide />
      </div>
      <div data-aos="zoom-in">
        <BrandsOnSell />
      </div>
      {/* review */}
      <div data-aos="zoom-in">
        <Review></Review>
      </div>
      {/* Contact */}
      <div data-aos="zoom-in">
        <Contact></Contact>
      </div>
    </div>
  );
};

export default Home;
