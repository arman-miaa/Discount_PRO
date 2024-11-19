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
    <div>
      <h2 className="text-xl font-semibold">Brand Slide</h2>
      <div className="border-2 flex items-center">
        <button className="btn">All Category</button>
        <Marquee pauseOnHover={true} speed={50}>
          <div className="flex justify-between gap-8">
            {images.map((image) => (
              <div
                className="cursor-pointer bg-blue-300 p-2"
                key={image._id}
                onClick={() => handleLogoClick(image._id)} 
              >
                <img
                  className="w-20 h-12"
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
