import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Notes from "./Notes";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function handleAdd(input) {
    setNotes((prevItems) => {
      return [...prevItems, input];
    });
  }

  function handleDelete(id) {
    setNotes((prevItems) => {
      return notes.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addon={handleAdd} />
      {notes.map((items, index) => {
        return (
          <Notes
            key={index}
            id={index}
            content={items.content}
            title={items.title}
            deleteItem={handleDelete}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
