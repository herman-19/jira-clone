import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

import Landing from '../src/components/Landing';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<Landing />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;