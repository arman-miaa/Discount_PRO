import { Helmet } from "react-helmet";


const Loader = () => {
    return (
      <div className="flex justify-center items-center h-screen">
        <Helmet>
          <title>Discount PRO || Loader Page</title>
        </Helmet>
        <span className="loading loading-bars loading-md"></span>
      </div>
    );
};

export default Loader;