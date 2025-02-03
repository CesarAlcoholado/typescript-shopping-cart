import { useState } from 'react'
import { Container } from 'react-bootstrap'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home';
import Store from './pages/store/Store';
import About from './pages/about/About';
import NavBar from './components/NavBar';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </>
  );
}

export default App
