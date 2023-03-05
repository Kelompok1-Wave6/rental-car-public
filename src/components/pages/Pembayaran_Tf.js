import React from 'react'
import './Pembayaran_Tf.css'
import { Container, Row, Col, Form } from "react-bootstrap";
import StopperTwo from '../pages/stopper/StopperTwo'
import TimerPayment from '../TimerPayment';
import { useNavigate } from 'react-router';


const Pembayaran_Tf = () => {

  const navigate = useNavigate();
  const handletoupload  = () => {
    navigate('/upload')
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

    // let interval;
    
    // const startTimer = () => {
    //   const countDownDate = new Date("March 25, 2023").getTime()

    //   interval = setInterval (() => {
    //     const now = new Date().getTime()

    //     const distance = countDownDate - now

    //     // const day = Math.floor(distance / (24 * 60 * 60 * 1000) )

    //     const hour = Math.floor((distance % (24 * 60 * 60 * 1000)) / (100 * 60 * 60))

    //     const minute = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60))

    //     const second = Math.floor((distance % (60 * 1000)) / 1000)

    //     if(distance<0) {
    //       // Stop Timer

    //       clearInterval(interval.current)
    //     } else {
    //       // Update Timer
    //         // setTimerDays (day)
    //       setTimerHours (hour)
    //       setTimerMin (minute)
    //       setTimerSecond (second)
    //     }
    //   })
    // }

    // useEffect(() => {
    //   startTimer()
    // })

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

    {/* Konfirmasi Pembayaran */}
        <div className="card-konfirmasi">
            <p className="pt-4 klik_info">Klik konfirmasi pembayaran untuk mempercepat proses pengecekan</p>
           
            <button className="btn_bayar mt-3" onClick={handletoupload}>
                Konfirmasi Pembayaran
            </button>
        
        </div>


    </div>

        
    </Col>
</Row>

</Container>

</>

  )
}

export default Pembayaran_Tf