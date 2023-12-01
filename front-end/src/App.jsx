import {BrowserRouter as Router,Routes,Route } from "react-router-dom"

import Beranda from './Pages/Beranda'
import Tentang from "./Pages/vstore/Tentang"
import Masuk from "./Pages/vstore/Masuk"
import Daftar from "./Pages/vstore/Daftar"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/vstore/tentang" element={<Tentang />} />
        <Route path="/vstore/masuk" element={<Masuk />} />
        <Route path="/vstore/daftar" element={<Daftar />} />
      </Routes>
    </Router>
  )
}

export default App