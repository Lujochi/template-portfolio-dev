import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const Cursor = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible((prevVisible) => !prevVisible);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return <span>{visible ? "|" : " "}</span>;
};

const TypingEffect = ({ text }) => {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 150);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <>
      <span>{displayText}</span>
      {isTyping && <Cursor />}{" "}
    </>
  );
};

TypingEffect.propTypes = {
  text: PropTypes.string.isRequired,
};

const Home = () => {
  return (
    <main>
      <div className="main-container">
        <section>
          <div className="text-container">
            <div className="title-container">
              <p>Hi all. I am</p>
              <h1>Luan Jose Chiodini</h1>
              <h2>
                <i className="ri-arrow-right-s-line"></i>
                <TypingEffect text="Front-end developer" />
              </h2>
            </div>
            <div className="description-container">
              <p>{"// complete the game to continue"}</p>
              <p>{"// you can also see it on my GitHub page"}</p>
              <div className="code-link-github">
                <span>const</span>
                <span>githubLink</span>
                <span>=</span>
                <a href="https://github.com/Lujochi">
                  {`"https://github.com/Lujochi"`}
                </a>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="img-container">
            <img
              src="/src/assets/images/perfil.jpg"
              alt="Logo"
              width={"500px"}
            />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
