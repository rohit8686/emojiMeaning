import "./styles.css";
import React, { useState } from "react";

export default function App() {
  var emojiDictionary = {
    "π": "Happy",
    "π€£": "Rolling on the floor laughing",
    "π": "smiling with heart eyes",
    "π": "savouring food",
    "π₯±": "yawning",
    "πͺ": "Sleepy",
    "π³": "shocked",
    "π ": "angry",
    "π": "relieved",
    "π­": "loudly cryingπ",
    "π": "grinning face with smiling eyes",
    "π": "grinning face with sweat",
    "π₯": "sad but relieved face"
  };

  var [meaning, setMeaning] = useState("");

  function emojiMeaning(event) {
    var emojiInput = event.target.value;
    var emojiMeans = emojiDictionary[emojiInput];
    if (emojiMeans === undefined) {
      emojiMeans = "We don't know this emoji meaning";
    }
    setMeaning(emojiMeans);
  }

  function emojiClickHandler(emoji) {
    var emojiMeaning = emojiDictionary[emoji];
    setMeaning(emojiMeaning);
  }

  var emojiWeKnow = Object.keys(emojiDictionary);
  return (
    <div className="App">
      <h1>Emoji Meaning</h1>
      <h2>Enter the emoji here β¬</h2>
      <textarea class="textarea" onChange={emojiMeaning}></textarea>
      <h1 class="bold">{meaning}</h1>
      <h3>Emojis We Know</h3>
      {emojiWeKnow.map((emoji, index) => (
        <span
          key={index}
          style={{ fontSize: "2rem", cursor: "pointer" }}
          onClick={() => emojiClickHandler(emoji)}
        >
          {emoji}
        </span>
      ))}
    </div>
  );
}
