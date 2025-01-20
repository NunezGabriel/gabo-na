"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import TransitionOverlay from "./TrasitionOverlay";

export default function TransitionProvider({ children }) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsTransitioning(true); // Inicia la animación de entrada
    const timeout = setTimeout(() => {
      setIsTransitioning(false); // Inicia la animación de salida
    }, 700); // Tiempo total (entrada + pausa + salida)

    return () => clearTimeout(timeout);
  }, [pathname]); // Ejecutar cada vez que cambia la ruta

  return (
    <div>
      <TransitionOverlay isVisible={isTransitioning} />
      {!isTransitioning && children}
    </div>
  );
}
