import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import { Button, Container, Row } from 'react-bootstrap';

/* CSS */
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Container>
            <Row>
              <Route path="/">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eaque architecto at quis accusantium ut, a quod ullam delectus dolore, cum error dignissimos odio rerum, eos aut iste veritatis? Quia!
                <Button>test</Button>
              </Route>
            </Row>
          </Container>
        </Switch>
      </Router >
    </div>
  );
}

export default App;
