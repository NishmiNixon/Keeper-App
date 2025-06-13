import { useState } from 'react';
import Area from "./Area";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
function App(){
  const [note, setNote] = useState([])
  function addNote(note){
    setNote(prev => {return [...prev,note]
    })
  }
  function handleDelete(index){
    setNote((prev) => {
      return prev.filter((n, id) => {
        return id !== index;
      })
    })

  }
  return(
    <div>
      <Header />
      <Area submitHandle = {addNote}/>
      {note.map((n, index) => {
        return <Note title={n.title} content={n.content} key={index} id = {index} hdel={handleDelete}/>
      })}
      <Footer/>
    </div>
  )
}

export default App;