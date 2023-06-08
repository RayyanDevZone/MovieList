import "./App.css";
import { useState, useEffect } from "react";

function Fetch() {
  const [user, setUser] = useState([]);
  const noImage =
    "https://www.joblo.com/wp-content/uploads/2004/06/2004-notebook-1-1.jpg";

  function fetchApi() {
    fetch(
      "https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies"
    )
      .then((res) => res.json())
      .then((res) => setUser(res));
  }

  function remove(index) {
    const updated = user.filter((item, id) => id !== index);
    setUser(updated);
  }

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="background-image">
      <div className="container">
        <h1>HERE IS YOUR LIST :</h1>
        {user.map((item, id) => (
          <div className="movie-container" key={id}>
            <img
              src={item.Poster === undefined ? noImage : item.Poster}
              alt=""
            />
            <div className="movie-details">
              <h6 className="title">Title: {item.Title}</h6>
              <p className="year">Year: {item.Year}</p>
              <p className="duration">Duration: {item.Runtime}</p>
            </div>
            <button id="btn" onClick={() => remove(id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Fetch;
