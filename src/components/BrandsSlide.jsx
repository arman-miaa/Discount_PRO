import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Marquee from "react-fast-marquee";

const BrandsSlide = () => {
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/collection.json")
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, []);

  const handleLogoClick = (brandId) => {
    navigate(`/brandDetails/${brandId}`);
  };

  return (
    <div className=" bg-base-200 mt-16 py-12">
      <h2 className="text-3xl font-semibold text-center mb-4">
        Brand Highlights
      </h2>
      <p className="text-center text-gray-600 mb-6 md:w-1/2 mx-auto">
        Explore all brand logos in a smooth scrolling marquee. Hover to pause
        the motion, and click on a logo to view detailed brand information.
      </p>
      <div className="border-2 flex items-center">
        {/* <button className="btn">All Categories</button> */}
        <Marquee pauseOnHover={true} speed={100}>
          <div className="flex gap-16">
            {images.map((image) => (
              <div
                className="cursor-pointer bg-blue-300 p-2 rounded shadow-md"
                key={image._id}
                onClick={() => handleLogoClick(image._id)}
              >
                <img
                  className="w-28 h-12 object-contain"
                  src={image.brand_logo}
                  alt={image.brand_name || "Brand Logo"}
                />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default BrandsSlide;
