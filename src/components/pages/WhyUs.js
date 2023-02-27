import React from 'react'
import './WhyUs.css';
import Complete from '../asset/whyus_complete.svg'
import Price from '../asset/whyus_price.svg'
import Professional from '../asset/whyus_professional.svg'
import Clock from '../asset/whyus_clock.svg'


const WhyUs = () => {
  return (
    <section className="whyus" id='whyus'>
    <div className="container">
      <div className="mt-4">
        <h1 className="whyus_title">
          Why Us?
        </h1>
        <p className="whyus_text mt-3">
          Mengapa harus pilih Binar Car Rental?
        </p>
      </div>
      <div className="row">
        <div className="col-md mt-4">
          <div className="card text-dark">
            <div className="card-body ms-3 mt-2">
              <img className="complete_img" src={Complete} alt="complete"/>
              <h1 className="card_title mb-3">
                Mobil Lengkap
              </h1>
              <p className="card_text">
                Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat
              </p>
            </div>
          </div>
        </div>

        <div className="col-md mt-4">
          <div className="card text-dark">
            <div className="card-body ms-3 mt-2">
              <img className="complete_img" src={Price} alt="price"/>
              <h1 className="card_title mb-3">
                Harga Murah
              </h1>
              <p className="card_text">
                Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain
              </p>
            </div>
        </div>
      </div>

        <div className="col-md mt-4">
          <div className="card text-dark">
            <div className="card-body ms-3 mt-2">
              <img className="complete_img" src={Clock} alt="clock"/>
              <h1 className="card_title mb-3">
                Layanan 24 Jam
              </h1>
              <p className="card_text">
                Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu
              </p>
            </div>  
        </div>
      </div>

        <div className="col-md mt-4">
          <div className="card text-dark">
            <div className="card-body ms-3 mt-2">
              <img className="complete_img" src={Professional} alt="Professional"/>
              <h1 className="card_title_pro mb-3">
                Sopir Profesional
              </h1>
              <p className="card_text_pro">
                Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu
              </p>
            </div>
        </div>
      </div>
    </div>

    </div>
  </section>
  )
}

export default WhyUs