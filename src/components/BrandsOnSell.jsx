import React, { useEffect, useState } from "react";

const BrandsOnSell = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch("/collection.json") 
      .then((res) => res.json())
      .then((data) => {
        const filteredBrands = data.filter((brand) => brand.isSaleOn); 
        setBrands(filteredBrands);
      });
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Brands on Sell</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {brands.map((brand) => (
          <div
            key={brand._id}
            className="border rounded-lg shadow-md p-4 flex flex-col items-center"
          >
            <img
              src={brand.brand_logo}
              alt={brand.brand_name}
              className="w-24 h-24 object-cover mb-4"
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
