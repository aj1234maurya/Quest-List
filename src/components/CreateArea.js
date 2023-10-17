import React, { useState } from "react";

function CreateArea(props) {
  const [input, setInput] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { value, name } = event.target;
    setInput((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function handleClick(event) {
    props.addon(input);
    setInput({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          className="title"
          onChange={handleChange}
          name="title"
          placeholder="Write name of quest"
          value={input.title}
        />
        <input
          className="content"
          onChange={handleChange}
          name="content"
          placeholder="Write quest deatils ...."
          value={input.content}
        />
        <button className="add" onClick={handleClick}>
          +
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
