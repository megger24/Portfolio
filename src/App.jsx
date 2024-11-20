
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from './pages/Projects/Projects';
import Home from './pages/Home';
import About from './pages/About/About';
import Nav from './components/Nav/Nav';

function App() {
  

    return (
        <Router>
            <Nav  />
            <Routes>
                <Route
                    path='/'
                    element={<Home />}
                />
                <Route
                  path='/About'
                  element ={<About />}
                />
                 <Route
                  path='/Projects'
                  element={<Projects />}
                />
            </Routes>
        </Router>
    );
}

export default App;
