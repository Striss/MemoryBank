// StickyNote.js
import React, { useState } from 'react';

const StickyNote = ({ initialText = "", color = "#FFFB7D" }) => {
  const [text, setText] = useState(initialText);

  return (
    <textarea
      value={text}
      onChange={(e) => setText(e.target.value)}
      style={{
        backgroundColor: color,
        width: "200px",
        height: "200px",
        padding: "10px",
        fontSize: "20px",
        border: "1px solid #ccc",
        boxShadow: "2px 2px 10px rgba(0,0,0,0.3)",
        fontFamily:  "Patrick Hand,cursive, sans-serif",
        resize: "none",
        borderRadius: "8px",
        transform: "rotate(-1deg)",
        outline: "none",
      }}
    />
  );
};

export default StickyNote;
