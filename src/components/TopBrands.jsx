import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";

const TopBrands = () => {
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
      _id: 3,
      brand_name: "Bikroy",
      brand_logo: "https://i.ibb.co.com/1zV6tf9/unnamed.webp",
      shop_Link: "https://www.bikroy.com",
      category: "Marketplace",
      isSaleOn: false,
    },
  ];


  return (
    <div>
      <h1 className="flex justify-center mt-4 text-4xl font-semibold bg-blue-300 p-4">
        Top Brands
      </h1>

      <div className="grid grid-cols-3">
        {brands.map((brand) => (
          <div key={brand._id} brand={brand}>
            <p>{brand.brand_name}</p>
            <p>{brand.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBrands;
