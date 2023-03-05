import { Container, Row, Col, Form } from "react-bootstrap";
import StopperTwo from '../components/pages/stopper/StopperTwo'
import TimerPayment from '../components/TimerPayment';
import React, { useState } from 'react'
// import { useNavigate } from 'react-router';
import './Upload.css'
import { useNavigate } from "react-router";
import TimerPay10Min from "./TimerPay10Min";




const Upload = () => {

  const [image, setImage] = useState("https://fakeimg.pl/350x200/")
  const [saveImg, setSaveImg] = useState(null)

  function handleChange(e) {
    console.log(e.target.files[0])
    let upload = e.target.files[0]
    setImage(URL.createObjectURL(upload))
    setSaveImg(upload)
  }

  const navigate = useNavigate();
  const handletoEtiket  = () => {
    navigate('/etiket')
  }

  const d_names = ["Minggu", "Senin", "Selasa",
  "Rabu", "Kamis", "Jumat", "Sabtu"];
const m_names = ["Januari", "Februari", "Maret",
  "April", "Mei", "Juni", "Juli", "Agustus", "September",
  "Oktober", "November", "Desember"];

const today = new Date();
const limitPayment = new Date();
limitPayment.setDate(today.getDate() + 1);

const day = limitPayment.getDay();
const date = limitPayment.getDate();
const month = limitPayment.getMonth();
const year = limitPayment.getFullYear();
const hour = limitPayment.getHours();
const min = limitPayment.getMinutes();

  return (
    <>
    <div>
    <div className="hero_tf">
          <div className="container">
            <div className="d-sm-flex align-items-center justify-content-between">
              <div className="wrapper">
              <h1 className='h1_tf'>BCA Transfer</h1>
              <div className="d-flex stoppertwo">
                  <StopperTwo/>
              </div>
              </div>
            </div>
          </div>
        </div>
   </div>

<Container>
<Row>
    <Col>
        <div className="container-expired">
          <div className="d-flex justify-content-between">
            <h2 className="pt-4 bold">Selesaikan Pembayaran Sebelum</h2>
              <div className='timer_pembayaran'>
              <TimerPayment/>
              </div>
              </div>
            <h2 className="normal">{
              d_names[day] + ", " + (parseInt(date) < 10 ? "0" + date : date) + " " + m_names[month] + " " + year
              } jam {
                (parseInt(hour) < 10 ? "0" + hour : hour) + "." + (parseInt(min) < 10 ? "0" + min : min)
              } WIB</h2>
          </div>
           
           
      

      {/* Lakukan Transfer */}
        <div className="container-tf">
            <h2 className="pt-4 bold">Lakukan Transfer Ke</h2>

            {/* BCA */}
            <div className="d-flex mt-4">
              <button className="btn_tf">BCA</button>
              <h1 className="bank_bca">BCA Transfer</h1>
              <p className='bank_an'>a.n Binar Car Rental</p>
            </div>
            
                <Form>
                  <Form.Group className="mb-3 input" controlId="formBasicEmail">
                    <Form.Label className='no_rek'>Nomor Rekening</Form.Label>
                    <Form.Control type="text" placeholder=""/>
                  </Form.Group>
                </Form>

                <Form>
                  <Form.Group className="mb-3 input" controlId="formBasicEmail">
                    <Form.Label className='no_rek'>Total Bayar</Form.Label>
                    <Form.Control type="text" placeholder=""/>
                  </Form.Group>
                </Form>
           
        </div>

    {/* Instruksi Pembayaran */}
    <div className="d-flex mt-4">
        <div className="container-tf">
            <h2 className="pt-4 bold">Intruksi Pembayaran</h2>

            {/* BCA */}
            <div className="d-flex mt-4">
             <h1 className="intruksi1">ATM BCA</h1>
             <h1 className="intruksi2">M-BCA</h1>
             <h1 className="intruksi3">BCA Klik</h1>
             <h1 className="intruksi4">Internet Banking</h1>
            </div>
            
              <ul className='fyi'>
                <li>Masukkan kartu ATM, lalu PIN</li>
                <li> Pilih menu “Transaksi Lainnya” – ‘Transfer” – “Ke Rek BCA Virtual Account”</li>
                <li>Masukkan nomor BCA Virtual Account: 70020+Order ID Contoh: No. Peserta: 12345678, maka ditulis 7002012345678</li>
                <li> Layar ATM akan menampilkan konfirmasi, ikuti intruksi untuk menyelesaikan transaksi</li>
                 <li>Ambil dan simpanlah bukti transaksi tersebut</li>
              </ul>
                        
        </div>

    {/* Konfirmasi Pembayaran Upload*/}
        <div className="card-confirm">
        <div className="confirm-timer">
          <h1 className="confrm">Konfirmasi Pembayaran</h1>
          <TimerPay10Min/>
          </div>
            <p className="pt-4 confrm_info">Terima kasih telah melakukan konfirmasi pembayaran. Pembayaranmu akan segera kami cek tunggu kurang lebih 10 menit untuk mendapatkan konfirmasi.</p>
           <p className="upload_text">Upload Bukti Pembayaran</p>
           <p className="upload_desc">Untuk membantu kami lebih cepat melakukan pengecekan. Kamu bisa upload bukti bayarmu</p>

            <div className="mx-auto">
              <div className="">
                <img src={image} alt="img" className="upload_img" />
              </div>

              <div className="my-3">
                {/* <label htmlFor="formFile" className="form_label">
                  Upload Image here
                </label> */}
              <div className="mb-3">
            <input className="form-control" type="file" id="formFile" onChange={handleChange}/>
</div>

            <button className="btn_bayar mt-3" onClick={handletoEtiket}>
                Konfirmasi Pembayaran
            </button>
               
              </div>
            </div>

        
        </div>


    </div>

        
    </Col>
</Row>

</Container>

</>

  )
}

export default Upload