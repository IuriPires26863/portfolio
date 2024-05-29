import * as React from "react";
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css"; // Importando Bootstrap CSS
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

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

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 1000,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

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
                  <li class="nav-item active">
                    <a class="nav-link" href="/">
                      Home <span class="sr-only">(current)</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/aboutMe">
                      About me
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
          <div class="Hero text-center bg-image rounded-3 mb-4">
            <div
              class="mask h-100 p-5"
              style={{ backgroundColor: `rgba(0, 0, 0, 0.6)` }}
            >
              <div class="d-flex justify-content-center align-items-center h-100">
                <div class="text-white">
                  <h1 class="mb-5 Grand">
                    Hello! Welcome to <br />
                    my portfolio!
                  </h1>
                  <Button
                    class="btn btn-outline-light btn-lg mt-5"
                    onClick={handleOpen}
                  >
                    Email me
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Modal */}
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div>
                <h2 className="mt-5">Contact Me</h2>
                <div class="row justify-content-start">
                  <div class="card-body p-0">
                    <div class="row g-0">
                      <div class="col-sm-12 d-none d-sm-block"></div>
                      <div class="col-sm-12 p-4">
                        <div class="text-start"></div>

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
              </div>
            </Box>
          </Modal>

          {/* Hero */}

          <div class="container">
            <div class="row">
              <div class="col-sm-12">
                <p>
                  Filter by :
                  <button
                    type="button"
                    class="btn btn-secondary btn-xs btn-tag mx-2"
                  >
                    All
                  </button>
                  <button
                    type="button"
                    class="btn btn-secondary btn-xs btn-tag mx-2"
                  >
                    Individual Projects
                  </button>
                  <button
                    type="button"
                    class="btn btn-secondary btn-xs btn-tag mx-2"
                  >
                    Group Project
                  </button>
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-4 my-3" id="project1">
                <div class="panel panel-default">
                  <div class="Projeto">
                    <a href="/projeto1">
                      <img src={require("../img/projeto1.png")} />
                    </a>
                    <div class="fadedbox">
                      <div class="title text">Projeto1</div>
                    </div>
                  </div>
                  <div class="panel-footer tag">
                    <span class="label label-primary hidden">All</span>
                    <span class="label label-primary hidden">
                      Individual Projects
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-sm-4 my-3" id="project2">
                <div class="panel panel-default">
                  <div class="Projeto">
                    <a href="/projeto2">
                      <img src={require("../img/projeto2.png")} />
                    </a>
                    <div class="fadedbox">
                      <div class="title text">Projeto2</div>
                    </div>
                  </div>
                  <div class="panel-footer tag">
                    <span class="label label-primary hidden">All</span>
                    <span class="label label-primary hidden">
                      Individual Projects
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-sm-4 my-3" id="project3">
                <div class="panel panel-default">
                  <div class="Projeto">
                    <a href="/projeto3">
                      <img src={require("../img/projeto3.png")} />
                    </a>
                    <div class="fadedbox">
                      <div class="title text">Projeto3</div>
                    </div>
                  </div>
                  <div class="panel-footer tag">
                    <span class="label label-primary hidden">All</span>
                    <span class="label label-primary hidden">
                      Individual Projects
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-sm-4 my-3" id="project4">
                <div class="panel panel-default">
                  <div class="Projeto">
                    <a href="/projeto4">
                      <img src={require("../img/projeto4.png")} />
                    </a>
                    <div class="fadedbox">
                      <div class="title text">Projeto4</div>
                    </div>
                  </div>
                  <div class="panel-footer tag">
                    <span class="label label-primary hidden">All</span>
                    <span class="label label-primary hidden">
                      Individual Projects
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-sm-4 my-3" id="project5">
                <div class="panel panel-default">
                  <div class="Projeto">
                    <a href="/projeto5">
                      <img src={require("../img/projeto5.png")} />
                    </a>
                    <div class="fadedbox">
                      <div class="title text">Projeto5</div>
                    </div>
                  </div>
                  <div class="panel-footer tag">
                    <span class="label label-primary hidden">All</span>
                    <span class="label label-primary hidden">
                      Individual Projects
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-sm-4 my-3" id="project6">
                <div class="panel panel-default">
                  <div class="Projeto">
                    <a href="/projeto6">
                      <img src={require("../img/projeto6.png")} />
                    </a>
                    <div class="fadedbox">
                      <div class="title text">Projeto6</div>
                    </div>
                  </div>
                  <div class="panel-footer tag">
                    <span class="label label-primary hidden">All</span>
                    <span class="label label-primary hidden">
                      Individual Projects
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-sm-4 my-3" id="project7">
                <div class="panel panel-default">
                  <div class="Projeto">
                    <a href="/projeto7">
                      <img src={require("../img/projeto7.png")} />
                    </a>
                    <div class="fadedbox">
                      <div class="title text">Projeto7</div>
                    </div>
                  </div>
                  <div class="panel-footer tag">
                    <span class="label label-primary hidden">All</span>
                    <span class="label label-primary hidden">
                      Individual Projects
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-sm-4 my-3" id="project8">
                <div class="panel panel-default">
                  <div class="Projeto">
                    <a href="/projeto8">
                      <img src={require("../img/projeto8.png")} />
                    </a>
                    <div class="fadedbox">
                      <div class="title text">Projeto8</div>
                    </div>
                  </div>
                  <div class="panel-footer tag">
                    <span class="label label-primary hidden">All</span>
                    <span class="label label-primary hidden">
                      Individual Projects
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-sm-4 my-3" id="project9">
                <div class="panel panel-default">
                  <div class="Projeto">
                    <a href="/projeto9">
                      <img src={require("../img/projeto9.png")} />
                    </a>
                    <div class="fadedbox">
                      <div class="title text">Projeto9</div>
                    </div>
                  </div>
                  <div class="panel-footer tag">
                    <span class="label label-primary hidden">All</span>
                    <span class="label label-primary hidden">
                      Individual Projects
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-sm-4 my-3" id="project10">
                <div class="panel panel-default">
                  <div class="Projeto">
                    <a href="/projeto10">
                      <img src={require("../img/projeto10.png")} />
                    </a>
                    <div class="fadedbox">
                      <div class="title text">Projeto10</div>
                    </div>
                  </div>
                  <div class="panel-footer tag">
                    <span class="label label-primary hidden">All</span>
                    <span class="label label-primary hidden">
                      Individual Projects
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-sm-4 my-3" id="project11">
                <div class="panel panel-default">
                  <div class="Projeto">
                    <a href="/projeto11">
                      <img src={require("../img/projeto11.png")} />
                    </a>
                    <div class="fadedbox">
                      <div class="title text">Cinemax</div>
                    </div>
                  </div>
                  <div class="panel-footer tag">
                    <span class="label label-primary hidden">All</span>
                    <span class="label label-primary hidden">
                      Group Projects
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-sm-4 my-3" id="project12">
                <div class="panel panel-default">
                  <div class="Projeto">
                    <a href="/projeto12">
                      <img src={require("../img/projeto12.png")} />
                    </a>
                    <div class="fadedbox">
                      <div class="title text">Cinemax</div>
                    </div>
                  </div>
                  <div class="panel-footer tag">
                    <span class="label label-primary hidden">All</span>
                    <span class="label label-primary hidden">
                      Group Projects
                    </span>
                  </div>
                </div>
              </div>
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
