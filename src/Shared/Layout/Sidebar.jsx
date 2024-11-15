"use client";
import Link from "next/link";
import { FiArrowRightCircle, FiUserPlus } from "react-icons/fi";
import { menus } from "@/Constant/menus";
import SidebarGenerator from "./Components/SidebarGenerator";
import CustomMenuLoading from "./Components/CustomMenuLoading";
import { useNavContext } from "@/Providers/useNavContext";

export default function Sidebar() {
  const { isLoading, handleOpenLoginPopup, handleOpenSignUpPopup } =
    useNavContext();
  const { isNavOpen } = useNavContext();

  return (
    <div
      className={`fixed z-[1000] transition-all  w-screen sm:w-[230px] group duration-300 ${
        isNavOpen
          ? "left-0 md:left-[20px]"
          : "left-[calc(-100vw)] sm:left-[-240px]"
      }  rounded-r-none md:rounded-xl overflow-y-auto scrollbar-none bg-base-300 shadow-xl text-base-100 flex-col  flex md:flex h-[calc(100vh-5rem)]`}
    >
      <div className={`border-b border-base-300`}>
        <Link
          data-cy={`every-page-dashboard-button-sidebar`}
          href={"/"}
          className={`justify-center w-full flex  bg-primary items-center py-4 px-2 gap-2`}
        >
          <span className={`text-base-300 text-center duration-300 font-bold`}>
            POS System
          </span>
        </Link>
      </div>

      <div
        className={`nav_menu flex flex-col gap-2 items-center md:items-start `}
      >
        {isLoading ? (
          <CustomMenuLoading />
        ) : (
          <>
            <SidebarGenerator links={menus()} isNested={false} />
            <>
              {false && (
                <>
                  <div
                    onClick={handleOpenSignUpPopup}
                    className={`cursor-pointer flex items-center w-full justify-start`}
                  >
                    <span
                      data-cy={`all-page-register-button-sidebar-menu-item`}
                      data-tip={`Register`}
                      className={` w-full transition-all font-semibold duration-200 flex items-center gap-3 justify-start py-3 px-5 text-primary`}
                    >
                      <span className={`inline-block `}>
                        <FiUserPlus className={`Icon text-2xl`} />
                      </span>

                      <span
                        className={` text-sm duration-300  border-base-100 break-words text-left`}
                      >
                        Register
                      </span>
                    </span>
                  </div>

                  <div
                    onClick={handleOpenLoginPopup}
                    className={`cursor-pointer flex items-center w-full justify-start`}
                  >
                    <span
                      data-cy={`all-page-register-button-sidebar-menu-item`}
                      data-tip={`Login`}
                      className={` w-full transition-all font-semibold duration-200 flex items-center gap-3 justify-start py-3 px-5 text-primary`}
                    >
                      <span className={`inline-block `}>
                        <FiArrowRightCircle className={`Icon text-2xl`} />
                      </span>

                      <span
                        className={` text-sm duration-300  border-base-100 break-words text-left`}
                      >
                        Login
                      </span>
                    </span>
                  </div>
                </>
              )}
            </>
          </>
        )}
      </div>
    </div>
  );
}
