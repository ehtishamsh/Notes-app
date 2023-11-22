import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard, faTrashCan } from "@fortawesome/free-regular-svg-icons";

export default function Notes({
  notes,
  setCurrentNoteId,
  currentid,
  deleteNote,
}) {
  const elements = notes.map((item) => {
    return (
      <div
        onClick={() => setCurrentNoteId((prev) => item.id)}
        className={`note ${item.id === currentid ? "selected" : ""}`}
        key={item.id}
      >
        <div className="title_div">
          <h2>{item.title}</h2>
          <FontAwesomeIcon
            icon={faTrashCan}
            key={item.id}
            className="delete"
            onClick={(event) => deleteNote(event, item.id)}
          />
        </div>
        <p>{item.body}</p>
      </div>
    );
  });
  return (
    <div className="main_note_con">
      <p className="my_notes">
        <FontAwesomeIcon icon={faClipboard} className="clipborad" />
        My Notes
      </p>
      <p className="recent">Recently Created</p>
      <div className="cards_con">{elements}</div>
    </div>
  );
}
