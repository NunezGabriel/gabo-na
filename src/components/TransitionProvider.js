"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import TransitionOverlay from "./TrasitionOverlay";

const TransitionProvider = ({ children }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsTransitioning(true);
    const timeout = setTimeout(() => {
      setIsTransitioning(false);
    }, 800);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <>
      {isTransitioning && <TransitionOverlay isVisible={isTransitioning} />}
      {children}
    </>
  );
};

export default TransitionProvider;
