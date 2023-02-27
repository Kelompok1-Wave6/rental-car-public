import React from 'react'
import PaymentDone from '../components/asset/payment-done.svg'
import imgInvoice from '../components/asset/fi_image.svg'
import './ETiket.css'
import StopperTwo from '../components/pages/stopper/StopperThree'
import { Container, Row, Col, Form } from "react-bootstrap";
import { FiDownload } from 'react-icons/fi';

const ETiket = () => {
  return (
    <>
        <div className="hero_tf">
          <div className="container">
            <div className="d-sm-flex align-items-center justify-content-between">
              <div className="wrapper">
              <h1 className='h1_tf'>Tiket</h1>
              <div className="d-flex stoppertwo">
                  <StopperTwo/>
              </div>
              </div>
            </div>
          </div>
        </div>

        <div className="img_etiket">
          <img src={PaymentDone} alt="" />
        </div>

        <div className="payment_done">
          <h1>Pembayaran Berhasil!</h1>
          <p>Tunjukkan invoice ini ke petugas BCR di titik temu.</p>
        </div>

        <Container>
<Row>
    <Col>
        <div className="container-invoice mx-auto">
          <div className="d-flex justify-content-between">
            <h1 className="pt-4">Invoce</h1>
            <button className="btn_invoice">
              <FiDownload className='icon fs-5 mx-1'/> Unduh
              </button>
          </div>
            <p>*no invoice</p>
          <div className="pdf mx-auto">
            <div className="img_invoice d-flex">
              <img src={imgInvoice} alt="" />
              <p>PDF Viewer</p>
            </div>
          </div>
          </div>

           
           
      

        
    </Col>
</Row>

</Container>

    </>
  )
}

export default ETiket