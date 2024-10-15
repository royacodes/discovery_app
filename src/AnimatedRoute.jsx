import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

const AnimatedRoute = ({ children }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      {" "}
      {/* This ensures smooth transitions */}
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }} // Start with transparent (fade-in)
        animate={{ opacity: 1 }} // Fully visible (fade-out)
        exit={{ opacity: 0 }} // Fade-out on exit
        transition={{ duration: 0.25 }} // Adjust duration for smoother fade
        style={{ backgroundColor: "black", minHeight: "100vh" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimatedRoute;
