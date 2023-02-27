import React from 'react'
import { useNavigate } from 'react-router';
import Car from '../asset/img_car.svg';
import Harga from '../Harga';
import Kategori from '../Kategori';
import Nama from '../Nama';
import Status from '../Status';
import './CariMobil.css';


const CariMobil = () => {

  const history = useNavigate();

  const handleNavigateToHasil = () => {
    history('/hasilmobil')
  }

     return (
      <>
         
        <div className="hero">
          <div className="container">
            <div className="d-sm-flex align-items-center justify-content-between">
              <div className="pb-5">
                <h1 className="sewaMobil">
                  Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
                </h1>
                <p className="tema_sewaMobil my-3">
                  Selamat datang di Binar Car Rental. Kami menyediakan mobil
                  kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                  kebutuhanmu untuk sewa mobil selama 24 jam.
                </p>
               
              </div>
              <div className="one-car">
                <img className="car" src={Car} alt="car" />
              </div>
            </div>

  
          </div>

        </div>
        {/* BOX SECTION */}
            <div className="wrap_box">
                <div className="container">
                    <div className="box bg-white shadow">
                        <div className="row g-2">
                            <div className="col-md-10">
                              <div className="row g-2">
                                
                                {/* Input Data Nama Mobil*/}
                                <Nama/>
                               
                                {/* Input Data Harga */}
                                <Kategori/>

                                {/* Input Data Harga */}
                                <Harga/>


                                {/* Input Data Status */}
                                <Status/>
                                
                                
                              </div>
                            </div>
                              {/* Button Cari Mobil */}
                            <div className="col md-2 ms-3">
                              <button className='btn_carimobil' onClick={handleNavigateToHasil}>Cari Mobil</button>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
     
      </>
    )
  }
  

export default CariMobil