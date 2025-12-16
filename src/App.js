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

function Profile({ profile }) {
  const [isEdit, setIsEdit] = useState(false);
  const [profileData, setProfileData] = useState(profile);
  // const [textName, setTextName] = useState(name);
  // const [textEmail, setTextEmail] = useState(email);
  // const [textGender, setTextGender] = useState(gender);

  return (
    <>
      <h3>Profile</h3>
      {isEdit ? (
        <form onSubmit={() => setIsEdit(false)}>
          <p>Name:</p>
          <textarea
            value={profileData.name}
            onChange={(e) => {
              setProfileData({
                name: e.target.value,
                email: profileData.email,
                gender: profileData.gender,
              });
            }}
            required
          ></textarea>
          <p>Email:</p>
          <textarea
            value={profileData.email}
            onChange={(e) => {
              setProfileData({
                name: profileData.name,
                email: e.target.value,
                gender: profileData.gender,
              });
            }}
            required
          ></textarea>
          <p>Gender:</p>
          <select
            value={profileData.gender}
            onChange={(e) => {
              setProfileData({
                name: profileData.name,
                email: profileData.email,
                gender: e.target.value,
              });
            }}
          >
            <option>MAN</option>
            <option>WOMAN</option>
            <option>Vakasalewalewa</option>
            <option>Сroissant</option>
          </select>
          <button type="submit">Save</button>
        </form>
      ) : (
        <>
          <p>Name: {profileData.name}</p>
          <p>Email: {profileData.email}</p>
          <p>Gender: {profileData.gender}</p>
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
      <Profile
        profile={{
          name: "Admin",
          email: "Admin@gmail.com",
          gender: "Vakasalewalewa",
        }}
      />
    </>
  );
}
