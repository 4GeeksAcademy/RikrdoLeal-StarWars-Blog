import axios from "axios";
const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      people: [],
      planet: [],
      vehicle: [],
      favorites: [],
    },

    actions: {
      fetchData: async () => {},
      getDetallePersonaje: async (id) => {
        await fetch(`https://www.swapi.tech/api/people/${id}`)
          .then((res) => res.json())
          .then((data) => {
            const { result } = data;
            const prevPeopleStore = getStore().people || [];
            setStore({
              people: [
                ...prevPeopleStore,
                {
                  properties: result.properties,
                  description: result.description,
                  uid: result.uid,
                },
              ],
            });
          })
          .catch((err) => console.error(err));
      },

      getPersonajes: async () => {
        await fetch("https://www.swapi.tech/api/people/")
          .then((res) => res.json())
          .then((data) => {
            const { results } = data;
            const actions = getActions();
            const promises = results.map((item) =>
              actions.getDetallePersonaje(item.uid)
            );

            return Promise.all(promises);
          })
          .catch((err) => console.error(err));
      },
      getVehicles: async () => {
        await fetch("https://www.swapi.tech/api/vehicles/")
          .then((res) => res.json())
          .then((data) => {
            const { results } = data;
            const actions = getActions();
            const promises = results.map((item) =>
              actions.getDetalleVehicle(item.uid)
            );

            return Promise.all(promises);
          })
          .catch((err) => console.error(err));
      },
      getDetalleVehicle: async (id) => {
        await fetch(`https://www.swapi.tech/api/vehicles/${id}`)
          .then((res) => res.json())
          .then((data) => {
            const { result } = data;
            const prevVehicleStore = getStore().vehicle || [];
            setStore({
              vehicle: [
                ...prevVehicleStore,
                {
                  properties: result.properties,
                  description: result.description,
                  uid: result.uid,
                },
              ],
            });
          })
          .catch((err) => console.error(err));
      },
      getPlanets: async () => {
        await fetch("https://www.swapi.tech/api/planets")
          .then((res) => res.json())
          .then((data) => {
            const { results } = data;
            const actions = getActions();
            const promises = results.map((item) =>
              actions.getDetallePlanet(item.uid)
            );

            return Promise.all(promises);
          })
          .catch((err) => console.error(err));
      },
      getDetallePlanet: async (id) => {
        await fetch(`https://www.swapi.tech/api/planets/${id}`)
          .then((res) => res.json())
          .then((data) => {
            const { result } = data;
            const prevPlanetStore = getStore().planet || [];
            setStore({
              planet: [
                ...prevPlanetStore,
                {
                  properties: result.properties,
                  description: result.description,
                  uid: result.uid,
                },
              ],
            });
          })
          .catch((err) => console.error(err));
      },
      addFavorite: (item) => {
        const store = getStore();
        if (
          !store.favorites.find(
            (fav) => fav.uid === item.uid && fav.type === item.type
          )
        ) {
          const updatedFavorites = [...store.favorites, item];
          setStore({ favorites: updatedFavorites });
          localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
        }
      },
      removeFavorite: (item) => {
        const store = getStore();
        const updatedFavorites = store.favorites.filter(
          (fav) => !(fav.uid === item.uid && fav.type === item.type)
        );
        setStore({ favorites: updatedFavorites });
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      },
    },
  };
};

export default getState;