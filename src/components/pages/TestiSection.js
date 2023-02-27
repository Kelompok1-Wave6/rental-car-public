import React from 'react'
import './TestiSection.css';
import PeopleOne from '../asset/img_photo1.svg'
import Rate from '../asset/Rate.svg'
import Left from '../asset/left_btn.svg'
import Right from '../asset/right_btn.svg'

import PeopleTwo from '../asset/img_photo2.svg'
// import PeopleThree from '../asset/img_photo1.svg'

const TestiSection = () => {
  return (
    <section className="testi" id='testi'>
        <div className="testi_title">
          <h1 className="text_h1 mb-3">Testimonial</h1>
          <p className="text_p">Berbagai review positif dari para pelanggan kami</p>
        </div>

       
        <div className="testi_view">
          <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">

              <div className="carousel-item active">
                <div className="block mt-1">
                  <div className="row">
                    <div className="col-md-5">
                          <img className="img_area" src={PeopleOne} alt="people1"/>
                      </div>
                        
                        <div className="col-md-6">
                          <div className="testi_content">
                            <img className="mb-2" src={Rate} alt="rate"/>
                            <h1 className="mt-1">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br/> do eiusmod lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</h1>
                            <p>John Dee 32, Bromo</p>
                          </div>
                        </div>

                    </div>
                  </div>
                </div>

              <div className="carousel-item">
                <div className="block mt-1">
                  <div className="row">
                    <div className="col-md-5">
                          <img className="img_area" src={PeopleTwo} alt="people1"/>
                      </div>
                        
                        <div className="col-md-6">
                          <div className="testi_content">
                            <img className="mb-2" src={Rate} alt="rate"/>
                            <h1 className="mt-1">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br/> do eiusmod lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</h1>
                            <p>John Dee 32, Bromo</p>
                          </div>
                        </div>

                    </div>
                  </div>
                </div>

              <div className="carousel-item">
                <div className="block mt-1">
                  <div className="row">
                    <div className="col-md-5">
                          <img className="img_area" src={PeopleOne} alt="people1"/>
                      </div>
                        
                        <div className="col-md-6">
                          <div className="testi_content">
                            <img className="mb-2" src={Rate} alt="rate"/>
                            <h1 className="mt-1">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br/> do eiusmod lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</h1>
                            <p>John Dee 32, Bromo</p>
                          </div>
                        </div>

                    </div>
                  </div>
                </div>
              </div>
                      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                          <span className="carousel-control-prev-icon" aria-hidden="true">
                            <img src={Left} alt="" />
                          </span>
                          <span className="visually-hidden">Previous</span>
                      </button>

                      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true">
                        <img src={Right} alt="" />
                      </span>
                          <span className="visually-hidden">Next</span>
                      </button>
            </div>
          </div>
    
           

          {/* <div className="col-md-6">
      
          <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="testi_view">
                  <div className="row">
                    <div className="col-md-6 block">
                      <div className="img_box">
                        <div className="img_box_inner">
                          <img src={PeopleOne} alt="PeopleOne" />
                        </div>

                        <div className="col">
                              <div className="content">
                                <img src={Rate} alt="rate" />
                                <h1>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</h1>
                                <p>John Dee 32, Bromo</p>
                              </div>
                            </div>

                      </div>
                    </div>
              </div>
              <div className="carousel-item">
                <img src="..." className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src="..." className="d-block w-100" alt="..."/>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

          </div>

        </div>
       </div> */}
      
    
        </section>

  )
}

export default TestiSection