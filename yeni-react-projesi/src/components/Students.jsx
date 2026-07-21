import React, { useState } from "react";

function Students() {
  const students = [
    {
      id: 1,
      name: "Ahmet",
      age: 20,
      department: "Bilgisayar",
    },
    {
      id: 2,
      name: "Mehmet",
      age: 22,
      department: "Elektrik",
    },
    {
      id: 3,
      name: "Ayşe",
      age: 21,
      department: "Makine",
    },
    {
      id: 4,
      name: "Zeynep",
      age: 23,
      department: "Yazılım",
    },
  ];

  const [selectedStudent, setSelectedStudent] = useState(null);

  function showDetails(id) {
    const foundStudent = students.find(
      (student) => student.id === id
    );

    setSelectedStudent(foundStudent);
  }

  return (
    <div className="p-5">
      <h1 className="mb-5 text-2xl font-bold">
        Öğrenciler
      </h1>

      {students.map((student) => (
        <div
          className="mb-4 flex items-center gap-6"
          key={student.id}
        >
          <div>{student.name}</div>

          <button
            onClick={() => showDetails(student.id)}
            className="rounded-2xl bg-black p-2 text-white"
          >
            Detay Görüntüle
          </button>
        </div>
      ))}

      {selectedStudent && (
        <div className="mt-8 rounded-lg border p-4">
          <h2 className="mb-3 text-xl font-bold">
            Seçilen Öğrenci
          </h2>

          <div>İsim: {selectedStudent.name}</div>
          <div>Yaş: {selectedStudent.age}</div>
          <div>Bölüm: {selectedStudent.department}</div>
        </div>
      )}
    </div>
  );
}

export default Students;