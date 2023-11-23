import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
        <nav className="bg-milk-white ">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a className="" href=""><img src="../../public/logo/logo.svg" alt="logo" width={150} className="pr-10"/> </a>
            <div>
              <ul className="flex items-center space-x-5" >
                <li>
                <Link className="font-mons text-lg font-medium hover:bg-red-600 hover:text-milk-white rounded px-3 py-0.5 hover:shadow-xl" to="/">Beranda</Link>
                </li>

                <li>
                 <Link className="font-mons text-lg font-medium hover:bg-red-600 hover:text-milk-white rounded px-3 py-0.5 hover:shadow-xl" to="/vstore/produk">Produk</Link>
                </li>

                <li>
                <Link className="font-mons text-lg font-medium hover:bg-red-600 hover:text-milk-white rounded px-3 py-0.5 hover:shadow-xl" to="/vstore/tentang">Tentang</Link>
                </li>

                <li>
                <Link className="font-mons text-lg font-medium hover:bg-red-600 hover:text-milk-white rounded px-3 py-0.5 hover:shadow-xl" to="/vstore/kontak">Kontak</Link>
                </li>

                <li>
                  <span className="ml-52 font-mons text-lg font-medium hover:bg-red-600 hover:text-milk-white rounded px-3 py-0.5 hover:shadow-xl"><Link to="/vstore/masuk">Masuk</Link></span>
                </li>

                <li>
                  <Link to="/vstore/daftar" className="font-mons text-lg font-medium text-white bg-red-600 rounded px-4 py-0.5 hover:bg-red-800 hover:text-milk-white hover:shadow-xl">Daftar</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </>
  )
}

export default Navbar
