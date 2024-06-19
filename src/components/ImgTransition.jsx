import { motion } from "framer-motion";
import PropTypes from "prop-types";

const pageVariants = {
  initial: { opacity: 0, x: 50 },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: -50 },
};

const pageTransition = {
  duration: 1,
};

const ImgTransition = ({ children }) => (
  <motion.div
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransition}
  >
    {children}
  </motion.div>
);

ImgTransition.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ImgTransition;
