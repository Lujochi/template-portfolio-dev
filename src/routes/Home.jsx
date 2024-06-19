const Home = () => {
  return (
    <main>
      <div id="main-container">
        <section>
          <div className="main-title">
            <div className="main-txt">
              <span>Hi all. I am</span>
              <h1>Luan Jose Chiodini</h1>
              <h2>
                <i className="ri-arrow-right-s-line"></i>
                <span id="text"></span>
                <span id="cursor">|</span>
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
        <div className="img-logo">
          <picture>
            <img src="./assets/perfil.jpg" alt="Logo Perfil" />
            <i className="ri-close-circle-fill" id="i1"></i>
            <i className="ri-close-circle-fill" id="i2"></i>
            <i className="ri-close-circle-fill" id="i3"></i>
            <i className="ri-close-circle-fill" id="i4"></i>
            <img src="./assets/Background.png" alt="Background" />
          </picture>
        </div>
      </div>
    </main>
  );
};

export default Home;
