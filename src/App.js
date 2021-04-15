import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarHeader from './components/Navbar';
import CarouselHeader from './components/Carousel';
import { Container, } from 'react-bootstrap';
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import HomePage from './pages/HomePage';
import ListOng from './pages/ListOng';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div>
      <header >
        <NavbarHeader />
        <CarouselHeader />
      </header >

      <main className="mt-5">
        <Container >
          <Router>
            <Switch>
              <Route path="/" exact>
                <HomePage />
              </Route>
              <Route path="/listado-ongs" exact>
                <ListOng />
              </Route>
              <Route path="/contacto" exact>
                <Contact />
              </Route>
              <Route path="*" exact>
                <NotFound />
              </Route>
            </Switch>
          </Router>
        </Container>


      </main>
    </div>
  );
}

export default App;
