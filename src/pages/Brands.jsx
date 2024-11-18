import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Brands = () => {
    // const { user } = useContext(AuthContext);
    // console.log(user);
    //  const  data  = useLoaderData();
    //  console.log(data);
    const [searchText, setSearchText] = useState("");
    const brands  = useLoaderData();
    console.log(brands);
 const handleSearch = (e) => {
     setSearchText(e.target.value);
     console.log(searchText);
 };

    return (
      <div className="container mx-auto py-4">
        <h1 className="text-3xl font-bold text-center mt-4">Brands</h1>
        <input
          type="text"
          placeholder="Search Brands..."
          className="input input-bordered  w-1/2 mx-auto my-4"
          onChange={handleSearch}
        />

        {/* carts */}
        <div className="grid grid-cols-1 gap-8">
          {brands.map((brand) => (
            <div key={brand._id}>
              <div className="bg-blue-200 p-6 rounded-xl border-2">
                {/* logo , name */}
                <div className="flex gap-6 items-center">
                  <img className="w-20" src={brand.brand_logo} alt="" />
                  <h2>{brand.brand_name}</h2>
                </div>
                {/* rating */}
                <div className="flex mt-4">
                  <p>⭐⭐⭐⭐☆</p>
                  <p>{brand.rating}</p>
                </div>
                <h3>{brand.description}</h3>
                {/* btn  */}
                <div className="flex items-center gap-4 mt-4">
                  <Link
                    to={`/brandDetails/${brand._id}`}
                    className="btn btn-primary"
                  >
                    View Coupons
                  </Link>

                  <div className="">
                    {brand?.isSaleOn ? (
                      <h3 className="btn btn-secondary">sale is on</h3>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Brands;