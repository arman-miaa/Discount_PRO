import { useContext, useEffect } from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const BrandDetails = () => {
    const brand = useLoaderData();
    console.log(brand);
    const naviget = useNavigate();
    const { user } = useContext(AuthContext)
    
    

    useEffect(() => {
        if (!user) {
          return naviget("/login");
        }
    },[])
   
    return (
        <div>
            brand details.....
        </div>
    );
};

export default BrandDetails;