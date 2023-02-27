import React, { useState } from 'react'

const Kategori = () => {
  // to show dropdown menu
  const [openDropdown, setOpenDropDown] = useState(false)

  // list dropdown items
  const [itemList, setItemList] = useState([
    {
      name: '2 - 4 orang',
      value: '2 - 4 orang'
    },
    {
      name: '4 - 6 orang',
      value: '4 - 6 orang'
    },
    {
      name: '6 - 8 orang',
      value: '6 - 8 orang'
    },
  ])

  // show up item if user selected element
  const [selected, setSelected] = useState(null)


  return (
    <>
         {/* Input Data Kategori */}
         <div className="col-md-3">
                                  <div className="data_name" data-target-input='nearest'>
                                    <label className='label_name d-flex mb-1'>Kategori</label>

                                    <div className="dropdown">
                                      {/* dropdown input */}
                                      <div className=
                                      {
                                        "custom_dropdown " + (openDropdown ? "open" : "")
                                      } onClick={(e) => {
                                        setOpenDropDown(!openDropdown)
                                      }}>
                                        {selected !== null ? itemList[selected].name : "Masukan Kapasitas Mobil"}
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

export default Kategori