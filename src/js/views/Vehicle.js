import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "../../styles/vehicle.css";

const Vehicle = () => {
  const { id } = useParams();
  const { actions, store } = useContext(Context);
  const vehicle = store.vehicle
    ? store.vehicle.find((vehicle) => vehicle.uid === id)
    : null;
  if (!vehicle) {
    return <div>Loading...</div>;
  }
  return (
    <div className="container text-center">
      <div class="card mb-3 " id="card2">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="https://th.bing.com/th/id/OIP.AJ3Mkqzs3XUA-DGe5TNS-gHaEo?rs=1&pid=ImgDetMain"
              className="per"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{vehicle.properties.name}</h5>
              <p className="card-text">
                <h2>Length:</h2> {vehicle.properties.length}
              </p>
              <p className="card-text">
                <h2>Manufacturer:</h2> {vehicle.properties.manufacturer}
              </p>
              <p className="card-text">
                <small class="text-body-secondary">
                  <h2>Model:</h2> {vehicle.properties.model}
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

export default Vehicle;