import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Personajes } from "./views/Personajes";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import DetallePlaneta from "./views/DetallePlaneta";
import Vehicle from "./views/Vehicle";
import Favoritos from "./component/Favoritos";
//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/people/:id" element={<Personajes></Personajes>} />
            <Route
              path="/planet/:id"
              element={<DetallePlaneta></DetallePlaneta>}
            />
             <Route path="/favoritos" element={<Favoritos></Favoritos>}/>
            <Route 
            path="/vehicle/:id" element={<Vehicle></Vehicle>} />

            <Route path="*" element={<h1>Not found!</h1>} />
           
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);