import "./styles.css";
import { useState } from "react";

function Note({ text }) {
  const [isEdit, setIsEdit] = useState(false);
  const [textarea, settextArea] = useState(text);

  return (
    <>
      <h3>Notes</h3>
      {isEdit ? (
        <form onSubmit={() => setIsEdit(false)}>
          <textarea
            value={textarea}
            onChange={(e) => {
              settextArea(e.target.value);
            }}
            required
          ></textarea>
          <button type="submit">Save</button>
        </form>
      ) : (
        <p onClick={() => setIsEdit(true)}>{textarea}</p>
      )}
    </>
  );
}

function Profile({ name = "None", email = "none@gmail.com", gender }) {
  const [isEdit, setIsEdit] = useState(false);
  const [textName, setTextName] = useState(name);
  const [textEmail, setTextEmail] = useState(email);
  const [textGender, setTextGender] = useState(gender);

  return (
    <>
      <h3>Profile</h3>
      {isEdit ? (
        <form onSubmit={() => setIsEdit(false)}>
          <p>Name:</p>
          <textarea
            value={textName}
            onChange={(e) => {
              setTextName(e.target.value);
            }}
            required
          ></textarea>
          <p>Email:</p>
          <textarea
            value={textEmail}
            onChange={(e) => {
              setTextEmail(e.target.value);
            }}
            required
          ></textarea>
          <p>Gender:</p>
          <select
            value={textGender}
            onChange={(e) => {
              setTextGender(e.target.value);
            }}
          >
            <option>MAN</option>
            <option>WOMAN</option>
          </select>
          <button type="submit">Save</button>
        </form>
      ) : (
        <>
          <p>Name: {textName}</p>
          <p>Email: {textEmail}</p>
          <p>Gender: {textGender}</p>
          <button onClick={() => setIsEdit(true)}>Edit</button>
        </>
      )}
    </>
  );
}

export default function App() {
  return (
    <>
      {/* <Note text="Hello world!" /> */}
      <Profile name="Admin" email="Admin@gmail.com" gender={"MAN"} />
    </>
  );
}
