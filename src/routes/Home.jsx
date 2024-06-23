const Home = () => {
  return (
    <main>
      <div className="main-container">
        <section>
          <div className="text-container">
            <div className="title-container">
              <p>Hi all. I am</p>
              <h1>Luan Jose Chiodini</h1>
              <h2>Front-end developer</h2>
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
