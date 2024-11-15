"use client";

import React from "react";
import { FiAlignLeft, FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import { useNavContext } from "@/Providers/useNavContext";

const NavToggleButton = () => {
  const { isNavOpen, setIsNavOpen } = useNavContext();
  return (
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
  );
};

export default NavToggleButton;
