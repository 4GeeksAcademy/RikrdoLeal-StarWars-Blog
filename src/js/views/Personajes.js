import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "../../styles/personaje.css";

export const Personajes = () => {
  const { id } = useParams();
  const { actions, store } = useContext(Context);
  const person = store.people
    ? store.people.find((people) => people.uid === id)
    : null;
  if (!person) {
    return <div>Loading...</div>;
  }
  return (
    <div className="container text-center">
      <div class="card mb-3 " id="card2">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="https://th.bing.com/th/id/OIP.4-AhaTKMU-zORIDR-E3pVQHaEE?w=1334&h=734&rs=1&pid=ImgDetMain"
              className="per"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{person.properties.name}</h5>
              <p className="card-text">Gender: {person.properties.gender}</p>
              <p className="card-text">Mass:{person.properties.mass}</p>
              <p className="card-text">
                <small class="text-body-secondary">
                  height: {person.properties.height}
                </small>
              </p>
              <Link to="/">Back to Home</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};