import React from 'react'

function InputCart({ names, deleteHandler }) {

  return (
    <div className='mt-5 ms-3'>
      {names.map((name, index) => (
        <div key={index} className='flex gap-3 mb-2'>
          <div>{name}</div>

          <button
            onClick={() => deleteHandler(index)}
            className='bg-red-600 text-white px-3 rounded'
          >
            Sil
          </button>
        </div>
      ))}
    </div>
  )
}

export default InputCart;