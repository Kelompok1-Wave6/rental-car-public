import React, { useState } from 'react'
// import './Status.css';

const Status = () => {

      // to show dropdown menu
  const [openDropdown, setOpenDropDown] = useState(false)

  // list dropdown items
  const [itemList, setItemList] = useState([
    {
      name: 'Disewa',
      value: 'Disewa'
    },
    {
      name: 'Belum Disewa',
      value: 'Belum Disewa'
    },
  ])

  // show up item if user selected element
  const [selected, setSelected] = useState(null)

  return (
    <>
         {/* Input Data Status */}
         <div className="col-md-3">
                                  <div className="data_name" data-target-input='nearest'>
                                    <label className='label_name d-flex mb-1'>Status</label>

                                    <div className="dropdown">
                                      {/* dropdown input */}
                                      <div className=
                                      {
                                        "custom_dropdown " + (openDropdown ? "open" : "")
                                      } onClick={(e) => {
                                        setOpenDropDown(!openDropdown)
                                      }}>
                                        {selected !== null ? itemList[selected].name : "Disewa"}
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

export default Status