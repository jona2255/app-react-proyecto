import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarHeader from "./components/Navbar";
import CarouselHeader from "./components/Carousel";
import { Container, } from "react-bootstrap";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ListOng from "./pages/ListOng";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Ong from "./pages/Ong";
import AddOng from "./pages/AddOng";
import Admin from "./pages/Admin";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import UserContext from "./contexts/UserContext";


function App() {
  const [infoUsuario, setInfoUsuario] = useState({});
  const token = localStorage.getItem("token-acceso-api");
  useEffect(() => {
    setInfoUsuario(token ? jwt_decode(token) : {});
  }, [token]);
  return (
    <UserContext.Provider value={infoUsuario}>
      <Router>
        <header >
          <NavbarHeader />
          <CarouselHeader />
        </header >

        <main className="mt-5">
          <Container >
            <Switch>
              <Route path="/" exact>
                <HomePage />
              </Route>
              <Route path="/listado-ongs" exact>
                <ListOng />
              </Route>
              <Route path="/introducir-ong" exact>
                <AddOng />
              </Route>
              <Route path="/contacto" exact>
                <Contact />
              </Route>
              <Route path="/ong/:idOng" exact>
                <Ong />
              </Route>
              <Route path="/admin" exact>
                <Admin />
              </Route>
              <Route path="*" exact>
                <NotFound />
              </Route>
            </Switch>
          </Container>
        </main>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
