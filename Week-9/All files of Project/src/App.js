import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CreateNote from "./components/CreateNote";
import Note from "./components/Note";

function App() {
  let [noteArr, setNoteArr] = React.useState([]);
  function addNote(note) {
    setNoteArr((prev) => [...prev, note]);
  }
  function removeNote(id) {
    setNoteArr((prev) => {
      return prev.filter((val, ind) => {
        if (ind !== id) {
          return true;
        } else {
          return false;
        }
      });
    });
  }
  function doneToggle(id) {
    setNoteArr((prev) => {
      return prev.map((val, ind) => {
        let temp = !val.done;
        if (ind == id) {
          return { ...val, ["done"]: temp };
        } else {
          return val;
        }
      });
    });
  }

  let noteElem = noteArr.map((val, ind) => (
    <Note
      key={ind}
      id={ind}
      title={val.title}
      content={val.content}
      removeNoteInApp={removeNote}
      doneFn={doneToggle}
      done={val.done}
    />
  ));
  return (
    <>
      <Header />
      <div className="background-block1"></div>
      <div className="background-block2"></div>
      <div className="background-block3"></div>
      <div className="background-block4"></div>
      <CreateNote addNoteInApp={addNote} />
      <main>{noteElem}</main>
      <Footer />
    </>
  );
}

export default App;
