import React, { useState } from 'react'

function Input({getValue}) {

    const [value,setValue] = useState("");

    function handleClick() {
        getValue(value);
        setValue("");
    }



  return (
    <div>
       <div className='mt-3 ms-3 flex flex-row gap-3'>
        <input value={value} onChange={(e)=>setValue(e.target.value)} className='border-2 rounded-2xl'placeholder='isim giriniz'></input>
         <button onClick={handleClick} className='bg-blue-950 text-white rounded-2xl p-2 w-20'>Ekle</button>
       </div>
      

    </div>
  )
}

export default Input
