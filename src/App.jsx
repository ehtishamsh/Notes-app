import React, { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Editor from "./components/Editor";
import { nanoid } from "nanoid";

function App() {
  const [notes, setNotes] = useState([]);
  const [currentNoteId, setcurrentNoteId] = useState(
    notes.length > 0 ? notes[0].id : ""
  );

  function createNote() {
    const note = { id: nanoid(), body: "Hello" };
    setNotes((prev) => [note, ...prev]);
    setcurrentNoteId(note.id);
  }

  function updateNote(e) {
    setNotes((prev) => [{ body: e.target.value }, ...prev]);
  }

  function findCurrentNote() {
    return (
      notes.find((note) => note.id === currentNoteId) ||
      (notes.length > 0 ? notes[0] : null)
    );
  }

  console.log(notes, currentNoteId);

  return (
    <div className="container">
      {notes.length > 0 ? (
        <Sidebar
          createNote={createNote}
          notes={notes}
          currentNoteId={findCurrentNote}
          setcurrentNoteId={setcurrentNoteId}
        />
      ) : (
        <button onClick={createNote}>Create</button>
      )}
    </div>
  );
}

export default App;
