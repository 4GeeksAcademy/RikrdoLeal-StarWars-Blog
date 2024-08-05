import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "../../styles/detalledeplaneta.css";

const DetallePlaneta = () => {
  const { id } = useParams();
  const { actions, store } = useContext(Context);
  const planet = store.planet
    ? store.planet.find((planet) => planet.uid === id)
    : null;
  if (!planet) {
    return <div>Loading...</div>;
  }
  return (
    <div className="container text-center">
      <div class="card mb-3 " id="card2">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="https://th.bing.com/th/id/OIP.3o5Ryr04d56AsaE-LnBTuQHaDp?rs=1&pid=ImgDetMain"
              className="per"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{planet.properties.name}</h5>
              <p className="card-text">Climate: {planet.properties.climate}</p>
              <p className="card-text">
                Diameter: {planet.properties.diameter}
              </p>
              <p className="card-text">
                <small class="text-body-secondary">
                  Terrain:
                  {planet.properties.terrain}
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

export default DetallePlaneta;