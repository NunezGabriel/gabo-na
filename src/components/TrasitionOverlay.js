"use client";

import { motion, AnimatePresence } from "framer-motion";

const TransitionOverlay = ({ isVisible }) => {
  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          initial={{ x: "-100%" }} // Inicia fuera de la pantalla (izquierda)
          animate={{
            x: 0, // Entra al centro
            transitionEnd: {
              x: 0, // Pausa en el centro
            },
          }}
          exit={{ x: "-100%" }} // Sale hacia la izquierda
          transition={{
            x: { duration: 0.3, ease: "easeInOut" }, // Entrada y salida suaves
            duration: 0.3, // Duración total
            delay: 0.1, // Pausa en el centro durante 0.7s
          }}
          className="fixed top-0 left-0 w-full h-full bg-[#69b3a2] z-[9999]"
        />
      )}
    </AnimatePresence>
  );
};

export default TransitionOverlay;
