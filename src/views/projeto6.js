import { Unity, useUnityContext } from "react-unity-webgl";

export default function Projeto1() {
  return (
    <div>
      <html>
        <head>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <title>Iúri Pires</title>
          <meta name="description" content="" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href="../index.css" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
            crossorigin="anonymous"
          />
        </head>

        <body>
          <nav
            class="navbar navbar-expand-lg navbar-light bg-light align-middle col-12"
            style={{ height: 7 + "vh" }}
          >
            <div>
            <img
                        className="col-12"
                        src={require("../img/Logo.png")}
                        style={{width: 7 + "vh"}}
                      />
            </div>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="collapse navbar-collapse d-flex justify-content-end"
              id="navbarNav"
            >
              <ul class="navbar-nav">
                <div className="col-10 d-flex">
                  <li class="nav-item">
                    <a class="nav-link" href="/">
                      Home
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/aboutMe">
                      About me
                    </a>
                  </li>
                  <li class="nav-item active">
                    <a class="nav-link" href="/projects">
                      Projects <span class="sr-only">(current)</span>
                    </a>
                  </li>
                </div>
                <div class="d-flex align-items-center col-2">
                  <div className="d-flex">
                    <a
                      href="https://www.facebook.com/iuri.goncalves.18"
                      target="_blank"
                    >
                      <img
                        className="col-12"
                        src={require("../img/facebook_logo.png")}
                      />
                    </a>
                    <a
                      href="https://www.instagram.com/iuri_piris/"
                      target="_blank"
                    >
                      <img
                        className="col-12"
                        src={require("../img/instagram_logo.png")}
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/iuri-pires-551b41224/"
                      target="_blank"
                    >
                      <img
                        className="col-12"
                        src={require("../img/linkedin_logo.png")}
                      />
                    </a>
                    <a href="https://www.behance.net/iuripires" target="_blank">
                      <img
                        className="col-12"
                        src={require("../img/behance_logo.png")}
                      />
                    </a>
                  </div>
                </div>
              </ul>
            </div>
          </nav>

          {/* Hero */}
          <div class="HeroP">
            <iframe
              className="col-12"
              src="http://193.137.7.33/~aluno26863/ficha6/"
              allowFullScreen="true"
            ></iframe>
          </div>
          {/* Hero */}

          <main role="main" className="mx-auto col-10">
            <div class="row">
              <div class="col-md-12 blog-main">
                <div class="Data">
                  <h1 class="title">Projeto 6</h1>
                  <div className="d-flex justify-content-between">
                    <div class="mt-5 d-flex col-6 px-0">
                      <h3 className="my-auto">Date:</h3>
                      <p className="mx-3 my-auto">20/03/2024</p>
                    </div>
                    <div class="mt-5 d-flex col-6">
                      <h3 className="my-auto">School:</h3>
                      <p className="mx-3 my-auto">
                        Escola superior de Tecnologias e Gestão do Instituto
                        Politécnico de Viseu
                      </p>
                    </div>
                  </div>

                  <hr />
                  <p>
                  In this project, we started to further develop our scripts and create more advanced functions. 
                  To achieve this, we created a script that allows changing an element within limits that we implemented, 
                  so the element could display other desired elements.
                  </p>
                  <hr />
                  <h2>Tools Used</h2>
                  <div className="col-12 p-0 mt-3">
                    <div className="col-2 btn btn-secondary">Unity</div>
                     
                  </div>
                </div>
              </div>
            </div>
          </main>

          <section class="col-12 d-flex pt-5 bg-light mt-5">
            <div class="FooterText col-10 d-flex flex-column justify-content-start pb-5">
                <h2>Iúri Pires</h2>
                <h4>
                  University student with the dream of becoming a <br />
                  Web Developer and Web Designer.
                </h4>
            </div>
            <div className="col-2 d-flex mb-5">
              <div class="Social col-12 d-flex justify-content-center my-auto">
                <a
                  class="mx-1"
                  href="https://www.facebook.com/iuri.goncalves.18"
                  target="_blank"
                >
                  <img
                    src={require("../img/facebook_logo.png")}
                    style={{ width: 50 + "px" }}
                  />
                </a>
                <a
                  class="mx-1"
                  href="https://www.instagram.com/iuri_piris/"
                  target="_blank"
                >
                  <img
                    src={require("../img/instagram_logo.png")}
                    style={{ width: 50 + "px" }}
                  />
                </a>
                <a
                  class="mx-1"
                  href="https://www.linkedin.com/in/iuri-pires-551b41224/"
                  target="_blank"
                >
                  <img
                    src={require("../img/linkedin_logo.png")}
                    style={{ width: 50 + "px" }}
                  />
                </a>
                <a
                  class="mx-1"
                  href="https://www.behance.net/iuripires"
                  target="_blank"
                >
                  <img
                    src={require("../img/behance_logo.png")}
                    style={{ width: 50 + "px" }}
                  />
                </a>
              </div>
            </div>
          </section>
        </body>
      </html>
    </div>
  );
}
