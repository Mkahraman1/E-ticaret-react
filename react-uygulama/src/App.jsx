import React, { useState } from 'react'
import TodoList from './TodoList'
import TodoGoster from './TodoGoster';

function App() {

  const [gorevler, setGorevler] = useState([]);

  function gorevEkle(gelenText) {
    const yeniGorev = {
      id: Date.now(),
      text: gelenText,
      tamamlandiMi: false
    };

    setGorevler((onceki) => [...onceki, yeniGorev]);
  }

  function gorevSil(id){
    const yeniListe = gorevler.filter((gorev)=> gorev.id !== id)
    setGorevler(yeniListe)
  }

  function gorevTamamlandi(id) {
  const yeniListe = gorevler.map((gorev) => {
    
    if (gorev.id === id) {
      return {
        ...gorev,
        tamamlandiMi: !gorev.tamamlandiMi
      }
    }
    return gorev
  })
  setGorevler(yeniListe)
}
  return (
    <div>
      <TodoList gorevEkle={gorevEkle} />
      <TodoGoster gorevler={gorevler} gorevSil={gorevSil} gorevTamamlandi={gorevTamamlandi} />
    </div>
  )
}

export default App
