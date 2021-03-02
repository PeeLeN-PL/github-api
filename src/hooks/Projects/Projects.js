import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from "react-redux";

import { reducerSET } from "../../actions/default"

import ProjectsList from "./List/List"


const errors = {
  "Not Found": "Nie ma takiego użytkownika na GitHub"
}

function Projects() {

  // redux ->
  const dispatch = useDispatch();
  // <- redux

  const [name, setName] = useState("");
  const [user, setUser] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    dispatch(reducerSET(false, 'ERROR_SET_MESSAGE'))
    if (name) {
      const user_data = await getUser();
      setUser(user_data);
      if (user_data.message) {
        dispatch(reducerSET(errors[user_data.message] || user_data.message, 'ERROR_SET_MESSAGE'))
      }
    } else {
      setUser(false);
      dispatch(reducerSET('brak loginu', 'ERROR_SET_MESSAGE'))
    }
  }

  const getUser = async () => {
    const response_user = await fetch(`https://api.github.com/users/${name}`);
    const user = await response_user.json();
    return user;
  }

  return (
    <div className="projects">
      <h1>Wyszukiwarka projektów githubowych</h1>
      <form onSubmit={handleSubmit} className="projects__form form">
        <p className="form__label">Podaj login z GitHub:</p>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          className="form__input"
          ref={inputRef}
        />
        <button type="submit" className="form__button">Pobierz</button>
      </form>
      {user && !user.message ? <ProjectsList username={user.login} /> : null}
    </div>
  );
}
export default Projects;