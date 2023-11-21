import React from "react";

export default function Notes({ notes, setCurrentNoteId, currentid }) {
  const elements = notes.map((item) => {
    return (
      <div
        onClick={() => setCurrentNoteId((prev) => item.id)}
        className={`note ${item.id === currentid ? "selected" : ""}`}
        key={item.id}
      >
        <h2>{item.title}</h2>
        <p>{item.body}</p>
      </div>
    );
  });
  return (
    <div className="main_note_con">
      <p className="my_notes">My Notes</p>
      <p className="recent">Recently Created</p>
      <div className="cards_con">{elements}</div>
    </div>
  );
}
