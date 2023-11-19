import "./App.css";
import Sidebar from "./components/Sidebar";
import Editor from "./components/Editor";
import { useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      body: "ok",
    },
  ]);
  const [currentNoteId, setcurrentNoteId] = useState(
    (notes[0] && notes[0].id) || ""
  );
  function createNote() {
    const note = {
      id: nanoid(),
      body: "Hello",
    };
    setNotes((prev) => [note, ...prev]);
    setcurrentNoteId(note.id);
  }
  function updateNote(e) {
    setNotes((prev) => [{ body: e.target.value }, ...prev]);
  }

  console.log(notes, currentNoteId);
  return (
    <div className="container">
      <Sidebar createNote={createNote} />
      <Editor body={notes[0].body} />
    </div>
  );
}

export default App;
