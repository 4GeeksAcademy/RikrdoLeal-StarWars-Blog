import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Favoritos = ({ favorites }) => {
  const { actions } = useContext(Context);

  const handleRemoveFavorite = (item) => {
    actions.removeFavorite(item);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Favoritos</h2>
      <ul className="list-group">
        {favorites.map((item, index) => (
          <li className="list-group-item bg-dark" key={index}>
            <div className="row">
              <div className="col-8">
                <Link to={`/${item.type}/${item.uid}`}>
                  {item.properties.name}
                </Link>
              </div>
              <div className="col-4 text-end">
                <h3
                  className="text-danger"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleRemoveFavorite(item)}
                >
                  X
                </h3>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favoritos;