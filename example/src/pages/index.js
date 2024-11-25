import React from "react";


import Layout from "../components/layout";
import SEO from "../components/seo";

class IndexPage extends React.Component {
  _handleClick() {
    // Invoke `window.analytics.track` and send any
    // add'l properties you'd like to send
    window.analytics.track("Track Event Fired", {
      plugin: "gatsby-plugin-segment",
      author: "Ben Hoffman",
      href: "https://github.com/skynettechnologies/all-in-one-accessibility"
    });

    console.log(`
          Check your network tab of your dev tools...
          you should see the track call there. And if
          you put in the correct API keys, you should also
          see the track event show up in your Segment account.
      `);
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        {/* Here is where we invoke our Segment track event
                via a click handler on Gatsby's <Link/> component */}
          <header className="site-header">
              <div className="container">
                  <div className="row align-items-center">

                      <div className="col-lg-3 col-md-5 col-7">
                          <p className="text-white mb-0">
                              <i className="bi-clock site-header-icon me-2"></i>
                              Mon-Fri 10:00-19:00
                          </p>
                      </div>

                      <div className="col-lg-2 col-md-3 col-5">
                          <p className="text-white mb-0">
                              <a href="tel: 240-480-9600" className="text-white">
                                  <i className="bi-telephone site-header-icon me-2"></i>
                                  240-480-9600
                              </a>
                          </p>
                      </div>

                      <div className="col-lg-3 col-md-3 col-12 ms-auto">
                          <ul className="social-icon">
                              <li><a href="https://facebook.com/tooplate" className="social-icon-link bi-facebook"></a></li>

                              <li><a href="https://pinterest.com/tooplate" className="social-icon-link bi-pinterest"></a></li>

                              <li><a href="https://twitter.com/minthu" className="social-icon-link bi-twitter"></a></li>

                              <li><a href="https://www.youtube.com/tooplate" className="social-icon-link bi-youtube"></a></li>
                          </ul>
                      </div>

                  </div>
              </div>
          </header>

          <nav className="navbar navbar-expand-lg bg-white shadow-lg">
              <div className="container">

                  <a href="#" className="navbar-brand">Waso <span className="text-danger">Strategy</span></a>

                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                          aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>

                  <div className="collapse navbar-collapse" id="navbarNav">
                      <ul className="navbar-nav ms-auto">
                          <li className="nav-item">
                              <a className="nav-link click-scroll" href="">
                                  <small className="small-title"><strong className="text-warning">01</strong></small> Home</a>
                          </li>

                          <li className="nav-item">
                              <a className="nav-link click-scroll" href="">
                                  <small className="small-title"><strong className="text-warning">02</strong></small> About</a>
                          </li>

                          <li className="nav-item">
                              <a className="nav-link click-scroll" href="">
                                  <small className="small-title"><strong
                                  className="text-warning">03</strong></small> Services</a>
                          </li>

                          <li className="nav-item">
                              <a className="nav-link click-scroll" href="">
                                  <small className="small-title"><strong
                                  className="text-warning">04</strong></small> Projects</a>
                          </li>

                          <li className="nav-item">
                              <a className="nav-link click-scroll" href="">
                                  <small className="small-title"><strong className="text-warning">05</strong></small> Contact</a>
                          </li>
                      </ul>
                  </div>
              </div>

          </nav>

          <main>

              <section className="hero">
                  <div className="container-fluid h-100">
                      <div className="row h-100">

                          <div id="carouselExampleCaptions" className="carousel carousel-fade hero-carousel slide" data-bs-ride="carousel">
                              <div className="carousel-inner">
                                  <div className="carousel-item active">
                                      <div className="container position-relative h-100">
                                          <div className="carousel-caption d-flex flex-column justify-content-center">
                                              <small className="small-title">Introducing Waso Strategy <strong className="text-warning">01/05</strong></small>

                                              <h1>Explore <span className="text-warning">new ideas</span> for your business</h1>

                                              <div className="d-flex align-items-center mt-4">
                                                  <a className="custom-btn btn custom-link" href="#section_2">Get Started</a>

                                                  <a className="popup-youtube custom-icon d-flex ms-4" href="https://www.youtube.com/watch?v=AYaHuZ4BB6Y">
                                                      <i className="bi-play play-icon d-flex m-auto text-white"></i>
                                                  </a>
                                              </div>
                                          </div>
                                      </div>

                                      <div className="carousel-image-wrap">
                                          <img src="images/slide/christina-wocintechchat-com-NDoVgcS_lZM-unsplash.jpg" className="img-fluid carousel-image" alt="" />
                                      </div>
                                  </div>

                                  <div className="carousel-item">
                                      <div className="container position-relative h-100">
                                          <div className="carousel-caption d-flex flex-column justify-content-center">
                                              <small className="small-title">Supporting New Project <strong className="text-warning">01/05</strong></small>

                                              <h1>Strategic Planning for your <span className="text-warning">next project</span></h1>

                                              <div className="d-flex align-items-center mt-4">
                                                  <a className="custom-btn btn custom-link" href="#section_2">Explore Capabilities</a>

                                                  <a className="popup-youtube custom-icon d-flex ms-4" href="https://www.youtube.com/watch?v=VStvZjykQ00">
                                                      <i className="bi-play play-icon d-flex m-auto text-white"></i>
                                                  </a>
                                              </div>
                                          </div>
                                      </div>

                                      <div className="carousel-image-wrap">
                                          <img src="images/slide/jason-goodman-0K7GgiA8lVE-unsplash.jpg" className="img-fluid carousel-image" alt="" />
                                      </div>
                                  </div>

                                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                      <span className="visually-hidden">Previous</span>
                                  </button>

                                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                      <span className="visually-hidden">Next</span>
                                  </button>
                              </div>
                          </div>

                      </div>
                  </div>
              </section>


              <section className="about section-padding" id="section_2">
                  <div className="container">
                      <div className="row">

                          <div className="col-lg-6 col-12 mb-5 mb-lg-0">
                              <div className="about-image-wrap h-100">
                                  <img src="images/peter-jones-WZROBIlY8Rg-unsplash.jpg" className="img-fluid about-image" alt="" />

                                      <div className="about-image-info">
                                          <h4 className="text-white">William Smith, CEO</h4>

                                          <p className="text-white mb-0">You can freely use Waso Strategy for your website project. Thank you for visiting Tooplate.</p>
                                      </div>
                              </div>
                          </div>

                          <div className="col-lg-6 col-12 d-flex flex-column">
                              <div className="about-thumb bg-white shadow-lg">

                                  <div className="about-info">
                                      <small className="small-title">About <strong className="text-warning">02/05</strong></small>

                                      <h2 className="mb-3">Who We Are</h2>

                                      <h5 className="mb-3">Your trusted partner in business growth and innovation.</h5>

                                      <p>Since our founding in 2010, Pinnacle Consulting has been dedicated to transforming challenges into opportunities for businesses worldwide.
                                          We specialize in delivering actionable strategies, expert advice, and creative solutions tailored to your unique needs.</p>

                                      <p>You may support a little PayPal donation to Tooplate by visiting our <a href="https://www.tooplate.com/contact">contact page</a>. Thank
                                          you.</p>
                                  </div>
                              </div>

                              <div className="row h-100">
                                  <div className="col-lg-6 col-6">
                                      <div className="about-thumb d-flex flex-column justify-content-center bg-danger mb-lg-0 h-100">

                                          <div className="about-info">
                                              <h5 className="text-white mb-4">We`re growing business dolor</h5>

                                              <a className="custom-btn btn custom-bg-primary" href="#section_3">Join us</a>
                                          </div>
                                      </div>
                                  </div>

                                  <div className="col-lg-6 col-6">
                                      <div className="about-thumb d-flex flex-column justify-content-center bg-warning mb-lg-0 h-100">

                                          <div className="about-info">
                                              <h5 className="text-white mb-4">How did you about us?</h5>

                                              <p className="text-white mb-0">Lorem ipsum dolor sit consectetur</p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>

                      </div>
                  </div>
              </section>

              <section className="services section-padding" id="section_3">
                  <div className="container">
                      <div className="row">

                          <div className="col-lg-10 col-12 text-center mx-auto mb-5">
                              <small className="small-title">Services <strong className="text-warning">03/05</strong></small>

                              <h2>How can we help you?</h2>

                          </div>

                          <div className="col-lg-6 col-12">
                              <nav>
                                  <div className="nav nav-tabs flex-column align-items-baseline" id="nav-tab" role="tablist">
                                      <button className="nav-link active" id="nav-business-tab" data-bs-toggle="tab" data-bs-target="#nav-business" type="button" role="tab"
                                              aria-controls="nav-business" aria-selected="true">
                                          <h3>Business Consulting</h3>

                                          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore</span>
                                      </button>

                                      <button className="nav-link" id="nav-strategy-tab" data-bs-toggle="tab" data-bs-target="#nav-strategy" type="button" role="tab"
                                              aria-controls="nav-strategy" aria-selected="false">
                                          <h3>Strategy Planning</h3>

                                          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore</span>
                                      </button>

                                      <button className="nav-link" id="nav-video-tab" data-bs-toggle="tab" data-bs-target="#nav-video" type="button" role="tab"
                                              aria-controls="nav-video" aria-selected="false">
                                          <h3>Video Content</h3>

                                          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore</span>
                                      </button>
                                  </div>
                              </nav>
                          </div>

                          <div className="col-lg-6 col-12">
                              <div className="tab-content" id="nav-tabContent">
                                  <div className="tab-pane fade show active" id="nav-business" role="tabpanel" aria-labelledby="nav-intro-tab">
                                      <img src="images/services/young-entrepreneurs-mature-investor-watching-presentation-discussing-project.jpg" className="img-fluid" alt="" />

                                          <h5 className="mt-4 mb-2">Introduction to Business Consulting</h5>

                                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore</p>

                                          <ul>
                                              <li>Helping small businesses</li>

                                              <li>Lorem ipsum dolor sit amet</li>

                                              <li>Business Strategy and Management</li>
                                          </ul>
                                  </div>

                                  <div className="tab-pane fade show" id="nav-strategy" role="tabpanel" aria-labelledby="nav-strategy-tab">
                                      <img src="images/services/startup-leader-drawing-flowchart-board-discussing-project.jpg" className="img-fluid" alt="" />

                                          <h5 className="mt-4 mb-2">Strategy Planning</h5>

                                          <div className="row">
                                              <div className="col-lg-6 col-12">
                                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore</p>
                                              </div>

                                              <div className="col-lg-6 col-12">
                                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore</p>
                                              </div>
                                          </div>
                                  </div>

                                  <div className="tab-pane fade show" id="nav-video" role="tabpanel" aria-labelledby="nav-video-tab">
                                      <img src="images/services/portrait-smiling-african-american-young-woman-holding-movie-production-blackboard.jpg" className="img-fluid" alt="" />

                                          <h5 className="mt-4 mb-2">Video Content</h5>

                                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore</p>
                                  </div>


                              </div>
                          </div>

                      </div>
                  </div>
              </section>

              <section className="projects section-padding pb-0" id="section_4">
                  <div className="container">
                      <div className="row">

                          <div className="col-lg-10 col-12 text-center mx-auto mb-5">
                              <small className="small-title">Projects <strong className="text-warning">04/05</strong></small>

                              <h2>Brands we`ve crafted so far</h2>
                          </div>

                          <div className="col-lg-4 col-12">
                              <div className="projects-thumb projects-thumb-small">
                                  <a href="project-detail.html">
                                      <img src="images/projects/pj-gal-szabo-CIXXIWxxec4-unsplash.jpg" className="img-fluid projects-image" alt="" />

                                          <div className="projects-info">
                                              <div className="projects-title-wrap">
                                                  <small className="projects-small-title">Business</small>

                                                  <h2 className="projects-title">MCL Group</h2>
                                              </div>

                                              <div className="projects-btn-wrap mt-4">
                                            <span className="custom-btn btn">
                                                <i className="bi-arrow-right"></i>
                                            </span>
                                              </div>
                                          </div>
                                  </a>
                              </div>
                          </div>

                          <div className="col-lg-4 col-12">
                              <div className="projects-thumb projects-thumb-small">
                                  <a href="project-detail.html">
                                      <img src="images/projects/team-fredi-FN3vmVee2sI-unsplash.jpg" className="img-fluid projects-image" alt="" />

                                          <div className="projects-info">
                                              <div className="projects-title-wrap">
                                                  <small className="projects-small-title">Strategy Planning</small>

                                                  <h2 className="projects-title">Fredi</h2>
                                              </div>

                                              <div className="projects-btn-wrap mt-4">
                                            <span className="custom-btn btn" href="project-detail.html">
                                                <i className="bi-arrow-right"></i>
                                            </span>
                                              </div>
                                          </div>
                                  </a>
                              </div>
                          </div>

                          <div className="col-lg-4 col-12">
                              <div className="projects-thumb projects-thumb-small">
                                  <a href="project-detail.html">
                                      <img src="images/projects/vmsign-x9yGe7wnvKQ-unsplash.jpg" className="img-fluid projects-image" alt="" />

                                          <div className="projects-info">
                                              <div className="projects-title-wrap">
                                                  <small className="projects-small-title">Video Content</small>

                                                  <h2 className="projects-title">Banana</h2>
                                              </div>

                                              <div className="projects-btn-wrap mt-4">
                                            <span className="custom-btn btn" href="project-detail.html">
                                                <i className="bi-arrow-right"></i>
                                            </span>
                                              </div>
                                          </div>
                                  </a>
                              </div>
                          </div>

                          <div className="col-lg-8 col-12">
                              <div className="projects-thumb projects-thumb-large">
                                  <a href="project-detail.html">
                                      <img src="images/projects/evangeline-shaw-nwLTVwb7DbU-unsplash.jpg" className="img-fluid projects-image" alt="" />

                                          <div className="projects-info">
                                              <div className="projects-title-wrap">
                                                  <small className="projects-small-title">Video Content</small>

                                                  <h2 className="projects-title">Conference</h2>
                                              </div>

                                              <div className="projects-btn-wrap mt-4">
                                            <span className="custom-btn btn" href="project-detail.html">
                                                <i className="bi-arrow-right"></i>
                                            </span>
                                              </div>
                                          </div>
                                  </a>
                              </div>
                          </div>

                          <div className="col-lg-4 col-12">
                              <div className="projects-thumb projects-thumb-small">
                                  <a href="project-detail.html">
                                      <img src="images/projects/tangerine-newt-AKH4OVEmILc-unsplash.jpg" className="img-fluid projects-image" alt="" />

                                          <div className="projects-info">
                                              <div className="projects-title-wrap">
                                                  <small className="projects-small-title">Business</small>

                                                  <h2 className="projects-title">Maldon</h2>
                                              </div>

                                              <div className="projects-btn-wrap mt-4">
                                            <span className="custom-btn btn" href="project-detail.html">
                                                <i className="bi-arrow-right"></i>
                                            </span>
                                              </div>
                                          </div>
                                  </a>
                              </div>
                          </div>

                      </div>
                  </div>
              </section>

              <section className="contact" id="section_5">

                  <div className="contact-container-wrap">
                      <div className="container">
                          <div className="row">

                              <div className="col-lg-6 col-12">
                                  <form className="custom-form contact-form" action="" method="post" role="form">
                                      <small className="small-title">Contact <strong className="text-white">05/05</strong></small>

                                      <h2 className="mb-5">Say Hi to us</h2>

                                      <div className="row">
                                          <div className="col-lg-6 col-md-6 col-12">
                                              <input type="text" name="name" id="name" className="form-control" placeholder="Your Name" required="" />
                                          </div>

                                          <div className="col-lg-6 col-md-6 col-12">
                                              <input type="email" name="email" id="email" pattern="[^ @]*@[^ @]*" className="form-control" placeholder="your@company.com"
                                                     required="" />
                                          </div>

                                          <div className="col-12">
                                              <textarea className="form-control" rows="7" id="message" name="message" placeholder="Message"></textarea>

                                              <button type="submit" className="form-control">Submit</button>
                                          </div>

                                      </div>
                                  </form>
                              </div>

                              <div className="col-lg-6 col-12">
                                  <div className="contact-thumb">

                                      <div className="contact-info bg-white shadow-lg">
                                          <h4 className="mb-4">1340 Atwater St, Detroit, MI 48207</h4>

                                          <h4 className="mb-2">
                                              <a href="tel: 240-480-9600">
                                                  <i className="bi-telephone contact-icon me-2"></i>
                                                  240-480-9600
                                              </a>
                                          </h4>

                                          <h5>
                                              <a href="mailto:info@company.com" className="footer-link">
                                                  <i className="bi-envelope-fill contact-icon me-2"></i>
                                                  info@company.com
                                              </a>
                                          </h5>



                                          <iframe className="google-map mt-4"
                                                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4063.103580426464!2d-83.0264337484065!3d42.33402597908653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b2cce05ddf4f1%3A0xcc0559eb3fda00c9!2sDetroit%20Riverwalk%2C%20Detroit%2C%20MI!5e1!3m2!1sen!2sus!4v1657814406289!5m2!1sen!2sus"
                                                  width="100%" height="300" allowFullScreen="" loading="lazy"></iframe>

                                      </div>
                                  </div>
                              </div>

                          </div>
                      </div>
                  </div>
              </section>

          </main>

          <footer className="site-footer">
              <div className="container">
                  <div className="row">

                      <div className="col-lg-6 col-12">
                          <div className="site-footer-wrap d-flex align-items-center">
                              <p className="copyright-text mb-0 me-4">Copyright © 2036 Waso Strategy Co., Ltd.</p>

                              <ul className="social-icon">
                                  <li><a href="https://facebook.com/tooplate" className="social-icon-link bi-facebook"></a></li>

                                  <li><a href="https://pinterest.com/tooplate" className="social-icon-link bi-pinterest"></a></li>

                                  <li><a href="https://twitter.com/minthu" className="social-icon-link bi-twitter"></a></li>

                                  <li><a href="https://www.youtube.com/tooplate" className="social-icon-link bi-youtube"></a></li>
                              </ul>

                          </div>
                      </div>

                      <div className="col-lg-6 col-12">
                          <p className="copyright-text mb-0 me-4">Waso HTML Template is designed by
                              <a href="https://www.tooplate.com/" target="_blank" rel="noreferrer">Tooplate</a></p>
                      </div>

                  </div>
              </div>
          </footer>

      </Layout>
    );
  }
}

export default IndexPage;
