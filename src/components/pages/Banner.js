import React from 'react'
import './Banner.css';

const Banner = () => {
  return (
    <section className="sec_banner">
        <div className="container">
          <div className="row">
            {/* <!-- <div className="banner_img"> --> */}
              <div className="col-lg-12 text-center banner_title">
                <h1 className="">Sewa Mobil di (Lokasimu) Sekarang</h1>
                <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                
                {/* <!-- <div className="button_banner"> --> */}
                  <button className="btn_banner">Mulai Sewa Mobil</button>
                  {/* <!-- </div> --> */}
                </div>
              {/* <!-- </div> --> */}
          </div>
        </div>
      </section>
  )
}

export default Banner