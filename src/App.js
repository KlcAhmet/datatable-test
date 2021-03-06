import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import { Container } from 'react-bootstrap';
/* Compoents */
import { Datatable } from '../src/components map/PageComponent'
/* CSS */
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Container>
          <main>
            <Switch>
              <Route path="/" component={Datatable} />
            </Switch>
          </main>
        </Container>
      </Router >
    </div>
  );
}

export default App;
