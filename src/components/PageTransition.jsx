import { motion } from "framer-motion";
import PropTypes from "prop-types";

const pageVariants = {
  initial: { opacity: 0, x: -80 },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: 80 },
};

const pageTransition = {
  duration: 1,
};

const PageTransition = ({ children }) => (
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

PageTransition.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageTransition;
