import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';


import Login from './components/Login'
import Success from './components/Success'

function App() {

  return (
    <Router>
      <div>
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/success" element={<Success />} />
      </Routes>

      </div>
    </Router>

  )
}

export default App
