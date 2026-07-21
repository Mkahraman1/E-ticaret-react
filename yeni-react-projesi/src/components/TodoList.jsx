import React from 'react'
import { FaRegSquare, FaCheckSquare } from "react-icons/fa";

function TodoList({ todos ,yapilmaBilgisi ,silmeBilgisi}) {

  

    return (

        <div>
            {todos.map((todo, index) => (
                <div className='border-2 border-gray-500 flex flex-col items-center h-50 justify-center gap-10' key={index}>
                    <div className='font-bold text-4xl'>{todo.text}</div>
                    <div className='flex gap-3'>
                        <button onClick={() => yapilmaBilgisi(index)} className='bg-green-500 text-2xl  rounded-2xl p-2 font-semibold text-black w-30'>Yapildi</button>
                        <button onClick={()=> silmeBilgisi(index)} className='bg-red-500 text-2xl  rounded-2xl p-2 font-semibold text-black w-30'>Sil</button>
                        {todo.yapildiMi ? <FaCheckSquare /> : <FaRegSquare />}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TodoList
