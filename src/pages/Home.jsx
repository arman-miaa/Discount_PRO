import Banner from "../components/Banner";
import BrandsSlide from "../components/BrandsSlide";
import TopBrands from "../components/TopBrands";



const Home = () => {
    return (
        <div className="container mx-auto py-4">
            <Banner></Banner>
            <TopBrands></TopBrands>

            <BrandsSlide></BrandsSlide>
        </div>
    );
};

export default Home;