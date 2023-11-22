import "./App.css";
import { nanoid } from "nanoid";
import Notes from "./components/Notes";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard } from "@fortawesome/free-regular-svg-icons";

function App() {
  const storedNotes = localStorage.getItem("notes");
  const [note, setNotes] = useState(storedNotes ? JSON.parse(storedNotes) : []);

  const [formData, setFormData] = useState({
    id: nanoid(),
    title: "",
    body: "",
  });
  const [currentNoteId, setCurrentNoteId] = useState(
    () => (note[0] && note[0].id) || ""
  );
  const currentNote = note.find((note) => note.id === currentNoteId) || note[0];
  function handleSubmit(event) {
    event.preventDefault();
    setFormData((prev) => {
      return { ...prev, id: nanoid() };
    });
    setNotes((prev) => {
      return [formData, ...prev];
    });
  }
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  }
  function deleteNote(event, noteID) {
    event.stopPropagation();
    setNotes((prev) => {
      return prev.filter((note) => note.id !== noteID);
    });
  }
  useEffect(() => {
    const convert = JSON.stringify(note);
    localStorage.setItem("notes", convert);
  }, [note]);
  return (
    <div className="container">
      <div className="sidebar">
        <h2>Notes App</h2>
        <p>
          <FontAwesomeIcon icon={faClipboard} /> Notes
        </p>
      </div>
      <div className="inner_con">
        <form onSubmit={handleSubmit} className="create_element_con">
          <button>Add a Note</button>
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="title"
            value={formData.title}
            onChange={handleChange}
          />
          <input
            type="text"
            name="body"
            placeholder="Take a note"
            className="body"
            value={formData.body}
            onChange={handleChange}
          />
        </form>
        {note[0] && (
          <Notes
            notes={note}
            currentid={currentNote}
            setCurrentNoteId={setCurrentNoteId}
            deleteNote={deleteNote}
          />
        )}
      </div>
    </div>
  );
}

export default App;
