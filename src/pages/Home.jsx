import React from 'react'
import welcome from '../images/welcome.png'
import image1 from '../images/slide-3.jpg'
import image2 from '../images/slide-1.jpg'
import image3 from '../images/slide-2.jpg'
import stu5 from '../images/stu5.jpg'
import stu6 from '../images/stu6.jpg'
import stu3 from '../images/stu3.jpg'
import stu4 from '../images/stu4.jpg'


const Home = () => {
  return (
    <div>

      <section id="hero">
        <div id="heroCarousel" className="carousel slide carousel-fade" data-ride="carousel">

          <div className="carousel-inner" role="listbox">


            <div className="carousel-item active" >
              <img src={image1} alt="Student" style={{ width: '100%' }} />
              <div className="carousel-container">
                <div className="carousel-content animate__animated animate__fadeInUp">
                  <h2>Welcome to <span>Tech Care</span></h2>
                  <p>Tech Care Educational Initiatives - the largest educational conglomerate of Eastern India with 37 Institutions, 170 programmes and 39,000 students began its journey 24 years back. The journey, though not easy, has been quite a successful one.Tech Care was established through the Legislative Act of the Government of West Bengal, viz. Tech Talks Act, 2014 (West Bengal Act XXII of 2014) that came into force in February, 2015.</p>

                </div>
              </div>
            </div>

            <div className="carousel-item" >
              <img src={image2} alt="Student" style={{ width: '100%' }} />
              <div className="carousel-container">
                <div className="carousel-content animate__animated animate__fadeInUp">
                  <h2>OUR COURSES</h2>
                  <p>We provide instructions,teaching, training and research in specialized fields of Science,Engineering & Technology, Pharmacy, Management, Law, Education and Hospitality</p>

                </div>
              </div>
            </div>


            <div className="carousel-item">
              <img src={image3} alt="Student" style={{ width: '100%' }} />
              <div className="carousel-container">
                <div className="carousel-content animate__animated animate__fadeInUp">
                  <h2>ALLIANCE & PARTNERSHIPS</h2>
                  <p>Tie ups with different organization, foreign Universities. various Chamber of Commerce and trade bodies.</p>

                </div>
              </div>
            </div>

          </div>

          <a className="carousel-control-prev" href="#heroCarousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon icofont-simple-left" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>

          <a className="carousel-control-next" href="#heroCarousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon icofont-simple-right" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>

          <ol className="carousel-indicators" id="hero-carousel-indicators"></ol>

        </div>
      </section>

      <section id="pricing" className="pricing">
        <div className="section-title">
          <h2>Our Courses</h2>
        </div>
        <div className="container" data-aos="fade-up">

          <div className="row">

            <div className="col-lg-3 col-md-6">
              <div className="box">
                <h3>Laravel</h3>
                <h4><sup>$</sup>300<span> / 3 month</span></h4>
                <ul>
                  <li>Aida dere</li>
                  <li>Nec feugiat nisl</li>
                  <li>Nulla at volutpat dola</li>
                  <li className="na">Pharetra massa</li>
                  <li className="na">Massa ultricies mi</li>
                </ul>
                <div className="btn-wrap">
                  <a href="#" className="btn-buy">Apply</a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="box">
                <h3>Anguler</h3>
                <h4><sup>$</sup>500<span> / 5 month</span></h4>
                <ul>
                  <li>Aida dere</li>
                  <li>Nec feugiat nisl</li>
                  <li>Nulla at volutpat dola</li>
                  <li className="na">Pharetra massa</li>
                  <li className="na">Massa ultricies mi</li>
                </ul>
                <div className="btn-wrap">
                  <a href="#" className="btn-buy">Apply</a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="box">
                <h3>React Js</h3>
                <h4><sup>$</sup>650<span> / 5 month</span></h4>
                <ul>
                  <li>Aida dere</li>
                  <li>Nec feugiat nisl</li>
                  <li>Nulla at volutpat dola</li>
                  <li className="na">Pharetra massa</li>
                  <li className="na">Massa ultricies mi</li>
                </ul>
                <div className="btn-wrap">
                  <a href="#" className="btn-buy">Apply</a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="box">
                <h3>Node Js</h3>
                <h4><sup>$</sup>500<span> / 3 month</span></h4>
                <ul>
                  <li>Aida dere</li>
                  <li>Nec feugiat nisl</li>
                  <li>Nulla at volutpat dola</li>
                  <li className="na">Pharetra massa</li>
                  <li className="na">Massa ultricies mi</li>
                </ul>
                <div className="btn-wrap">
                  <a href="#" className="btn-buy">Apply</a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="fade-up">
              <div className="box">
                <h3>Python</h3>
                <h4><sup>$</sup>600<span> / 6 month</span></h4>
                <ul>
                  <li>Aida dere</li>
                  <li>Nec feugiat nisl</li>
                  <li>Nulla at volutpat dola</li>
                  <li className="na">Pharetra massa</li>
                  <li className="na">Massa ultricies mi</li>
                </ul>
                <div className="btn-wrap">
                  <a href="#" className="btn-buy">Apply</a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="fade-up">
              <div className="box">
                <h3>Java</h3>
                <h4><sup>$</sup>800<span> / 6 month</span></h4>
                <ul>
                  <li>Aida dere</li>
                  <li>Nec feugiat nisl</li>
                  <li>Nulla at volutpat dola</li>
                  <li className="na">Pharetra massa</li>
                  <li className="na">Massa ultricies mi</li>
                </ul>
                <div className="btn-wrap">
                  <a href="#" className="btn-buy">Apply</a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="fade-up">
              <div className="box">
                <h3>Mern Stack</h3>
                <h4><sup>$</sup>1500<span> / 12 month</span></h4>
                <ul>
                  <li>Aida dere</li>
                  <li>Nec feugiat nisl</li>
                  <li>Nulla at volutpat dola</li>
                  <li className="na">Pharetra massa</li>
                  <li className="na">Massa ultricies mi</li>
                </ul>
                <div className="btn-wrap">
                  <a href="#" className="btn-buy">Apply</a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="fade-up">
              <div className="box">
                <h3>Mean Stack</h3>
                <h4><sup>$</sup>1500<span> / 12 month</span></h4>
                <ul>
                  <li>Aida dere</li>
                  <li>Nec feugiat nisl</li>
                  <li>Nulla at volutpat dola</li>
                  <li className="na">Pharetra massa</li>
                  <li className="na">Massa ultricies mi</li>
                </ul>
                <div className="btn-wrap">
                  <a href="#" className="btn-buy">Apply</a>
                </div>
              </div>
            </div>

          </div>


        </div>

      </section>

      <section>
        <div className="section-title" data-aos="fade-up">
          <h2>Placed  Students</h2>
        </div>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\ndiv.gallery {\n  margin: 15px;\n  border: 1px solid #ccc;\n  float: left;\n  width: 280px;\n}\n\ndiv.gallery:hover {\n  border: 1px solid #777;\n}\n\ndiv.gallery img {\n  width: 100%;\n  height: auto;\n}\n\ndiv.desc {\n  padding: 15px;\n  text-align: center;\n}\n"
          }}
        />
        <div className="gallery" data-aos="fade-up">
          <a target="_blank">
            <img src={stu5} alt="Student" data-aos="fade-up" />
            <h5>Harry Potter</h5>
            <h6><strong>Company: </strong>TCS</h6>
            <h6><strong>Package: </strong>8LPA</h6>
          </a>
          <div><i className="bx bxs-quote-alt-left quote-icon-left"></i>best faculty in the world
          <i className="bx bxs-quote-alt-right quote-icon-right"></i></div>
        </div>
        <div className="gallery" data-aos="fade-up">
          <a target="_blank">
            <img src={stu6} alt="Student" data-aos="fade-up" />
            <h5>John Doe</h5>
            <h6><strong>Company: </strong>Webskitters</h6>
            <h6><strong>Package: </strong>6LPA</h6>
          </a>
          <div ><i className="bx bxs-quote-alt-left quote-icon-left"></i>best campus fesility 
          <i className="bx bxs-quote-alt-right quote-icon-right"></i>
          </div>
        </div>
        <div className="gallery" data-aos="fade-up">
          <a target="_blank">
            <img
              src={stu4}
              alt="Student"
              data-aos="fade-up"
            />
            <h5>Ian Somarholder</h5>
            <h6><strong>Company: </strong>Deloitte</h6>
            <h6><strong>Package: </strong>5LPA</h6>
          </a>
          <div ><i className="bx bxs-quote-alt-left quote-icon-left"></i>professors are so helpful
          <i className="bx bxs-quote-alt-right quote-icon-right"></i>
          </div>
        </div>
        <div className="gallery" data-aos="fade-up">
          <a target="_blank">
            <img src={stu3} alt="Student" data-aos="fade-up" />
            <h5>Nina Dobrev</h5>
            <h6><strong>Company: </strong>Accenture</h6>
            <h6><strong>Package: </strong>6LPA</h6>

          </a>
          <div >
          <i className="bx bxs-quote-alt-left quote-icon-left"></i>best in india
          <i className="bx bxs-quote-alt-right quote-icon-right"></i>
          </div>
        </div>

      </section>

      <section>
        <div className="container" data-aos="fade-up">

          <div className="section-title">
            <h2>Services</h2>
            <p>Laborum repudiandae omnis voluptatum consequatur mollitia ea est voluptas ut</p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
              <div className="icon-box iconbox-blue">
                <div className="icon">

                  <i className="bx bxl-dribbble"></i>
                </div>
                <h4><a href="">Lorem Ipsum</a></h4>
                <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
              <div className="icon-box iconbox-orange ">
                <div className="icon">

                  <i className="bx bx-file"></i>
                </div>
                <h4><a href="">Sed Perspiciatis</a></h4>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="300">
              <div className="icon-box iconbox-pink">
                <div className="icon">

                  <i className="bx bx-tachometer"></i>
                </div>
                <h4><a href="">Magni Dolores</a></h4>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="100">
              <div className="icon-box iconbox-yellow">
                <div className="icon">

                  <i className="bx bx-layer"></i>
                </div>
                <h4><a href="">Nemo Enim</a></h4>
                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="200">
              <div className="icon-box iconbox-red">
                <div className="icon">

                  <i className="bx bx-slideshow"></i>
                </div>
                <h4><a href="">Dele Cardo</a></h4>
                <p>Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
              <div className="icon-box iconbox-teal">
                <div className="icon">

                  <i className="bx bx-arch"></i>
                </div>
                <h4><a href="">Divera Don</a></h4>
                <p>Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur</p>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  )
}

export default Home