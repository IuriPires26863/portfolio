import React, { useEffect } from "react";
import $ from "jquery";
import Isotope from "isotope-layout";
import "bootstrap/dist/css/bootstrap.min.css"; // Importando Bootstrap CSS

export default function Homepage() {
  $(document).ready(function () {
    $(".btn-tag").click(function (eventObject) {
      var tag = $(this).html();
      var totalPanel = document.getElementsByClassName("panel").length;
      eventObject.preventDefault();
      for (var x = 1; x <= totalPanel; x++) {
        console.log("json: " + JSON.stringify($("#project" + x).html()));
        if (JSON.stringify($("#project" + x).html()).indexOf(tag) >= 0) {
          //console.log( JSON.stringify($("#project" + x ).html()) );
          $("#project" + x).hide();
          $("#project" + x).fadeIn();
        } else {
          $("#project" + x).hide();
        }
        //console.log(tag);
        //console.log(JSON.stringify($("#project" + x ).html()).indexOf(tag));
      }
      //console.log(tag);
    });
    //console.log("total panel: " + document.getElementsByClassName("panel").length );
  });

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
                  <li class="nav-item active">
                    <a class="nav-link" href="/aboutMe">
                      About me <span class="sr-only">(current)</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/projects">
                      Projects
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
          <div class="Hero2 text-center bg-image rounded-3 mb-4 container">
            <img src={require("../img/eu.JPG")} />
          </div>
          {/* Hero */}

          <div className="mx-auto container">
            <div>
              <p>
                Hello and Welcome to my portfolio! My name is{" "}
                <strong>Iúri Pires</strong>, I'm 25 years old and I'm
                Portuguese. I'm a University student and have the dream of
                becoming a <strong>Web Developer</strong>. In my studies I have
                learned <strong>Graphic and Web Design</strong> as well as some{" "}
                <strong>programing</strong> in <strong>C#</strong> and{" "}
                <strong>Javascript</strong>.
              </p>
            </div>
            <div className="mt-5">
              <h2>Experience</h2>
              <div class="card bg-light my-4">
                <div class="mx-3 my-3">
                  <h3>Collaborator</h3>
                </div>
                <div class="card-body pt-0">
                  <h5>
                    <strong>Compal + Sumol</strong>
                  </h5>
                  <p>jun of 2019 - set of 2020 · 1 year 4 months</p>
                  <p>
                    <strong>
                      Worked at the company "Compal + Sumol" as a temporary
                      worker.
                    </strong>
                  </p>
                </div>
              </div>
              <div class="card bg-light my-4">
                <div class="mx-3 my-3">
                  <h3>CTesp Design Digital</h3>
                </div>
                <div class="card-body pt-0">
                  <h5>
                    <strong>Instituto Politécnico de Santarém</strong>
                  </h5>
                  <p>out of 2020 - jul of 2022 · 1 year 10 months</p>
                  <p>
                    <strong>
                      Finished the CTesp in Digital Design, in “Escola Superior
                      de Educação do Instituto politécnico de Santarém”.
                    </strong>
                  </p>
                </div>
              </div>
              <div class="card bg-light my-4">
                <div class="mx-3 my-3">
                  <h3>Degree in technology and multimedia design</h3>
                </div>
                <div class="card-body pt-0">
                  <h5>
                    <strong>
                      Escola Superior de Gestão e Educação de Viseu
                    </strong>
                  </h5>
                  <p>set de 2022 - </p>
                  <p>
                    <strong>
                      Working on getting a degree in Technology and multimedia
                      design.
                    </strong>
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <h2>Skills</h2>
              <div className="mt-4 d-flex row mx-0">
                <div className="col-4 pe-4 ps-0 mb-4">
                  <p>Adobe Illustrator</p>
                  <div class="progress">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      aria-valuenow="70"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: 80 + "%", backgroundColor: "grey" }}
                    ></div>
                  </div>
                </div>
                <div className="col-4 pe-4 ps-0 mb-4">
                  <p>Adobe Photoshop</p>
                  <div class="progress">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      aria-valuenow="70"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: 70 + "%", backgroundColor: "grey" }}
                    ></div>
                  </div>
                </div>
                <div className="col-4 pe-4 ps-0 mb-4">
                  <p>Adobe After Effects</p>
                  <div class="progress">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      aria-valuenow="70"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: 70 + "%", backgroundColor: "grey" }}
                    ></div>
                  </div>
                </div>
                <div className="col-4 pe-4 ps-0 mb-4">
                  <p>Html + Css</p>
                  <div class="progress">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      aria-valuenow="70"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: 80 + "%", backgroundColor: "grey" }}
                    ></div>
                  </div>
                </div>
                <div className="col-4 pe-4 ps-0 mb-4">
                  <p>Javascript</p>
                  <div class="progress">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      aria-valuenow="70"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: 60 + "%", backgroundColor: "grey" }}
                    ></div>
                  </div>
                </div>
                <div className="col-4 pe-4 ps-0 mb-4">
                  <p>React</p>
                  <div class="progress">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      aria-valuenow="70"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: 50 + "%", backgroundColor: "grey" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="mt-5">Contact Me</h2>
              <div class="row justify-content-start">
                  <div class="card-body p-0">
                    <div class="row g-0">
                      <div class="col-sm-12 d-none d-sm-block"></div>
                      <div class="col-sm-12 p-4">
                        <div class="text-start">
                        </div>

                        {/* * * * * * * * * * * * * * *
          // * * SB Forms Contact Form * *
          // * * * * * * * * * * * * * * *

          // This form is pre-integrated with SB Forms.
          // To make this form functional, sign up at
          // https://startbootstrap.com/solution/contact-forms
          // to get an API token!
        */}

                        <form
                          id="contactForm"
                          action="https://usebasin.com/f/957952604065"
                          method="post"
                        >
                          {/* Name Input */}
                          <div class="form-floating mb-3">
                            <input
                              class="form-control"
                              id="name"
                              type="text"
                              name="name"
                              placeholder="Name"
                              data-sb-validations="required"
                            />
                            <label for="name">Name</label>
                            <div
                              class="invalid-feedback"
                              data-sb-feedback="name:required"
                            >
                              Name is required.
                            </div>
                          </div>

                          {/* Email Input */}
                          <div class="form-floating mb-3">
                            <input
                              class="form-control"
                              id="emailAddress"
                              type="email"
                              name="email"
                              placeholder="Email Address"
                              data-sb-validations="required,email"
                            />
                            <label for="emailAddress">Email Address</label>
                            <div
                              class="invalid-feedback"
                              data-sb-feedback="emailAddress:required"
                            >
                              Email Address is required.
                            </div>
                            <div
                              class="invalid-feedback"
                              data-sb-feedback="emailAddress:email"
                            >
                              Email Address Email is not valid.
                            </div>
                          </div>

                          {/* Message Input */}
                          <div class="form-floating mb-3">
                            <textarea
                              class="form-control"
                              id="message"
                              type="text"
                              name="message"
                              placeholder="Message"
                              style={{ height: 10 + "rem" }}
                              data-sb-validations="required"
                            ></textarea>
                            <label for="message">Message</label>
                            <div
                              class="invalid-feedback"
                              data-sb-feedback="message:required"
                            >
                              Message is required.
                            </div>
                          </div>

                          {/* Submit success message */}
                          <div class="d-none" id="submitSuccessMessage">
                            <div class="text-center mb-3">
                              <div class="fw-bolder">
                                Form submission successful!
                              </div>
                              <p>To activate this form, sign up at</p>
                              <a href="https://startbootstrap.com/solution/contact-forms">
                                https://startbootstrap.com/solution/contact-forms
                              </a>
                            </div>
                          </div>

                          {/*Submit error message */}
                          <div class="d-none" id="submitErrorMessage">
                            <div class="text-center text-danger mb-3">
                              Error sending message!
                            </div>
                          </div>

                          {/* Submit button */}
                          <div class="d-grid col-2 px-0">
                            <button
                              class="btn btn-secondary btn-lg"
                              id="submitButton"
                              type="submit"
                            >
                              Submit
                            </button>
                          </div>
                        </form>
                        {/* End of contact form */}
                      </div>
                  </div>
                </div>
              </div>

              {/* CDN Link to SB Forms Scripts */}
              <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
            </div>
          </div>

          <section class="col-12 d-flex pt-5 bg-light mt-4">
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

          <script src={""} async defer></script>
        </body>
      </html>
    </div>
  );
}
