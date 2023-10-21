import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsGoogle } from "react-icons/bs";
import { BiLogIn } from "react-icons/bi";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet-async";
const Register = () => {
  const { signIn, googleLogin, userProfile, theme } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const breadCrumbs = (
    <li>
      <span>{"Registration"}</span>
    </li>
  );
  const handleGoogleSignin = () => {
    googleLogin()
      .then(() => {
        toast.success("Successfully Login", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const profileUrl = e.target.profileUrl.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (password.length < 6) {
      return toast.warn("Password Must Have At Least 6 Characters Long", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (
      !/(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\-])/.test(password)
    ) {
      return toast.warn(
        "Password Must Have One Capital Letter & Special Character",
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
    } else {
      signIn(email, password)
        .then(() => {
          return userProfile(name, profileUrl);
        })
        .then(() => {
          toast.success("Successfully Registered", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          navigate(location?.state ? location.state : "/");
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };

  return (
    <div>
      <Helmet>
        <title>Register | Brand Byte</title>
      </Helmet>
      <Breadcrumbs
        image={'https://i.ibb.co/w6BCrSs/home-slider1.jpg'}
        name={"Registration"}
        breadCrumbs={breadCrumbs}
      ></Breadcrumbs>
      <div className="xl:py-24 lg:py-20 md:py-16 py-10 dark:bg-gray-900">
        <div className="container mx-auto px-6 lg:px-8 flex flex-col md:flex-row gap-8 items-center">
          <div
            data-aos="fade-right"
            data-aos-delay="100"
            className="md:w-1/2 w-full "
          >
            <div className="w-full hover:border-brand-primary duration-300 max-w-sm mx-auto p-4  bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
              <img
                className="w-48 mx-auto mb-2"
                src={theme === "light" ? 'https://i.ibb.co/0QL8D0s/logo.png' : 'https://i.ibb.co/tKrPXKk/logo-white.png'}
                alt="logo"
              />
              <h5 className="text-2xl mb-6 text-center font-rajdhani font-bold text-gray-900 dark:text-white">
                Sign up to our platform
              </h5>
              <form className="space-y-6" onSubmit={handleSignIn}>
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="username"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="name@gmail.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="profileUrl"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your profile photo
                  </label>
                  <input
                    type="text"
                    name="profileUrl"
                    id="profileUrl"
                    placeholder="profile url"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    
                  />
                </div>
                <button
                  type="submit"
                  className="w-full hover:scale-105 duration-300 text-white bg-blue-700 hover:bg-blue-800 focus:ring-0 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex items-center justify-center"
                >
                  <BiLogIn className="mr-2 text-xl" />
                  Create Account
                </button>
              </form>
              <button
                onClick={handleGoogleSignin}
                className="w-full hover:scale-105 duration-300 mt-4 text-white bg-gradient-to-r from-pink-500 to-yellow-500 focus:ring-0 focus:outline-none font-medium rounded-lg text-base px-5 py-2.5 text-center flex items-center justify-center"
              >
                <BsGoogle className="mr-2" />
                Sign up with Google
              </button>
              <div className="text-sm mt-4 font-medium text-gray-500 dark:text-gray-300">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-blue-700 hover:underline dark:text-blue-500"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 overflow-hidden">
            <img
              data-aos="fade-left"
              data-aos-delay="200"
              src="https://i.ibb.co/ngq6yhF/black-bmw-6.png"
              alt="car"
            />
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
