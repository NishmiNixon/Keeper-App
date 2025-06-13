import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import { useState } from 'react';

function Area(props){
    const [note, setNote] = useState({
    title:"",
    content: ""
  }) 
  function handleNotes(e){
    const {name, value} = e.target
    setNote(prev => {return{
        ...prev,
        [name]:value
    }
    })
  }
  function handleAdd(e){
    e.preventDefault();
    props.submitHandle(note)
    setNote({
        title:"",
        content:""
    })
  }
  const [isZoom, setZoom] = useState(false);
  function changeZoom(){
    setZoom(true);
  }
    return(
        <div>
            <form className="create-note">
                {isZoom && <input type="text" name="title" placeholder="Title" value={note.title} onChange={handleNotes}/>}
                <textarea onClick={changeZoom} name="content" rows= {isZoom ? 3 : 1} value={note.content} placeholder="Take a note..." onChange={handleNotes}/>
                <Zoom in={isZoom}>
                    <Fab size="small" aria-label="add" onClick={handleAdd}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    )
}
export default Area;