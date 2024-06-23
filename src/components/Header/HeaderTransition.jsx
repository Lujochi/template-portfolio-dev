import { motion } from "framer-motion";
import PropTypes from "prop-types";

const headerVariants = {
  hidden: { y: "-100%", opacity: 0 },
  visible: { y: "0%", opacity: 1 },
};

const HeaderTransition = ({ children }) => {
  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={headerVariants}
      transition={{ duration: 2 }}
    >
      {children}
    </motion.header>
  );
};

HeaderTransition.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeaderTransition;
