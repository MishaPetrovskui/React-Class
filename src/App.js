import "./styles.css";
import { useState } from "react";

function RegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    email: "",
  });
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  function validation() {
    const newErrors = {};
    if (formData.name.trim() === "") {
      //setErrors((prev) => ({...prev, name: "Поле не може бути порожнім!"}));
      newErrors.name = "Поле не може бути порожнім!";
    }
    return newErrors;
  }
  function handleSubmit(e) {
    e.preventDefault();
    const newerror = validation();
    setErrors(newerror);
    if (Object.keys(newerror).length === 0) alert("Помилок нема");
  }

  return (
    <div className="backgroungRegister">
      <form onSubmit={handleSubmit}>
        <div className="REGISTERBackground">
          <h1>REGISTER</h1>
        </div>
        <div className="main">
          <div>
            <p>Ім'я</p>
            <input
              type="text"
              name="name"
              //placeholder="Ім'я"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? "error" : ""}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
          <div>
            <p>Вік</p>
            <input
              type="number"
              name="age"
              //placeholder="Вік"
              value={formData.age}
              onChange={handleChange}
              className={errors.name ? "error" : ""}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
          <div>
            <p>Gender</p>
            <select
              name="gender"
              //placeholder="Gender"
              value={formData.gender}
              onChange={handleChange}
              className={formData.gender == "Сroissant" ? "error" : ""}
            >
              <option>MAN</option>
              <option>WOMAN</option>
              <option>Vakasalewalewa</option>
              <option>Сroissant</option>
            </select>
            {formData.gender == "Сroissant" && (
              <span className="error">Нет, это я Сroissant</span>
            )}
          </div>
          <div>
            <p>E-mail</p>
            <input
              type="text"
              name="email"
              //placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
              className={errors.name ? "error" : ""}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
          <button type="Submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default function App() {
  return (
    <>
      <RegisterForm />
    </>
  );
}
