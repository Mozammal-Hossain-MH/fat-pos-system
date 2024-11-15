import { PiUsersBold } from "react-icons/pi";
export const menus = () => {
  return [
    {
      title: "Dashboard",
      link: "/",
      Icon: PiUsersBold,
      childrens: [],
      show: true,
    },
    {
      title: "User Management",
      link: "/users",
      Icon: PiUsersBold,
      show: true,
      childrens: [
        {
          title: "Expert",
          link: "/users",
          Icon: PiUsersBold,
          childrens: [],
          show: true,
        },
        {
          title: "Receptionist",
          link: "/receptionist",
          Icon: PiUsersBold,
          childrens: [],
          show: true,
        },
      ],
    },
  ];
};
