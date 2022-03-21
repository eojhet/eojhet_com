import { useEffect, useState } from "react";
import styles from "./index.module.scss";

export default function TODO () {

  const [newNote, setNewNote] = useState("");
  const [newBody, setNewBody] = useState("");
  const [notes, setNotes] = useState([]);
  const [test, setTest] = useState(false);

  const newNoteHandler = (e) => {
    e.preventDefault();
    if (newNote.trim() === ''){
      return;
    }
    var tempNotes = notes;
    tempNotes.push([newNote, newBody])

    setNotes(tempNotes)
    setNewNote("");
    setNewBody("");
  }

  const newNoteChange = (e) => {
    setNewNote(e.target.value);
  }

  const newBodyChange = (e) => {
    setNewBody(e.target.value);
  }

  const handleRemove = (e) =>{
    var tempNotes = notes;
    tempNotes.splice(e.target.value, 1);
    setNotes(tempNotes);
    setTest(!test);
  }

  const handleUp = (e) => {
    var tempNotes = [...notes];
    var index = +e.target.value;
    
    tempNotes.splice(index, 1);
    tempNotes.splice(index - 1, 0, notes[index]);

    setNotes(tempNotes);
    setTest(!test);
  }

  const handleDown = (e) => {
    var tempNotes = [...notes];
    var index = +e.target.value;
    tempNotes.splice(index, 1);
    tempNotes.splice(index + 1, 0, notes[index]);
    setNotes(tempNotes);
    setTest(!test);
  }

  const ListItem = props => {
    return <li>
      <div className={styles.top}>
        <div className={styles.order}>{props.index+1}</div>
        <div className={styles.title}>{props.value[0]}</div>
        <div className={styles.orderChange}>
          {props.index > 0 ? <button type='up' value={props.index} onClick={handleUp}>UP</button> : 
            <button type='down' disabled>UP</button>}
          {props.index < notes.length-1 ? <button type='down' value={props.index} onClick={handleDown}>DOWN</button> : 
            <button type='down' disabled>DOWN</button>}
          <button type='remove' value={props.index} onClick={handleRemove}>Remove</button>
        </div>
      </div>
      <div className={styles.body}>{props.value[1]}</div>
    </li>
  }

  const NotesList = props => {
    const notesArray = props.notes;
    const listItems = notesArray.map ((note, index) => 
      <ListItem key={index} index={index} value={note} />
    )
    return (
      <ul>
        {listItems}
      </ul>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <h1>
          TODO
        </h1>
      </div>

      <div className={styles.searchBox}>
        <form>
          <label htmlFor="newNote">New Note: </label>
          <br />
          <input type="text" name="newNote" value={newNote} onChange={newNoteChange} />
          <br/>
          <textarea type="text" name="newBody" value={newBody} onChange={newBodyChange}/>
          <input type="submit" value="Submit" onClick={newNoteHandler} />
        </form>
        <br/>
      </div>

      <div className={styles.notesContainer}>
        <NotesList notes={notes} />
      </div>
    </div>
  )
}