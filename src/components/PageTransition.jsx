import { motion } from "framer-motion";
import PropTypes from "prop-types";

const imgVariants = {
  hidden: { x: "100%", opacity: 0 },
  visible: { x: "0%", opacity: 1 },
};

export const ImgTransition = ({ children }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={imgVariants}
      transition={{ duration: 1.5 }}
    >
      {children}
    </motion.div>
  );
};

ImgTransition.propTypes = {
  children: PropTypes.node.isRequired,
};

const textVariants = {
  hidden: { x: "-100%", opacity: 0 },
  visible: { x: "0%", opacity: 1 },
};

export const TextTransition = ({ children }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={textVariants}
      transition={{ duration: 1.5 }}
    >
      {children}
    </motion.div>
  );
};

TextTransition.propTypes = {
  children: PropTypes.node.isRequired,
};
