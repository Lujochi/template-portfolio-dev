import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";

const Contact = () => {
  return (
    <PageTransition>
      <div>
        <p>
          <Link to="/contact/1">Forma de contato 1</Link>
        </p>
        <p>
          <Link to="/contact/2">Forma de contato 2</Link>
        </p>
        <p>
          <Link to="/contact/3">Forma de contato 3</Link>
        </p>
      </div>
    </PageTransition>
  );
};

export default Contact;
