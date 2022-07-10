import React from "react";

export default function CreateNote(props) {
  let [note, setNote] = React.useState({ title: "", content: "", done: false });
  let [expand, setExpand] = React.useState(false);
  function expandIt() {
    setExpand((prev) => !prev);
  }
  function noteSubmit() {
    if (note.title || note.content) {
      props.addNoteInApp(note);
      setNote({ title: "", content: "", done: false });
    } else {
      alert("Add something in the Note");
    }
  }
  function updateNote(event) {
    let { value, name } = event.target;
    setNote((prev) => ({ ...prev, [name]: value }));
  }
  return (
    <div className="create-note">
      {expand && (
        <input
          value={note.title}
          onChange={updateNote}
          type="text"
          name="title"
          placeholder="Title"
          autoComplete="off"
          maxLength={17}
        ></input>
      )}
      <textarea
        name="content"
        value={note.content}
        onChange={updateNote}
        placeholder="Write your note..."
        onClick={expandIt}
        onDoubleClick={expandIt}
        maxLength={220}
      ></textarea>
      {expand && <button onClick={noteSubmit}>+</button>}
    </div>
    // we can't use forms because when every we click button the form will submit..
  );
}
