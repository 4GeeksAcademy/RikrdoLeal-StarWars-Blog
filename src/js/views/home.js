import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import Favoritos from "../component/Favoritos";

export const Home = () => {
  const { store, actions } = useContext(Context);

  if (!store.people || !store.vehicle || !store.planet) return null;

  const addToFavorites = (item, type) => {
    actions.addFavorite({ ...item, type });
  };

  return (
    <div className="container text-center">
      <Favoritos favorites={store.favorites} />
      <div className="container">
        <h1 className="personajes mt-4">Personajes</h1>
        <div className="carousel-container">
          <div className="carousel">
            {store.people.map((people) => (
              <div
                className="card bg-dark "
                style={{ width: "15rem", marginRight: "1rem" }}
                key={people.id}
              >
                <img
                  src="https://images5.fanpop.com/image/photos/25600000/Star-Wars-Saga-Wallpapers-star-wars-25671326-1024-768.jpg"
                  className="card-img-top img-fluid"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title text-truncate">
                    {people.properties.name}
                  </h5>
                  <svg
                    onClick={() => addToFavorites(people, "people")}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-heart"
                    viewBox="0 0 16 16"
                    style={{ cursor: "pointer" }}
                  >
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                  </svg>
                  <Link to={`/people/${people.uid}`}>
                    <h4 className="ms-3">Detalle</h4>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <h1 className="planetas mt-4">Planetas</h1>
        <div className="carousel-container">
          <div className="carousel">
            {store.planet.map((planet) => (
              <div
                className="card bg-dark"
                style={{ width: "15rem", marginRight: "1rem" }}
                key={planet.id}
              >
                <img
                  src="https://th.bing.com/th/id/OIP.TVmzDYH_6Y8m5NSN0MSEnQHaGd?w=206&h=180&c=7&r=0&o=5&dpr=1.2&pid=1.7"
                  className="card-img-top img-fluid"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title text-truncate">
                    {planet.properties.name}
                  </h5>
                  <svg
                    onClick={() => addToFavorites(planet, "planet")}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-heart"
                    viewBox="0 0 16 16"
                    style={{ cursor: "pointer" }}
                  >
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                  </svg>
                  <Link to={`/planet/${planet.uid}`}>
                    <h4 className="ms-3">Detalle</h4>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <h1 className="vehiculos mt-4">Vehículos</h1>
        <div className="carousel-container">
          <div className="carousel">
            {store.vehicle.map((vehicle) => (
              <div
                className="card bg-dark"
                style={{ width: "15rem", marginRight: "1rem" }}
                key={vehicle.id}
              >
                <img
                  src="https://th.bing.com/th/id/R.8ce8007d8b3d09ea1a4194a1f1df00c4?rik=nzGApumRMoQU9Q&pid=ImgRaw&r=0"
                  className="card-img-top img-fluid"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title text-truncate">
                    {vehicle.properties.name}
                  </h5>
                  <svg
                    onClick={() => addToFavorites(vehicle, "vehicle")}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-heart"
                    viewBox="0 0 16 16"
                    style={{ cursor: "pointer" }}
                  >
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                  </svg>
                  <Link to={`/vehicle/${vehicle.uid}`}>
                    <h4 className="ms-3">Detalle</h4>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};