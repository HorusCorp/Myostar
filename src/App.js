
import {BrowserRouter as Router,Route,} from "react-router-dom";
import HomeStructure from './HomePage/HomeStructure'
import CatalogueStructure from './CataloguePage/CatalogueStructure';
import ContactStructure from './ContactPage/ContactStructure';
import Navbar from "./Components/Navbar";


function App() {
  return (
    <Router>
      <div className="App">
      <Navbar/>
      </div>
      <Route exact path="/">
        <HomeStructure />
      </Route>
      <Route exact path="/catalogue">
        <CatalogueStructure />
      </Route>
      <Route exact path="/contact">
        <ContactStructure />
      </Route>
    </Router>
  );
}

export default App;
