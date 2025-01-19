"use client";

import { motion, AnimatePresence } from "framer-motion";

const TransitionOverlay = ({ isVisible }) => {
  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          initial={{ x: "-100%" }} // Comienza fuera de la pantalla (a la izquierda)
          animate={{ x: 0 }} // Se mueve hacia el centro
          exit={{ x: "100%" }} // Sale hacia la derecha
          transition={{ duration: 0.2, ease: "easeInOut" }} // Animación fluida
          className="fixed top-0 left-0 w-full h-full bg-[#69b3a2] z-[9999]"
        />
      )}
    </AnimatePresence>
  );
};

export default TransitionOverlay;
