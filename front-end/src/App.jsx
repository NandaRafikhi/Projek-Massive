import {BrowserRouter as Router,Routes,Route } from "react-router-dom"

import Beranda from './Pages/Beranda'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Beranda />} />
      </Routes>
    </Router>
  )
}

export default App