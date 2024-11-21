import { useState, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaStar, FaRegStar } from "react-icons/fa";

const Brands = () => {
  const [searchText, setSearchText] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState(searchText);
  const brands = useLoaderData();

 
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedSearch(searchText);
    }, 300); 

    return () => clearTimeout(timeoutId);
  }, [searchText]);

  const handleSearch = (e) => {
    setSearchText(e.target.value.toLowerCase());
  };

  const filteredBrands = brands.filter((brand) =>
    brand.brand_name.toLowerCase().includes(debouncedSearch)
  );

  return (
    <div className="container mx-auto py-8 px-4">
     
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6">
        Discover Your Favorite Brands
      </h1>

     
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search for Brands..."
          className="input input-bordered w-full md:w-2/3 lg:w-1/2 shadow focus:outline-none focus:ring-2 focus:ring-primary"
          onChange={handleSearch}
          value={searchText}
        />
      </div>

      
      {brands.length === 0 && (
        <div className="text-center text-gray-500">Loading...</div>
      )}

     
      <div className="space-y-6">
        {filteredBrands.length > 0 ? (
          filteredBrands.map((brand) => (
            <div
              key={brand._id}
              className="flex flex-col md:flex-row items-center bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
             
              <div className="w-full md:w-1/4 bg-gray-100 flex items-center justify-center p-6">
                <img
                  src={brand.brand_logo}
                  alt={brand.brand_name}
                  className="w-20 h-20 object-contain"
                />
              </div>

             
              <div className="w-full md:w-2/4 px-6 py-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  {brand.brand_name}
                </h2>
                <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                  {brand.description}
                </p>

             
                <div className="flex items-center mt-4">
                  {Array.from({ length: Math.floor(brand.rating) }).map(
                    (_, i) => (
                      <FaStar key={i} className="text-yellow-500 text-lg" />
                    )
                  )}
                  {brand.rating % 1 !== 0 && (
                    <FaRegStar className="text-yellow-500 text-lg" />
                  )}
                  <span className="ml-2 text-sm text-gray-500">
                    ({brand.rating.toFixed(1)})
                  </span>
                </div>
              </div>

             
              <div className="w-full md:w-1/4 flex flex-col items-center justify-center p-6">
                <Link
                  to={`/brandDetails/${brand._id}`}
                  className="btn btn-primary w-full text-center"
                >
                  View Coupons
                </Link>
                {brand?.isSaleOn && (
                  <p className="text-red-500 font-bold mt-4 animate-pulse">
                    Sale is On!
                  </p>
                )}
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
