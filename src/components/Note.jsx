import DeleteIcon from '@mui/icons-material/Delete';
function Note(props){
    function handdelete(){
        props.hdel(props.id);
    }
    return(
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={handdelete}>
                <DeleteIcon />
            </button>
        </div>
    )
}
export default Note;