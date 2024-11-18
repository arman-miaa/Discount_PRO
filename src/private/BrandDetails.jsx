import { useLoaderData } from "react-router-dom";


const BrandDetails = () => {
    const brand = useLoaderData();
    console.log(brand);
    return (
        <div>
            brand details.....
        </div>
    );
};

export default BrandDetails;