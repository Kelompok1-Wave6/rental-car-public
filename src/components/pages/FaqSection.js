import React from 'react'
import './FaqSection.css'
import Panah from '../asset/panah-faq.svg'
// import { useState } from 'react'


const FaqSection = () => {

  // const [selected, setSelected] = useState(null)

  // const toogle = (i) => {
  //   if (selected === i) {
  //     return setSelected(null)
  //   }

  //   setSelected(i)
  // }

  return (
    <section className="faq" id='faq'>
     <div className="container">
     <div className="row">

      <div className="col faq_title">
        <h1 className="mb-3">Frequently Asked Question</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing 
          <br/>  elit 
        </p>
      </div>

      <div className="col">
        <div className="wrapper">
            <div className="accordion">
                {data.map((items, i) => (
                    <div className="item">
                        <div className="title">
                            <h1>{items.question}</h1>
                           <img src={Panah} alt="Panah" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>

     </div>
    </div>
    
  </section>
  )
}

const data = [
    {
        question: 'Apa saja syarat yang dibutuhkan?',
        answer: 
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, arcu ac scelerisque sagittis, justo diam consectetur enim, mollis vestibulum velit magna sed tortor. '
    },
    {
        question: 'Berapa hari minimal sewa mobil lepas kunci?',
        answer: 
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, arcu ac scelerisque sagittis, justo diam consectetur enim, mollis vestibulum velit magna sed tortor. '
    },
    {
        question: 'Berapa hari sebelumnya sabaiknya booking sewa mobil?',
        answer: 
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, arcu ac scelerisque sagittis, justo diam consectetur enim, mollis vestibulum velit magna sed tortor. '
    },
    {
        question: 'Apakah Ada biaya antar-jemput?',
        answer: 
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, arcu ac scelerisque sagittis, justo diam consectetur enim, mollis vestibulum velit magna sed tortor. '
    },
    {
        question: 'Bagaimana jika terjadi kecelakaan',
        answer: 
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, arcu ac scelerisque sagittis, justo diam consectetur enim, mollis vestibulum velit magna sed tortor. '
    }

]

export default FaqSection