import { useParams } from "react-router-dom";

const ContactDatails = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Agora leva cada 1 para uma page diferente pelo id: {id}</h1>
    </div>
  );
};

export default ContactDatails;
