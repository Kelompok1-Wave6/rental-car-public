import React from 'react'

const Nama = () => {
  return (
    <>
        {/* Input Data Nama Mobil*/}
        <div className="col-md-3 wrap_drop">
            <div className="data_name" data-target-input='nearest'>
                <label className='label_name d-flex mb-1'>Nama Mobil</label>
                 <input type="text" name='name' className="form_control" placeholder='Ketik nama/tipe mobil' />
            </div>
        </div>
    </>
  )
}

export default Nama