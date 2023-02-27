import React from 'react'
import { useNavigate } from 'react-router-dom';
import Car from '../asset/img_car.svg';
import './HeroSection.css';


const HeroSection = () => {

  const history = useNavigate();

  const handleNavigateToCariMobil = () => {
    history('/carimobil ')
  }


  return (
    <>
        {/* HERO PAGE START*/}
      <div className="hero">
        <div className="container">
          <div className="d-sm-flex align-items-center justify-content-between">
            <div className="pb-5 wrap_hero">
              <h1 className="sewaMobil">
                Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
              </h1>
              <p className="tema_sewaMobil my-3">
                Selamat datang di Binar Car Rental. Kami menyediakan mobil
                kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                kebutuhanmu untuk sewa mobil selama 24 jam.
              </p>
             
                <button className="btn_sewa" type='button' onClick={handleNavigateToCariMobil}>Mulai Sewa Mobil</button>
                {/* onClick={SwitchToCariMobilPage} */}
             
            </div>
            <div className="one-car">
              <img className="car" src={Car} alt="car" />
            </div>
          </div>
        </div>
      </div>
    {/* HERO PAGE END*/}

    </>
  )
}

export default HeroSection