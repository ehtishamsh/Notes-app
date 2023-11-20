import React, { useState } from "react";

export default function Sidebar({
  createNote,
  currentNoteId,
  notes,
  setcurrentNoteId,
}) {
  const createELEMNT = notes.map((note, index) => (
    <div key={note.id}>
      <div
        className={`title ${note.id === currentNoteId ? "selected" : ""}`}
        onClick={() => setcurrentNoteId(note.id)}
      >
        <h4 className="text-snippet">Note {index + 1}</h4>
      </div>
    </div>
  ));

  return (
    <div className="sidebar">
      <button onClick={createNote}>Create Note</button>
      {createELEMNT}
    </div>
  );
}
