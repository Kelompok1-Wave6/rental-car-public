import React from 'react'
import './OurserSection.css';
import LogoServis from '../asset/img_services.svg';
import Ceklis from '../asset/ceklis_services.svg';


const OurserSection = () => {
  return (
    <>
        <section className="our_services" id='ourservis'>
            <div className="container">
              <div className="row">
                <div className="col text-center">
                  <img className="img-fluid img_ourservices" src={LogoServis} alt="Ourservices"/>
                </div>
               
                <div className="col title_text">
                  <h1 className="services_title text-dark">Best Car Rental for any kind of trip in (Lokasimu)!</h1>
                  <p className="services_text">Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
                  <div className="ceklis_services pb-3">
                    <img className="ceklis_img" src={Ceklis} alt="CeklisServices"/>
                      <span className="ceklis_text text-dark">Sewa Mobil Dengan Supir di Bali 12 Jam</span> 
                    
                  </div>

                  <div className="ceklis_services pb-3">
                    <img className="ceklis_img" src={Ceklis} alt="CeklisServices"/>
                      <span className="ceklis_text text-dark">Sewa Mobil Lepas Kunci di Bali 24 Jam</span> 
                    
                  </div>

                  <div className="ceklis_services pb-3">
                    <img className="ceklis_img" src={Ceklis} alt="CeklisServices"/>
                      <span className="ceklis_text text-dark">Sewa Mobil Jangka Panjang Bulanan</span> 
                    
                  </div>

                  <div className="ceklis_services pb-3">
                    <img className="ceklis_img" src={Ceklis} alt="CeklisServices"/>
                      <span className="ceklis_text text-dark">Gratis Antar - Jemput Mobil di Bandara</span> 
                    
                  </div>

                  <div className="ceklis_services pb-3">
                    <img className="ceklis_img" src={Ceklis} alt="CeklisServices"/>
                      <span className="ceklis_text text-dark">Layanan Airport Transfer / Drop In Out</span> 
                    
                  </div>

                </div>
              </div>
            </div>
          </section>
    </>
  )
}

export default OurserSection