import React from 'react'
import './BoxDisable.css'
import iconkat from '../components/asset/fi_calendar.svg';



const BoxDisable = () => {
  return (

    <>
    
        <div className="hero">
            <div className="container">
                <div className="d-sm-flex align-items-center justify-content-between">
                <div className="wrapper"> </div>
                </div>
            </div>
            </div>

    <div className="wrap_box">
    <div className="container">
        <div className="box bg-white shadow">
            <div className="row g-2">
                <div className="col-md-10">
                <div className="row g-2">
                    <h1 className='pencarianmu'>Pencarianmu</h1>
                    
                    {/*Nama Disable*/}
                    <div className="col-md-3 wrap_drop">
                        <div className="data_name" data-target-input='nearest'>
                            <label className='label_name d-flex mb-1'>Nama Mobil</label>
                            <input type="text" name='name' className="form_control form_name" />
                        </div>
                    </div>
                
                    {/* Input Data Harga */}
                    <div className="col-md-3 wrap_drop">
                        <div className="data_name" data-target-input='nearest'>
                            <label className='label_name d-flex mb-1'>
                                Kategori 
                            </label>
                            
                            <input type="text" name='name' className="form_control form_name" />
                            
                        </div>
                    </div>

                    {/* Input Data Harga */}
                    <div className="col-md-3 wrap_drop">
                        <div className="data_name" data-target-input='nearest'>
                            <label className='label_name d-flex mb-1'>Harga Sewa per Hari</label>
                            <input type="text" name='name' className="form_control form_name" />
                        </div>
                    </div>


                    {/* Input Data Status */}
                    <div className="col-md-3 wrap_drop">
                        <div className="data_name" data-target-input='nearest'>
                            <label className='label_name d-flex mb-1'>Status</label>
                            <input type="text" name='name' className="form_control form_name" />
                        </div>
                    </div>
                    
                    
                </div>
                </div>
               

            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default BoxDisable