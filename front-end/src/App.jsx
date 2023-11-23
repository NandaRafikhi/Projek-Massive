import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Beranda from "./Pages/Beranda";
import Produk from "./Pages/vstore/Produk";
import Tentang from "./Pages/vstore/Tentang";
import Kontak from "./Pages/vstore/Kontak";
import Masuk from "./Pages/vstore/Masuk";
import Daftar from "./Pages/vstore/Daftar";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/vstore/produk" element={<Produk />} />
        <Route path="/vstore/tentang" element={<Tentang />} />
        <Route path="/vstore/kontak" element={<Kontak />} />
        <Route path="/vstore/masuk" element={<Masuk />} />
        <Route path="/vstore/daftar" element={<Daftar />} />
      </Routes>
    </Router>
  );
};

export default App;