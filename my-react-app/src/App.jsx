import { useState } from "react"
import "./App.css"
import InputBox from "./components/InputBox"
import NoteItem from "./components/NoteItem"


function App() {
  // notes = array storing all notes
  // setNotes = function to update the list
  const [notes, setNotes] = useState([]);


  // This function adds a note to the notes array
  function addNote(text) {
    const newNote = {
      id: Date.now(),   // generate unique ID
      content: text,    // the text from the input box
      createdAt: new Date().toLocaleTimeString(),
      // Extension: add emoji → content: text + " 🎨"
    };


    setNotes([...notes, newNote]); // Add the new note to the end of the array
  }


  function deleteNote(id) {
    setNotes(notes.filter((note) => note.id !== id));
    // Filter keeps notes NOT matching id
    // Mechanism: array.filter returns new array
  }


  return (
      <div className="main">
          <h1>NOTES APP <span>({notes.length})</span></h1>
          <InputBox onAdd={addNote}/>
          {/* connects InputBox to App */}
         
          {notes.length === 0 && <p>No notes yet...</p>}


          {/* Use .map() to loop and display each note */}
          <div className="notes-container">
          {notes.map((note) => (
            <NoteItem key={note.id} note={note} onDelete={deleteNote}/>
          ))}
          </div>
      </div>
  );
}


export default App;