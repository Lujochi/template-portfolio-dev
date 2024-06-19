import PageTransition from "../components/PageTransition";
import ImgTransition from "../components/ImgTransition";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

// Componente do cursor piscando
const Cursor = () => {
  const [visible, setVisible] = useState(true);

  // Efeito para fazer o cursor piscar a cada 500ms
  useEffect(() => {
    const interval = setInterval(() => {
      setVisible((prevVisible) => !prevVisible);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return <span>{visible ? "|" : " "}</span>;
};

// Componente que simula a digitação do texto
const TypingEffect = ({ text }) => {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  // Efeito para simular a digitação do texto
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        setIsTyping(false); // Definir isTyping como false quando a digitação estiver concluída
      }
    }, 150); // Intervalo de 100ms entre cada caractere

    return () => clearInterval(interval);
  }, [text]);

  return (
    <>
      <span>{displayText}</span>
      {isTyping && <Cursor />}{" "}
      {/* Mostrar o cursor apenas se estiver digitando */}
    </>
  );
};

TypingEffect.propTypes = {
  text: PropTypes.string.isRequired,
};

const Home = () => {
  return (
    <main>
      <div id="main-container">
        <PageTransition>
          <section>
            <div className="main-title">
              <div className="main-txt">
                <span>Hi all. I am</span>
                <h1>Luan Jose Chiodini</h1>
                <h2>
                  <i className="ri-arrow-right-s-line"></i>
                  <TypingEffect text="Front-end Developer" />
                </h2>
              </div>
              <div className="lines-of-code">
                <span>{"// complete the game to continue"}</span>
                <span>{"// you can also see it on my Github page"}</span>
                <p>
                  <span>const </span>
                  <span>githubLink </span>=
                  <a href="https://github.com/Lujochi" target="_blank">
                    {" https://github.com/Lujochi"}
                  </a>
                </p>
              </div>
            </div>
          </section>
        </PageTransition>
        <ImgTransition>
          <div className="img-logo">
            <picture>
              <img src="/src/assets/perfil.jpg" alt="Logo Perfil" />
              <i className="ri-close-circle-fill" id="i1"></i>
              <i className="ri-close-circle-fill" id="i2"></i>
              <i className="ri-close-circle-fill" id="i3"></i>
              <i className="ri-close-circle-fill" id="i4"></i>
              <img src="/src/assets/Background.png" alt="Background" />
            </picture>
          </div>
        </ImgTransition>
      </div>
    </main>
  );
};

export default Home;
