import React from "react";

function Notes(props) {
  function handleClick() {
    props.deleteItem(props.id);
  }

  return (
    <div className="notes">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>Delete</button>
    </div>
  );
}

export default Notes;
