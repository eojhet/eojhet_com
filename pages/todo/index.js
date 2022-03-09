import { useEffect, useState } from "react";
import styles from "./index.module.scss";

export default function TODO () {

  const [newNote, setNewNote] = useState("New Note");

  const [notes, setNotes] = useState(['something']);
  // let notes = ['one thing', 'another thing',]

  const newNoteHandler = (e) => {
    e.preventDefault();
    setNotes(notes.concat(newNote))
    setNewNote("")
  }

  const newNoteChange = (e) => {
    setNewNote(e.target.value);
  }

  const ListItem = props => {
    return <li>{props.value}</li>
  }

  const NotesList = props => {
    const notesArray = props.notes;
    const listItems = notesArray.map ((note, index) => 
      <ListItem key={index} value={note} />
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
          <input type="submit" value="Submit" onClick={newNoteHandler} />
        </form>
        <br/>
        {newNote}
      </div>

      <div className={styles.notesContainer}>
        <NotesList notes={notes} />
        {notes.length}
      </div>
    </div>
  )
}