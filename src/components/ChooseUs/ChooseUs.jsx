import {
  FaCalendarCheck,
  FaCar,
  FaMoneyBills,
  FaShieldHeart,
} from "react-icons/fa6";
const ChooseUs = () => {
  return (
    <div className="xl:py-24 lg:py-16 py-12 dark:bg-gray-900 dark:text-white">
      <div className="container mx-auto px-6 xl:px-3">
        <div className="text-center mb-8">
          <h2 data-aos="fade-up" data-aos-delay="100" className="text-3xl md:text-6xl font-bold font-rajdhani uppercase">
            WHY
            <span className="text-brand-primary dark:text-yellow-400">
              {" "}
              CHOOSE US
            </span>
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-6">
          <div data-aos="fade-up" data-aos-delay="200" className="p-4 md:p-5 flex flex-col hover:bg-brand-primary hover:text-white bg-white border shadow-sm rounded-xl hover:shadow-md transition duration-300 dark:bg-slate-900 dark:border-yellow-400 dark:hover:bg-yellow-400 dark:hover:text-gray-900">
            <div className="flex items-center flex-grow">
              <FaMoneyBills className="text-8xl" />
              <div className="grow ml-5">
                <h3 className=" font-bold font-rajdhani text-xl">
                  FINANCING MADE EASY
                </h3>
                <p className="text-base">
                  Our stress-free finance department that can find financial
                  solutions to save you money.
                </p>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="300" className="p-4 md:p-5 flex flex-col hover:bg-brand-primary hover:text-white bg-white border shadow-sm rounded-xl hover:shadow-md transition duration-300 dark:bg-slate-900 dark:border-yellow-400 dark:hover:bg-yellow-400 dark:hover:text-gray-900">
            <div className="flex items-center flex-grow">
              <FaCar className="text-8xl" />
              <div className="grow ml-5">
                <h3 className=" font-bold font-rajdhani text-xl">
                  WIDE RANGE OF BRANDS
                </h3>
                <p className="text-base">
                  With a robust selection of popular vehicles on hand, as well
                  as leading vehicles from BMW and Ford.
                </p>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="400" className="p-4 md:p-5 flex flex-col hover:bg-brand-primary hover:text-white bg-white border shadow-sm rounded-xl hover:shadow-md transition duration-300 dark:bg-slate-900 dark:border-yellow-400 dark:hover:bg-yellow-400 dark:hover:text-gray-900">
            <div className="flex items-center flex-grow">
              <FaShieldHeart className="text-8xl" />
              <div className="grow ml-5">
                <h3 className=" font-bold font-rajdhani text-xl">
                  TRUSTED BY THOUSANDS
                </h3>
                <p className="text-base">
                  10 new offers every day. 350 offers on site, trusted by a
                  community of thousands of users.
                </p>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="500" className="p-4 md:p-5 flex flex-col hover:bg-brand-primary hover:text-white bg-white border shadow-sm rounded-xl hover:shadow-md transition duration-300 dark:bg-slate-900 dark:border-yellow-400 dark:hover:bg-yellow-400 dark:hover:text-gray-900">
            <div className="flex items-center flex-grow">
              <FaCalendarCheck className="text-8xl" />
              <div className="grow ml-5">
                <h3 className=" font-bold font-rajdhani text-xl">
                  CAR SERVICE & MAINTENANCE
                </h3>
                <p className="text-base">
                  Our service department maintain your car to stay safe on the
                  road for many more years.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
