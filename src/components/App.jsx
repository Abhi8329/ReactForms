import React, { useState } from "react";

function App() {
  const [head, setHead] = useState("");
  const [headText, setHeadText] = useState("");
  function hChange(event) {
    //console.log("Checked Hanndle Check by writing input");
    setHead(event.target.value);
  }
  function clickMe() {
    setHeadText(head);
  }
  return (
    <div className="container">
      <h1>Hello {headText} </h1>
      <form>
        <input
          onChange={hChange}
          type="text"
          placeholder="What's your name?"
          value={head}
        />
        <button type="submit" onClick={clickMe}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
