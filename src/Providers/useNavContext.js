"use client";
import { useContext, useEffect } from "react";
import { ProjectContext } from "./ProjectProvider";

export const useNavContext = () => {
  const { isNavOpen, setIsNavOpen } = useContext(ProjectContext);

  // IF THE ROUTE IS CHANGED NEED TO CLOSE THE NAVIGATION
  useEffect(() => {
    setIsNavOpen(false);
  }, [window.location.href]);
  return {
    isNavOpen,
    setIsNavOpen,
  };
};
