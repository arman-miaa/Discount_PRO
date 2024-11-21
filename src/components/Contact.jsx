import toast from "react-hot-toast";

const Contact = () => {

  const handleSubmitForm = () => {
    toast.success('Submited your feedback successfuly', {
      position:"top-center",
    })
  }

  return (
    <div className=" bg-base-200">
      <div className="mb-16 w-full  bg-base-200  "></div>
      <div className="text-center">
        <h1 className="text-3xl font-semibold text-center pt-12">
          Stay Connected and Share Your Feedback
        </h1>
        <p className="md:w-1/2 mx-auto mt-4 px-4 md:px-0">
          Connect with us on social media to stay updated on the latest gadgets
          and tech news. We welcome your feedback and are here to assist you.
          Use the contact form to share your thoughts, suggestions, or
          inquiries. Join our community of tech enthusiasts!
        </p>
      </div>
      {/* form */}
      <div className="hero mt-12 pb-12 rounded-xl">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center ">
            <i className="fa-regular fa-user text-8xl text-[#9538E2]"></i>
            <h1 className="text-4xl font-bold mt-8">
              Contact Us on Social Media
            </h1>
            <p className="py-6">
              Stay connected with us for the latest updates and gadget insights!
              Follow us across our social media channels and join our community
              of tech enthusiasts.
            </p>
            <div className="flex flex-wrap space-y-4  space-x-4 justify-center  items-center mb-16 lg:mb-0">
              <a
                href="https://facebook.com"
                target="_blank"
                className="flex items-center mt-[14px] justify-center w-24 rounded-lg text-xl lg:text-2xl  h-[44px]  bg-blue-600 text-white hover:bg-blue-700"
              >
                <i className="fab fa-facebook-f"></i>
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                className="flex items-center justify-center w-24 rounded-lg text-xl lg:text-2xl  h-[44px]  bg-blue-400 text-white hover:bg-blue-500"
              >
                <i className="fab fa-twitter"></i>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                className="flex items-center justify-center w-24 rounded-lg text-xl lg:text-2xl  h-[44px]  bg-pink-500 text-white hover:bg-pink-600"
              >
                <i className="fab fa-instagram"></i>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                className="flex items-center justify-center w-24 rounded-lg text-xl lg:text-2xl  h-[44px]  bg-blue-700 text-white hover:bg-blue-800"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                className="flex items-center justify-center w-24 rounded-lg text-xl lg:text-2xl  h-[44px]  bg-gray-700 text-white hover:bg-gray-800"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>

          <div className="card bg-base-100 w-full   shadow-2xl">
            <form onSubmit={handleSubmitForm} className="card-body">
              <h1 className="text-center underline text-2xl font-bold">
                Submit Form
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Massege</span>
                </label>
                <textarea
                  placeholder="Enter Your Message"
                  className="input input-bordered w-full h-36"
                  style={{ resize: "none" }}
                  required
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <button
                  className="btn bg-[#9538E2] text-white font-bold text-2xl"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
