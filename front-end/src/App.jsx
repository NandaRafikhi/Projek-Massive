import {BrowserRouter as Router,Routes,Route } from "react-router-dom"

import Beranda from './Pages/Beranda'
import Masuk from "./Pages/vstore/Masuk"
import Daftar from "./Pages/vstore/Daftar"
import Produk from "./Pages/vstore/Produk"
import User from "./Pages/vstore/User";
import Edit from "./Component/Edit/edit";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/vstore/masuk" element={<Masuk />} />
        <Route path="/vstore/daftar" element={<Daftar />} />
        <Route path="/vstore/produk" element={<Produk />} />
        <Route path="/vstore/User" element={<User />} />
        <Route path="/vstore/Edit" element={<Edit />} />
      </Routes>
    </Router>
  )
}

export default App