"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

export const ProjectContext = createContext(null);
export const ProjectProvider = ({ children }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const value = { isNavOpen, setIsNavOpen };
  return (
    <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>
  );
};
