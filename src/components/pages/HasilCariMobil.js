import React from 'react'
import Harga from '../Harga'
import Kategori from '../Kategori'
import Nama from '../Nama'
import Status from '../Status'
import './HasilCariMobil.css'
import Hasildata from './Hasildata'


const HasilCariMobil = () => {
  return (
    <>
    <div className="hero">
          <div className="container">
            <div className="d-sm-flex align-items-center justify-content-between">
              <div className="wrapper"> </div>
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
                                <h1 className='pencarianmu'>Pencarianmu</h1>
                                
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
                            <div className="col ms-3">
                              <button className='btn_edit'>Edit</button>
                            </div>


                        </div>
                    </div>
                         <Hasildata/>
                </div>
            </div>


            

    </>
  )
}

export default HasilCariMobil