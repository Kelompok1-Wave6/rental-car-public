import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import ImgUser from "../components/asset/fi_users.svg";
import './Filter.css'
import { Form, DatePicker, Button} from 'antd'
import dayjs from 'dayjs';

const Filter = () => {

  const navigate = useNavigate();
  const handlePembayaran  = () => {
    navigate('/pembayaran')
  }

    const {id} = useParams();
    const [carData, setCardata] = useState([])  
    const { RangePicker } = DatePicker;
    const dateFormat = 'DD MMM YYYY';
    const [dates] = useState([])
    console.log(dates)

    

    useEffect(() => {
        const config ={
            headers: {
              access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTI0MjUwOX0.ZTx8L1MqJ4Az8KzoeYU2S614EQPnqk6Owv03PUSnkzc'
          }
          }
        axios
        .get(`https://bootcamp-rent-cars.herokuapp.com/admin/car/${id}`, config)
        .then((res) => {
            console.log(res)
            setCardata(res.data)
        })
        .catch((err) => console.log(err.message))
    }, [id])

       const rangeConfig = {
      rules: [
        {
          type: 'array',
          required: true,
          message: 'Please select time!',
        },
      ],
    };
    
      const TimeRelatedForm = () => {
        const onFinish = (fieldsValue) => {
          // Should format date value before submit.
          const rangeValue = fieldsValue['range-picker'];
         
          const values = {
            ...fieldsValue,
            // 'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD'),
          
            'range-picker': [rangeValue[0].format('DD MMM YYYY'), rangeValue[1].format('DD MMM YYYY')],
          
          };
          //Getting input values
          console.log(values);
        };

        return (
            <Form name="time_related_controls" onFinish={onFinish}>              
              <Form.Item name="range-picker" {...rangeConfig}>
                <RangePicker 
                     defaultValue={[dayjs('DD MMM YYYY', dateFormat), dayjs('DD MMM YYYY', dateFormat)]}
                     format={dateFormat}
                />
              </Form.Item>

              <div className="d-flex flex-row justify-content-between">
                <p className="car-text-price">Total</p> 
                <h2 className="car-price">Rp {carData.price} </h2>
             </div>

            

              {/* <Form.Item
        wrapperCol={{
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        }}
      > */}
        <Button type="primary" className="btn_detail" htmlType="submit" onClick={handlePembayaran}>
            Lanjutkan Pembayaran
        </Button>
      {/* </Form.Item> */}
    </Form>
  );
};
 


    

    return (
        <Container>
            <Row>
                <Col>
                    <div className="container-filter">
                        <h2 className="pt-4 bold">Tentang Paket</h2>
                        <h2 className="normal">Include</h2>
                        <ul>
                            <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                            <li>Sudah termasuk bensin selama 12 jam</li>
                            <li>Sudah termasuk Tiket Wisata</li>
                            <li>Sudah termasuk pajak</li>
                        </ul>
                        <h2 className="normal">Exclude</h2>
                        <ul>
                            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                            <li>Tidak termasuk akomodasi penginapan</li>
                        </ul>
                        <h2 className="bold">Refund, Reschedule, Overtime</h2>
                        <ul>
                            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                            <li>Tidak termasuk akomodasi penginapan</li>
                            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                            <li>Tidak termasuk akomodasi penginapan</li>
                            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                            <li>Tidak termasuk akomodasi penginapan</li>
                        </ul>
                    </div>

                    <div className="card-filter">
                        {
                            Object.entries(carData).length ? (
                                <div className="car-card">
                                    <div className="img-container">
                                        <img src={carData.image} alt="car" />
                                    </div>
                                    <div className="car-text">
                                        <p className="car-title">{carData.name}</p>
                                        <img className="fi-user" src={ImgUser} alt="users" />
                                        <p className="lama-sewa">Tentukan lama sewa mobil (max. 7 hari)</p>

                                        {/* <RangePicker
                                            defaultValue={[dayjs('DD MMM YYYY', dateFormat), dayjs('DD MMM YYYY', dateFormat)]}
                                            format={dateFormat}
                                            onChange={(values) => {
                                               
                                                setDates(values.map(item => {
                                                    return moment(item).format('DD MMM YYYY')
                                                }))
                                            }}
                                         /> */}
                                         <TimeRelatedForm />

                                        {/* <div className="d-flex flex-row justify-content-between mt-4">
                                            <p className="car-text-price">Total</p> 
                                            <h2 className="car-price">Rp      {carData.price} </h2>
                                        </div> */}
                                        {/* <Button className="btn_detail mt-3" type='button' onClick={handlePembayaran}>
                                          Lanjutkan Pembayaran
                                        </Button> */}

                                    </div>
                                </div>
                            ) : null
                        }
                    </div> 
                </Col>
            </Row>
        </Container>
    );
}

export default Filter;



