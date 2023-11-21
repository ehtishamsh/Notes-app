import "./App.css";
import { nanoid } from "nanoid";
import Notes from "./components/Notes";
import { useState } from "react";

function App() {
  const [note, setNotes] = useState([
    {
      id: "kjfdijofdfdidijf",
      title: "Hel",
      body: "kljdjlskdjskl",
    },
  ]);
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    body: "",
  });
  const [currentNoteId, setCurrentNoteId] = useState(
    (note[0] && note[0].id) || ""
  );
  function handleSubmit(event) {
    event.preventDefault();
    setFormData((prev) => {
      return { ...prev, id: nanoid() };
    });
    setNotes((prev) => {
      return [...prev, formData];
    });
  }
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  }
  return (
    <div className="container">
      <div className="sidebar">
        <h2>Notes App</h2>
        <p>Notes</p>
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
            currentid={currentNoteId}
            setCurrentNoteId={setCurrentNoteId}
          />
        )}
      </div>
    </div>
  );
}

export default App;
