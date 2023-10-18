import { FaCalendarCheck, FaCar, FaMoneyBills, FaShieldHeart } from "react-icons/fa6";
const ChooseUs = () => {
  return (
    <div className="py-24">
      <div className="container mx-auto px-3">
        <div className="text-center mb-8">
          <h2 className="text-6xl font-bold font-rajdhani uppercase">
            WHY
            <span className="text-brand-primary"> CHOOSE US</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-4 md:p-5 flex flex-col hover:bg-brand-primary hover:text-white bg-white border shadow-sm rounded-xl hover:shadow-md transition duration-300 dark:bg-slate-900 dark:border-gray-800">
            <div className="flex items-center">
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
          <div className="p-4 md:p-5 flex flex-col hover:bg-brand-primary hover:text-white bg-white border shadow-sm rounded-xl hover:shadow-md transition duration-300 dark:bg-slate-900 dark:border-gray-800">
            <div className="flex items-center">
              <FaCar className="text-8xl" />
              <div className="grow ml-5">
                <h3 className=" font-bold font-rajdhani text-xl">
                WIDE RANGE OF BRANDS
                </h3>
                <p className="text-base">
                With a robust selection of popular vehicles on hand, as well as leading vehicles from BMW and Ford.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 md:p-5 flex flex-col hover:bg-brand-primary hover:text-white bg-white border shadow-sm rounded-xl hover:shadow-md transition duration-300 dark:bg-slate-900 dark:border-gray-800">
            <div className="flex items-center">
              <FaShieldHeart className="text-8xl" />
              <div className="grow ml-5">
                <h3 className=" font-bold font-rajdhani text-xl">
                TRUSTED BY THOUSANDS
                </h3>
                <p className="text-base">
                10 new offers every day. 350 offers on site, trusted by a community of thousands of users.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 md:p-5 flex flex-col hover:bg-brand-primary hover:text-white bg-white border shadow-sm rounded-xl hover:shadow-md transition duration-300 dark:bg-slate-900 dark:border-gray-800">
            <div className="flex items-center">
              <FaCalendarCheck className="text-8xl" />
              <div className="grow ml-5">
                <h3 className=" font-bold font-rajdhani text-xl">
                CAR SERVICE & MAINTENANCE
                </h3>
                <p className="text-base">
                Our service department maintain your car to stay safe on the road for many more years.
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
