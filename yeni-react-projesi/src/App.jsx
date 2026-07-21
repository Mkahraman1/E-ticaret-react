import React, { useState } from 'react'
import Input from './components/Input'
import InputCart from './components/InputCart';
import MovieSearch from './components/MovieSearch';
import Students from './components/Students';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {

  const [todos, setTodos] = useState([]);

  function bilgileriGetir(newTodo) {
    if (newTodo.trim() === "") {
      alert("dsdad")
    } else {
      const todo = {
        yapildiMi: false,
        text: newTodo,
      };
      setTodos((prev) => [...prev, todo]);
    }
  }

  function yapilmaBilgisi(index) {
    const yeniTodos = todos.map((todo, i) => {
      if (i === index) {
        return {
          ...todo,
          yapildiMi: !todo.yapildiMi,
        };
      }

      return todo;
    });

    setTodos(yeniTodos);
  }

 function silmeBilgisi(index){
  const yeniTodos = todos.filter((_,i)=> index !==i);
  setTodos(yeniTodos);
 }

  return (
    <div>
      <TodoInput bilgileriGetir={bilgileriGetir} />
      <TodoList todos={todos} silmeBilgisi={silmeBilgisi} yapilmaBilgisi={yapilmaBilgisi} />
    </div>
  )
}

export default App;