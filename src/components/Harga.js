import React, { useState } from 'react'
// import './Harga.css';

const Harga = () => {

    // to show dropdown menu
  const [openDropdown, setOpenDropDown] = useState(false)

  // list dropdown items
  const [itemList, setItemList] = useState([
    {
      name: '< Rp. 400.000',
      value: '< Rp. 400.000'
    },
    {
      name: 'Rp. 400.000 - Rp. 600.000',
      value: 'Rp. 400.000 - Rp. 600.000'
    },
    {
      name: '< Rp. 400.000',
      value: '< Rp. 400.000'
    },
  ])

  // show up item if user selected element
  const [selected, setSelected] = useState(null)

  return (
    <>
         {/* Input Data Harga */}
         <div className="col-md-3">
                                  <div className="data_name" data-target-input='nearest'>
                                    <label className='label_name d-flex mb-1'>Harga</label>

                                    <div className="dropdown">
                                      {/* dropdown input */}
                                      <div className=
                                      {
                                        "custom_dropdown " + (openDropdown ? "open" : "")
                                      } onClick={(e) => {
                                        setOpenDropDown(!openDropdown)
                                      }}>
                                        {selected !== null ? itemList[selected].name : "Harga Sewa per Hari"}
                                      </div>

                                      {/* dropdown item list */}
                                      {
                                        openDropdown ? (
                                          <div className="list_dropdown">
                                        {
                                          itemList.map((item, index) => (
                                            <div key={item.value} className="item_dropdown" onClick={(e) => {
                                              setSelected(index)
                                              setOpenDropDown(false)
                                            }}>
                                              {item.name}
                                            </div>
                                          ))
                                        }
                                      </div>
                                        ) : <></>
                                      }
                                    </div>
                                    
                                  </div>
                                </div>

    </>
  )
}

export default Harga