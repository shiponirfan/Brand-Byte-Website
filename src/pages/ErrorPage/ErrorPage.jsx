import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet-async";
const ErrorPage = () => {
  const { theme } = useContext(AuthContext);
  return (
    <div>
      <Helmet>
        <title>Error 404 | Brand Byte</title>
      </Helmet>
      <Navbar></Navbar>
      <div className="grid min-h-home-h px-4 dark:bg-gray-900 place-content-center">
        <div className="text-center">
          <img
            className="w-96"
            src={theme === "light" ? 'https://i.ibb.co/5GC7g1X/error.png' : 'https://i.ibb.co/b1pwZCD/errordark.png'}
            alt="error image"
          />

          <h2 className="text-2xl font-rajdhani font-bold tracking-tight text-gray-900 dark:text-yellow-400 sm:text-4xl">
            We can&apos;t find that page.
          </h2>

          <Link
            to="/"
            className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring-0"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
