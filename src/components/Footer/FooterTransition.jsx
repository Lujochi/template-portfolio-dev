import { motion } from "framer-motion";
import PropTypes from "prop-types";

const footerVariants = {
  hidden: { y: "100%", opacity: 0 },
  visible: { y: "0%", opacity: 1 },
};

const FooterTransition = ({ children }) => {
  return (
    <motion.footer
      initial="hidden"
      animate="visible"
      variants={footerVariants}
      transition={{ duration: 2 }}
    >
      {children}
    </motion.footer>
  );
};

FooterTransition.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FooterTransition;
