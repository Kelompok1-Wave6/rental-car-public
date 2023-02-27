import React from 'react'
import './Pembayaran.css';
import { Container, Row, Col } from "react-bootstrap";
import Hr from '../asset/hr.svg';
import HrInfo from '../asset/hr-info.svg';
import user from "../asset/fi_users.svg";
import StopperOne from '../pages/stopper/StopperOne'
import { useNavigate } from "react-router-dom";


const Pembayaran = () => {

  const navigate = useNavigate();
  const handletotransfer  = () => {
    navigate('/transfer')
  }


  return (
    <>

      <div className="hero_pembayaran">
          <div className="container">
            <div className="d-sm-flex align-items-center justify-content-between">
            <div className="wrapper">
              <h1 className='h1_pay'>Pembayaran</h1>
              <div className="d-flex stopper">
                  <StopperOne/>
              </div>
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
                         <h1 className='pembayaran'>Detail Pesananmu</h1>
                           
                           {/* Input Data Nama Mobil*/}
                           <div className="col-md-3 wrap_drop">
                              <div className="data_name" data-target-input='nearest'>
                                  <label className='label_pembayaran d-flex mb-1'>Nama/Tipe Mobil</label>
                                  <p className="bayar_namamobil">Innova</p>
                              </div>
                          </div>
                          
                           {/* Input Data Kategori */}
                           <div className="col-md-3 wrap_drop">
                              <div className="data_name" data-target-input='nearest'>
                                  <label className='label_pembayaran d-flex mb-1'>Kategori</label>
                                  <p className="bayar_namamobil">6-8 orang</p>
                              </div>
                          </div>

                          {/* Input Data Mulai sewa */}
                          <div className="col-md-3 wrap_drop">
                              <div className="data_name" data-target-input='nearest'>
                                  <label className='label_pembayaran d-flex mb-1'>Tanggal Mulai Sewa</label>
                                  <p className="bayar_namamobil">2 Jun 2022</p>
                              </div>
                          </div>
                          {/* Input Data Akhir sewa */}
                          <div className="col-md-3 wrap_drop">
                              <div className="data_name" data-target-input='nearest'>
                                  <label className='label_pembayaran d-flex mb-1'>Tanggal Akhir Sewa</label>
                                  <p className="bayar_namamobil">8 Jun 2022</p>
                              </div>
                          </div>
                           
                         </div>
                       </div>
                        

                   </div>
               </div>
           </div>
       </div>

       <Container>
            <Row>
                <Col>
                <div className="d-flex mt-4">
                    <div className="container-pembayaran">
                        <h2 className="pt-4 bold">Pilih Bank Transfer</h2>
                        <h2 className="normal">Kamu bisa membayar dengan transfer melalui ATM, Internet Banking atau Mobile Banking</h2>

                        {/* BCA */}
                        <div className="d-flex mt-4">
                          <button className="btn_pembayaran">BCA</button>
                          <h1 className="bank_tf">BCA Transfer</h1>
                        </div>

                        <img className="hr" src={Hr} alt="hr" />

                        {/* BNI */}
                        <div className="d-flex mt-0">
                          <button className="btn_pembayaran">BNI</button>
                          <h1 className="bank_tf">BNI Transfer</h1>
                        </div>

                        <img className="hr" src={Hr} alt="hr" />

                        {/* MANDIRI */}
                        <div className="d-flex mt-0">
                          <button className="btn_pembayaran_mandiri">Mandiri</button>
                          <h1 className="bank_tf">Mandiri Transfer</h1>
                        </div>

                        <img className="hr" src={Hr} alt="hr" />
                       
                    </div>


                    <div className="card-pembayaran">
                        <p className="pt-4 merk-car">Innova</p>
                        <img className='userImg' src={user} alt="user" />

                        {/* TOTAL */}
                        <div className="d-flex flex-row justify-content-between mt-5">
                          <h1 className="total">Total</h1>
                          <h1 className="total_num">Rp. 3.500.000</h1>
                        </div>

                        {/* HARGA */}
                        <h1 className="harga">Harga</h1>
                        <div className="d-flex flex-row justify-content-between mt-2">
                          <li className="harga_sewa">Sewa Mobil Rp.500.000 x 7 Hari</li>
                          <h1 className="harga_num">Rp. 3.500.000</h1>
                        </div>

                        {/* BIAYA LAINNYA */}
                        <h1 className="harga">Biaya Lainnya</h1>
                        <div className="d-flex flex-row justify-content-between mt-2">
                          <li className="harga_sewa">Pajak</li>
                          <h1 className="termasuk">Termasuk</h1>
                        </div>
                        <div className="d-flex flex-row justify-content-between mt-1">
                          <li className="harga_sewa">Biaya makan sopir</li>
                          <h1 className="termasuk">Termasuk</h1>
                        </div>

                        {/* BELUM TERMASUK */}
                        <h1 className="harga">Belum Termasuk</h1>
                          <li className="harga_sewa">Bensin</li>
                          <li className="harga_sewa mt-1">Tol dan Parkir</li>
                        
                       <img className='hr_info' src={HrInfo} alt="" />

                       {/* TOTAL */}
                       <div className="d-flex flex-row justify-content-between mt-4">
                          <h1 className="total">Total</h1>
                          <h1 className="total_num">Rp. 3.500.000</h1>
                        </div>

                        <button className="btn_bayar mt-3" onClick={handletotransfer}>
                            Bayar
                        </button>
                    
                    </div>


                </div>

                    
                </Col>
            </Row>

        </Container>

    
    </>
  )
}

export default Pembayaran