import { useState } from "react"

function TodoList({gorevEkle}) {

    const [text,setText] = useState("");

    function handleChange(){
        if(text !== ""){
            gorevEkle(text);
            setText("");
        }else{
            alert("Bir deger giriniz...")
            return;
        }
    }
  
  return (
    <div className="m-5">
      <input value={text} onChange={(e)=> setText(e.target.value)} className='border-2 rounded-2xl' placeholder='görev ekle' type="text" />
      <button className="bg-green-400 ml-4 rounded-md w-20 border-black border-2 "
      onClick={()=>handleChange()}
      >Ekle</button>
    </div>
  )
}

export default TodoList
