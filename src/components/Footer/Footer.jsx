import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="dark:from-gray-950 dark:to-gray-900 bg-gradient-to-r from-brand-primary to-blue-500 pt-16 lg:pt-24 pb-10  text-white">
      <div className="grid gap-10 row-gap-6 mx-auto container px-6 lg:px-8 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <Link to="/">
            <img
              className="w-64"
              src="/src/assets/images/logo-white.png"
              alt="logo"
            />
          </Link>
          <div className="mt-6 lg:max-w-sm">
            <p className="text-sm xl:text-base">
              Welcome to Brand Byte, your ultimate destination for a curated
              world of renowned brands. We pride ourselves in bringing you a
              diverse collection of exceptional products across the technology,
              electronics, and automotive spectrum.
            </p>
          </div>
        </div>
        <div className="space-y-2 text-sm xl:text-base">
          <p className="text-2xl mb-4 font-bold tracking-wide font-rajdhani">
            Contacts
          </p>
          <div className="flex">
            <p className="mr-1">Phone:</p>
            <a
              href="tel:+8801710467100"
              aria-label="Our phone"
              title="Our phone"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              +8801710467100
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 ">Email:</p>
            <a
              href="mailto:shiponirfan.dev@gmail.com"
              aria-label="Our email"
              title="Our email"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              shiponirfan.dev@gmail.com
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 ">Address:</p>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Our address"
              title="Our address"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Rangpur, Bangladesh
            </a>
          </div>
        </div>
        <div>
          <span className="text-2xl mb-4 font-bold tracking-wide font-rajdhani">
            Social
          </span>
          <div className="flex items-center  text-2xl mt-4 space-x-3">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/ShiponIrfan/"
            >
              <FaFacebook />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/ShiponIrfan"
            >
              <FaTwitter />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/shiponirfan/"
            >
              <FaInstagram />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/shiponirfan/"
            >
              <FaLinkedin />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.youtube.com/@shiponirfan"
            >
              <FaYoutube />
            </a>
          </div>
          <p className="mt-4 text-sm ">
            Brand Byte - Your Gateway to Renowned Brands. We celebrate
            excellence in technology, electronics, and automobiles. Explore the
            best with us.
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse items-center  mx-auto container px-6 lg:px-8 justify-between pt-10  border-t lg:flex-row">
        <p className="text-sm ">
          © Copyright 2023 Brand Byte. All rights reserved.
        </p>
        <ul className="flex gap-2 md:gap-0 mb-3  lg:mb-0  sm:space-x-5 ">
          <li>
            <span className="text-sm  transition-colors duration-300 hover:text-deep-purple-accent-400">
              F.A.Q
            </span>
          </li>
          <li>
            <span className="text-sm  transition-colors duration-300 hover:text-deep-purple-accent-400">
              Privacy Policy
            </span>
          </li>
          <li>
            <span className="text-sm  transition-colors duration-300 hover:text-deep-purple-accent-400">
              Terms &amp; Conditions
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
