import React, { useState } from 'react'

function TodoInput({bilgileriGetir}) {

      const [value,setValue] = useState("");
  
  function handleClick(){
    bilgileriGetir(value);
    setValue("");
  }
      

  return (

    <div className='flex flex-row gap-4'>
      <input value={value} onChange={(e)=>setValue(e.target.value)}></input>
      <button onClick={handleClick}>Ekle</button>
    </div>
  )
}

export default TodoInput;
