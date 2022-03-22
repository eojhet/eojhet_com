import { useEffect, useState } from "react";
import styles from "./index.module.scss";

const initialNotes = (key) => {
  if (typeof window !== "undefined") {
    let saved = localStorage.getItem(key);
    const initial = JSON.parse(saved);
    return initial || [];
  }
}

const storeNotes = (key, notesList) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(notesList));
  }
}

export default function Notes () {

  const [newNote, setNewNote] = useState("");
  const [newBody, setNewBody] = useState("");
  const [notes, setNotes] = useState(initialNotes('notesList'));
  const [test, setTest] = useState(false);

  useEffect(() => {
    storeNotes('notesList', notes);
  },[test]);

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
    setTest(!test);
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
      <div className={styles.left}>
        {props.index > 0 ? <button type='up' value={props.index} onClick={handleUp}>
          <span className={styles.upLeft}/>
          <span className={styles.upRight}/>
        </button> : 
          <button type='button' disabled>
            <span className={styles.upLeft}/>
            <span className={styles.upRight}/>
          </button>}
        <br/>
        {props.index < notes.length-1 ? <button type='down' value={props.index} onClick={handleDown}>
          <span className={styles.downLeft}/>
          <span className={styles.downRight}/>
        </button> : 
          <button type='button' disabled>
            <span className={styles.downLeft}/>
            <span className={styles.downRight}/>
          </button>}
      </div>

      <div className={styles.middle}>
        <div className={styles.title}>{props.value[0]}</div>
        <div className={styles.body}>{props.value[1]}</div>
      </div>

      <div className={styles.right}>
        <button className={styles.close} type='close' value={props.index} onClick={handleRemove}>
          <span className={styles.closeLeft}/>
          <span className={styles.closeRight}/>
        </button>
        <button className={styles.edit} type='edit' value={props.index}>EDIT</button>
      </div>

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
          NOTES
        </h1>
      </div>

      <div className={styles.noteBox}>
        <form>
          <label htmlFor="newNote">New Note: </label>
          <br />
          <input maxLength={30} type="text" name="newNote" value={newNote} onChange={newNoteChange} />
          <br/>
          <textarea maxLength="255" type="text" name="newBody" value={newBody} onChange={newBodyChange}/>
          <div className={styles.bodyLength}>{newBody.length}/255</div>
          <input type="submit" value="Submit" onClick={newNoteHandler} />
        </form>
        <br/>
      </div>

      <div className={styles.notesContainer}>
        {notes ? <NotesList notes={notes} /> : null}
      </div>
    </div>
  )
}