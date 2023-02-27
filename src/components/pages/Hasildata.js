import React, { useEffect, useState } from 'react'
import './Hasildata.css'
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const Hasildata = () => {

  const [cars, setCars] = useState([])

  useEffect(() => {
    const url = 'https://bootcamp-rent-cars.herokuapp.com'
    const config = {
      headers: {
        access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTI0MjUwOX0.ZTx8L1MqJ4Az8KzoeYU2S614EQPnqk6Owv03PUSnkzc'
      }
    }
    axios.get(`${url}/admin/v2/car`, config)
    .then(res => {
      const CarsList = res.data.cars
      console.log(CarsList)
      setCars(CarsList)
    })
    .catch(err => {
      console.log(err)
    })
}, [])


  return (
    
        <div className="Hasil_Mobil">
               
               {
                   cars?.map((car) => {
                       return (

                           <div className="card_item" key={car.id}>
                               <div className="card_inner">
                                   <img src={car.image} alt="car" />
                                   <h1 className="name">{car.name}</h1>
                                   <h1 className="price ">Rp {car.price}</h1>
                                   <p className="text">
                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                   </p>
                                   <NavLink to={`/DetailMobil/${car.id}`}>
                                      <button className="pilih_mobil">Pilih Mobil</button>
                                   </NavLink>
                               </div>

                           </div>
                       )
                   })
               }
    </div>
  )
}

export default Hasildata