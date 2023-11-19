import React, { useState } from "react";

export default function Sidebar({ createNote, id }) {
  const [selectedNote, setSelectedNote] = useState(id);
  return (
    <div className="sidebar">
      <button onClick={createNote}>Create Note</button>
    </div>
  );
}
