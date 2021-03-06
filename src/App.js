import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import { Button, Container, Row } from 'react-bootstrap';
/* Compoents */
import { Datatable } from '../src/components map/PageComponent'
/* CSS */
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Container>
            <Route path="/" component={Datatable} />
          </Container>
        </Switch>
      </Router >
    </div>
  );
}

export default App;
