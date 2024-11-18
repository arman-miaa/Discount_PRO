import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";


const BrandsSlide = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('/collection.json')
      .then(res => res.json())
    .then(data=>setImages(data))
  },[])
  console.log(images);
  return (
    <div>
      brand slide
      <div className="border-2 flex">
        <button className="btn">All Category</button>
        <Marquee pauseOnHover={true} speed={50}>
          <div className="flex justify-between gap-8">
            {images.map((image) => (
              <div className=" bg-blue-300" key={image._id} image={image}>
                <img className="w-20 h-12" src={image.brand_logo} alt="" />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default BrandsSlide;