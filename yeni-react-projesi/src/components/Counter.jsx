import React, { useState } from 'react'


function Counter() {

    const [count, setCount] = useState(0);

    const arttir = () => setCount(prevCount => prevCount + 1);

    const azalt = () => setCount(prevCount => prevCount - 1);

    const besArttir = () => setCount(prevCount => prevCount + 5);
    
    const sifirla = () => setCount(0);



    return (
        <div className='flex justify-center'>
            <div className='flex flex-col items-center mt-5 gap-5 border-2 border-gray-400 w-150 h-50 justify-center'>
                <div>
                    <div className='font-bold text-2xl text-red-500'>Sayac Uygualamasi</div>
                </div>
                <div>
                    <div className='text-xl font-semibold'>{count}</div>
                </div>
                <div className='flex flex-row gap-8'>
                    <button onClick={arttir} className='bg-green-400 p-2 rounded-2xl border-2 border-amber-400 font-semibold'>1 arttir</button>
                    <button onClick={azalt} className='bg-green-400 p-2 rounded-2xl border-2 border-amber-400 font-semibold'>1 azalt</button>
                    <button onClick={besArttir} className='bg-green-400 p-2 rounded-2xl border-2 border-amber-400 font-semibold'>5 arttir</button>
                    <button onClick={sifirla} className='bg-green-400 p-2 rounded-2xl border-2 border-amber-400 font-semibold'>Sifirla</button>

                </div>
            </div>
        </div>
    )
}

export default Counter
