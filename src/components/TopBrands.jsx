import React from "react";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import Marquee from "react-fast-marquee";

const TopBrands = () => {
  const navigate = useNavigate();
  const handleCart = (brandId) => {
    navigate(`/brandDetails/${brandId}`);
  }
  const brands = [
    {
      _id: 1,
      brand_name: "Daraz",
      brand_logo: "https://i.ibb.co.com/S0L29pW/daraz-bangladesh.jpg",
      shop_Link: "https://www.daraz.com.bd",
      category: "E-commerce",
      isSaleOn: true,
    },
    {
      _id: 2,
      brand_name: "Foodpanda",
      brand_logo: "https://i.ibb.co.com/6WDG178/foodpanda-logo-RGB-stacked.png",
      shop_Link: "https://www.foodpanda.com.bd",
      category: "Food Delivery",
      isSaleOn: true,
    },
    {
      _id: 4,
      brand_name: "Rokomary",
      rating: 4.7,
      description: "Get groceries delivered to your home.",
      brand_logo: "https://i.ibb.co.com/vdNLHjm/1583844005259.jpg",
  
      shop_Link: "https://www.chaldal.com",
      category: "Groceries",
      isSaleOn: true,
    },
  ];


  return (
    <div className=" bg-base-200 p-12 pb-20 mt-16">
      <div className="text-center md:w-1/2 mx-auto mb-8">
        <h1 className="text-3xl font-semibold">Top Brands</h1>
        <p className="text-gray-600 pt-2">
          Discover the most popular and trusted brands in various categories.
        </p>
      </div>

      <div className="grid  md:grid-cols-3 gap-8 mt-8">
        {brands.map((brand) => (
          <div onClick={()=>handleCart(brand._id)}
            className="border cursor-pointer rounded-lg shadow-md p-4 flex flex-col items-center"
            key={brand._id}
            brand={brand}
          >
            <img
              src={brand.brand_logo}
              alt={brand.brand_name}
              className="w-24 h-24 mt-4 object-cover rounded-full border-4 mb-4"
            />
            <h2 className="text-lg font-semibold mb-2">{brand.brand_name}</h2>
            <p className="text-sm mb-2 text-center">Category: {brand.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBrands;



