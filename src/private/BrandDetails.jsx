import { useContext, useEffect } from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import CopyToClipboard from "react-copy-to-clipboard";
import toast, { Toaster } from "react-hot-toast";


const BrandDetails = () => {
    const brand = useLoaderData();
    // console.log(brand);
    const naviget = useNavigate();
    const { user } = useContext(AuthContext)
    
     const handleCopy = () => {
       toast.success("Coupon code copied successfully!");
     };
    

    useEffect(() => {
        if (!user) {
          return naviget("/login");
        }
    },[])
   
    return (
        <div className="container mx-auto py-8">
            <Toaster></Toaster>
        {/* brand name , Logo and rating */}
        <div className="flex flex-col border-2 py-8 justify-center items-center bg-base-200 ">
          <img className="w-36  object-cover border-2 rounded-xl" src={brand.brand_logo} alt="" />
          <h2 className="text-2xl font-semibold mt-4">{brand.brand_name}</h2>
          <p className="text-2xl mt-4">
            <span>⭐</span>
            {brand.rating}
          </p>
        </div>
        {/* cards */}
        <h2 className="text-2xl font-bold text-center mt-12">
          Available Coupons
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {brand.coupons.map((coupon, index) => (
            <div
              key={index}
              className="bg-gray-100 p-4 rounded-lg shadow-md border-2"
            >
              <h3 className="text-xl font-semibold mb-2">
                {coupon.description}
              </h3>
              <p>
                <strong>Code:</strong> {coupon.coupon_code}
              </p>
              <p>
                <strong>Condition:</strong> {coupon.condition}
              </p>
              <p>
                <strong>Expires:</strong> {coupon.expiry_date}
              </p>

            
              <CopyToClipboard text={coupon.coupon_code} onCopy={handleCopy}>
                <button className="btn btn-primary mt-4">Copy Code</button>
              </CopyToClipboard>

              
              <button
                className="btn btn-secondary ml-4 mt-4"
                onClick={() => window.open(brand.shop_Link, "_blank")}
              >
                Use Now
              </button>
            </div>
          ))}
        </div>
       
      </div>
    );
};

export default BrandDetails;

