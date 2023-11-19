import React from "react";

export default function Editor({ body, text }) {
  return (
    <div className="editor_con">
      <input type="text" value={body} onChange={text} />
    </div>
  );
}
