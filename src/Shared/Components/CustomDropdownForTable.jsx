"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import { FiMoreVertical } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { checkPermissions } from "@/Utils/CheckPermission";
import { formatRole } from "@/Utils/formatRole";
const CustomDropDownForTable = ({
  fullData,
  index,
  isDataLoading,
  isShareDataLoading,
  data,
  actions,
  disabled,
  name,
  isDeleteDisabled = false,
  getFullDataToActionHandler = false,
}) => {
  const permissions = localStorage.getItem("permissions");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <span className={`relative inline-block text-left mt-2`} ref={dropdownRef}>
      <button
        data-auto={`custom-dropdown-for-table-toggle-all-page`}
        disabled={disabled}
        onClick={toggleDropdown}
        className="text-primary"
      >
        {isOpen ? (
          <>
            <RxCross2 className="text-xl text-red-500 hidden md:block" />
            <button
              className={`btn btn-error btn-xs w-16 text-base-300 md:hidden`}
            >
              Close
            </button>
          </>
        ) : (
          <>
            <FiMoreVertical className="text-xl hidden md:block" />
            <button
              className={`btn btn-primary btn-xs w-16 text-base-300 md:hidden`}
            >
              Actions
            </button>
          </>
        )}
      </button>
      {isOpen && (
        <div
          className={` z-20 ${
            index >= 2 ? "bottom-[150%]" : "top-full"
          } absolute right-0 mt-2 w-60 rounded-md shadow-lg shadow-primary-content border border-primary text-primary bg-base-300 ring-opacity-5 focus:outline-none`}
        >
          {/* Dropdown content goes here */}
          <ul className="overflow-hidden">
            {actions.map((action, i) => (
              <Fragment key={i}>
                {checkPermissions(action?.permissions, permissions) &&
                  !(action.name === "delete" && isDeleteDisabled) && (
                    <li
                      data-auto={`custom-dropdown-for-table-li${
                        i + 1
                      }-all-page`}
                      onClick={() => {
                        console.log({ getFullDataToActionHandler });
                        action.handler(
                          getFullDataToActionHandler ? data : data?.id
                        );
                      }}
                      className={`hover:bg-primary hover:text-base-300 rounded-sm cursor-pointer opacity-100 h-5 px-2 py-4 flex items-center`}
                    >
                      <button
                        data-auto={`custom-dropdown-for-table-button${
                          i + 1
                        }-all-page`}
                        disabled={isDeleteDisabled && action.name === "delete"}
                        className={`w-full h-full flex gap-3 items-center `}
                      >
                        <action.Icon className={`text-lg`} />
                        {formatRole(action.name)}
                      </button>
                    </li>
                  )}
              </Fragment>
            ))}
          </ul>
        </div>
      )}
    </span>
  );
};

export default CustomDropDownForTable;