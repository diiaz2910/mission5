import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';

// Import your custom components
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/messages')
      .then((response) => {
        const { message } = response.data;
        setMessage(message);
      })
      .catch((error) => {
        console.error('An error occurred', error);
      });
  }, []);

  return (
    <Router>
      <div>
        {/* Navigation */}
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>

        {/* Routes */}
        <Switch>
          <Route path="/" exact>
            <Home message={message} />
          </Route>
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;