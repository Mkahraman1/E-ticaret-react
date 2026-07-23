import React, { useState } from 'react'

function Students() {

 const [value,setValue] = useState("");

  const [students, setStudents] = useState([
    { isim: "Ali", gectiMi: false },
    { isim: "Veli", gectiMi: false },
    { isim: "Ayşe", gectiMi: true },
  ]);

  function gecmeDurumu(index) {
    const yeniStudents = students.map((student, i) => {
      if (i === index) {
        return {
          ...student,
          gectiMi: !student.gectiMi
        }
      }

      return student;
    })

    setStudents(yeniStudents);
  }


  function ogrenciSil(index){
    const yeniStudent = students.filter((_,i) => index !== i);
    setStudents(yeniStudent);
  }

  function isimDegistir(index){
    const yeniStudent = students.map((student,i)=>{
      if(index === i && value != "" ){
        return {
          ...student,
          isim : value
        }
      }
      return student
    })
    setStudents(yeniStudent);
    setValue("");
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <div className="max-w-md mx-auto space-y-4">

        {students.map((student, index) => (
          <div
            key={index}
            className="bg-white border rounded-xl p-4 shadow-sm"
          >
            <h2 className="text-xl font-bold">
              {student.isim}
            </h2>

            <p className="mt-1 text-gray-600">
              {student.gectiMi ? "Geçti" : "Kaldı"}
            </p>

            <div className="flex gap-2 mt-4">

              <button
                onClick={() => gecmeDurumu(index)}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg"
              >
                Değiştir
              </button>

              <button
                onClick={() => ogrenciSil(index)}
                className="px-4 py-2 bg-red-500 text-white rounded-lg"
              >
                Sil
              </button>

                <button
                onClick={() => isimDegistir(index)}
                className="px-4 py-2 bg-green-500 text-white rounded-lg"
              >
                Değiştir
              </button>

            </div>
          </div>
        ))}
          <input value={value} onChange={(e) => setValue(e.target.value)} className='rounded-2xl border-2' placeholder='isim gir' type="text" />

      </div>
    </div>
  )
}

export default Students