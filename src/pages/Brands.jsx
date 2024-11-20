import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Brands = () => {
  const [searchText, setSearchText] = useState("");
  const brands = useLoaderData(); 

  const handleSearch = (e) => {
    setSearchText(e.target.value.toLowerCase()); 
  };


  const filteredBrands = brands.filter((brand) =>
    brand.brand_name.toLowerCase().includes(searchText)
  );

  return (
    <div className="container mx-auto py-4">
      <h1 className="text-3xl font-bold text-center mt-4">Brands</h1>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search Brands..."
        className="input input-bordered w-1/2 mx-auto my-4 block"
        onChange={handleSearch}
        value={searchText}
      />

      {/* Brands Grid */}
      <div className="grid grid-cols-1 gap-8">
        {filteredBrands.length > 0 ? (
          filteredBrands.map((brand) => (
            <div key={brand._id}>
              <div className="bg-blue-200 p-6 rounded-xl border-2">
                {/* Brand Logo and Name */}
                <div className="flex gap-6 items-center">
                  <img
                    className="w-20"
                    src={brand.brand_logo}
                    alt={brand.brand_name}
                  />
                  <h2 className="text-xl font-semibold">{brand.brand_name}</h2>
                </div>

                {/* Rating */}
                <div className="flex mt-4">
                  <p>⭐⭐⭐⭐☆</p>
                  <p>{brand.rating}</p>
                </div>

                {/* Description */}
                <h3 className="mt-2">{brand.description}</h3>

                {/* Buttons */}
                <div className="flex items-center gap-4 mt-4">
                  <Link
                    to={`/brandDetails/${brand._id}`}
                    className="btn btn-primary"
                  >
                    View Coupons
                  </Link>

                  {brand?.isSaleOn && (
                    <h3 className="btn btn-secondary">Sale is on</h3>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No brands found.</p>
        )}
      </div>
    </div>
  );
};

export default Brands;
