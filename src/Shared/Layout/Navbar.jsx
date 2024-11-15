"use client";
import { useNavContext } from "@/Providers/useNavContext";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FiAlignLeft, FiX } from "react-icons/fi";
import { TiScissorsOutline } from "react-icons/ti";

export default function Navbar() {
  const { user, logout } = useNavContext();

  const { isNavOpen, setIsNavOpen } = useNavContext();
  const router = useRouter();

  const [profileToggle, setProfileToggle] = useState(false);
  // const location = useLocation();

  // useEffect(() => {
  //   setProfileToggle(false);
  // }, [location.pathname]);

  return (
    <motion.nav className="pl-4  w-full z-50 pr-8 md:rounded-[15px] shadow-md sm:shadow-sm h-20 flex items-center justify-between relative bg-base-300">
      <div className="hidden sm:flex flex-row w-full items-center justify-start gap-x-5 ">
        {/* toggle btn  */}
        <motion.button
          data-auto={`navbar-toggle-button-every-page`}
          className={`relative z-40 bg-transparent transition-all duration-300 w-10 h-10 block overflow-hidden

        `}
          onClick={() => {
            setIsNavOpen(!isNavOpen);
          }}
        >
          {isNavOpen ? (
            <FiX className={`text-4xl text-primary`} />
          ) : (
            <FiAlignLeft className={`text-4xl text-primary`} />
          )}
        </motion.button>
      </div>

      {/* LOGO  */}
      <Link
        data-auto={`navbar-logo-every-page`}
        href={`/`}
        data-tip={"Saloon Booking"}
        className={`w-full overflow-hidden tooltip duration-300 tooltip-bottom tooltip-primary hidden md:flex flex-col justify-start gap-x-5 items-center`}
      >
        <motion.div
          className={`flex`}
          initial={{ translateY: -100 }}
          animate={{ translateY: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <TiScissorsOutline size={40} />
        </motion.div>

        <motion.h1
          initial={{ translateY: 100 }}
          animate={{ translateY: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          data-auto={`navbar-logo-business-name-every-page`}
          className="text-lg  text-primary font-bold"
        >
          Saloon Booking
        </motion.h1>
      </Link>

      {/* MOBILE VIEW LOGO */}
      <Link
        data-auto={`navbar-mobile-logo-every-page`}
        href={`/`}
        data-tip={"Saloon Booking"}
        className="w-full  tooltip tooltip-bottom tooltip-primary flex justify-start sm:justify-center items-center md:hidden"
      >
        <motion.div
          className={`flex items-center gap-2`}
          initial={{ translateY: -100 }}
          animate={{ translateY: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <TiScissorsOutline size={40} />{" "}
          <span className={`text-xl font-bold`}>POS System</span>
        </motion.div>
      </Link>

      {/* <motion.div
        data-cy="header_profile_container"
        className="w-full flex justify-end items-center gap-x-8"
      >
        {user?.first_Name ? (
          <div data-cy="profile" className="flex items-center relative">
            PROFILE BUTTON
            <button
              data-auto={`navbar-profile-button-every-page`}
              className="flex relative tooltip tooltip-left tooltip-primary items-center gap-2"
              onClick={() => setProfileToggle(!profileToggle)}
            >
              <span className="ml-[0.1rem] animate-ping absolute inline-flex h-[90%] w-[90%] rounded-full bg-primary bg-opacity-60 opacity-75"></span>
              {user?.image ? (
                <div className="avatar">
                  <div className="w-10 ring ring-primary  rounded-full">
                    <img src={getFullImageLink(user?.image)} />
                  </div>
                </div>
              ) : (
                <div className="avatar placeholder">
                  <div className="bg-primary text-base-300 rounded-full w-10">
                    <span className="text-md font-medium">
                      {user?.first_Name?.slice(0, 1).toUpperCase()}
                      {user?.middle_Name
                        ? user?.middle_Name?.slice(0, 1).toUpperCase()
                        : ""}
                      {user?.last_Name?.slice(0, 1).toUpperCase()}
                    </span>
                  </div>
                </div>
              )}
            </button>
            PROFILE DROPDOWN
            <OutsideClickHandler
              onOutsideClick={() => {
                setProfileToggle(false);
              }}
              className={`absolute profileDropdown z-50 right-0  bg-base-200 w-auto mt-6 pt-5 overflow-hidden shadow-xl rounded-xl ${
                profileToggle ? "block top-10" : "hidden top-64"
              }`}
            >
              <div className="w-[270px] flex flex-col items-start">
                <div className="border-b border-primary-content pb-3 flex justify-between w-full px-5">
                  <button
                    data-auto={`navbar-profile-inside-button-every-page`}
                    className=" flex justify-start gap-3 items-center "
                    onClick={() => router.push("/profile")}
                  >
                    {user?.image ? (
                      <div className="avatar">
                        <div className="w-10 ring ring-primary  rounded-full">
                          <img src={getFullImageLink(user?.image)} />
                        </div>
                      </div>
                    ) : (
                      <div className="avatar placeholder">
                        <div className="bg-primary text-base-300 rounded-full w-10">
                          <span className="text-md font-medium">
                            {user?.first_Name?.slice(0, 1).toUpperCase()}
                            {user?.middle_Name
                              ? user?.middle_Name?.slice(0, 1).toUpperCase()
                              : ""}
                            {user?.last_Name?.slice(0, 1).toUpperCase()}
                          </span>
                        </div>
                      </div>
                    )}

                    <div className="flex flex-col gap-y-1 justify-start items-start">
                      <h1 className="leading-4  text-primary font-medium text-left">
                        {user?.first_Name}{" "}
                        {user?.middle_Name ? user?.middle_Name : ""}{" "}
                        {user?.last_Name}
                      </h1>
                      <span className="text-gray-500 text-xs font-light">
                        {user?.roles[0]?.name === "garage_owner"
                          ? "Business Owner"
                          : formatRole(user?.roles[0]?.name)}
                      </span>
                    </div>
                  </button>
                </div>
                <button
                  data-auto={`navbar-logout-button-every-page`}
                  className="px-5 group py-3 w-full text-left text-primary300 hover:bg-primary hover:text-base-300 flex items-center gap-3"
                  onClick={() => {
                    router.push("/all-notifications");
                  }}
                >
                  <TbBell className="text-xl" />
                  Notification
                </button>
                <button
                  data-auto={`navbar-logout-button-every-page`}
                  className="px-5 group py-3 w-full text-left text-red-500 hover:bg-red-500 hover:text-base-300 flex items-center gap-3"
                  onClick={logout}
                >
                  <TbLogout2 className="text-xl" />
                  Logout
                </button>
              </div>
            </OutsideClickHandler>
          </div>
        ) : (
          ""
        )}
      </motion.div> */}
    </motion.nav>
  );
}
