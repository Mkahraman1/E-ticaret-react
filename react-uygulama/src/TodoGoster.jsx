import React from 'react'

function TodoGoster({ gorevler, gorevSil, gorevTamamlandi }) {


    return (
        <div className='flex flex-col gap-4 m-5'>
            {gorevler.length === 0 ? <div>Liste bos</div> : gorevler.map((gorev) => (
                <div
                    className='border border-gray-200 rounded-xl w-full max-w-xl p-5 bg-white shadow-md flex items-center justify-between'
                    key={gorev.id}
                >
                    {gorev.tamamlandiMi === true
                        ? <div className='text-lg font-semibold line-through text-gray-800'>{gorev.text}</div>
                        : <div className='text-lg font-semibold text-gray-800'>{gorev.text}</div>
                    }

                    <div className='flex gap-2'>
                        <button className='bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition'
                            onClick={() => gorevTamamlandi(gorev.id)}
                        >
                            {gorev.tamamlandiMi === true ? 'Geri Al' : 'Tamamlandi'}
                        </button>

                        <button className='bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition'
                            onClick={() => gorevSil(gorev.id)}
                        >
                            sil
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TodoGoster