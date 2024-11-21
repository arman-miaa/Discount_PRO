import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const BrandsOnSell = () => {
  const [brands, setBrands] = useState([]);
  const navigate = useNavigate();
  const handleCartClick = (brandId) => {
    navigate(`/brandDetails/${brandId}`);
  };
  useEffect(() => {
    fetch("/collection.json")
      .then((res) => res.json())
      .then((data) => {
        const filteredBrands = data.filter((brand) => brand.isSaleOn);
        setBrands(filteredBrands);
      });
  }, []);

  return (
    <div className="py-8 mt-14">
      <div className="text-center md:w-1/2 mx-auto mb-8">
        <h1 className="text-3xl font-semibold">Brands on Sell</h1>
        <p className="text-gray-600 mt-2">
          Explore the brands with active coupon deals to save more!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {brands.map((brand) => (
          <div
            onClick={() => handleCartClick(brand._id)}
            key={brand._id}
            className="border rounded-lg cursor-pointer shadow-md mx-4 md:mx-0 p-4 flex flex-col items-center"
          >
            <img
              src={brand.brand_logo}
              alt={brand.brand_name}
              className="w-28 h-28 object-cover border-2 rounded-full mb-4"
            />
            <h2 className="text-lg font-semibold mb-2">{brand.brand_name}</h2>
            <p className="text-sm mb-2">Category: {brand.category}</p>
            <p className="text-sm mb-2">
              Total Coupons: {brand.coupons.length}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandsOnSell;
