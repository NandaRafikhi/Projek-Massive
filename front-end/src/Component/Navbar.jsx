const Navbar = () => {
  return (
    <>
        <nav className="bg-milk-white ">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a className="" href=""><img src="../../public/logo/logo.svg" alt="logo" width={150} className="pr-10"/> </a>
            <div>
              <ul className="flex items-center space-x-5" >
                <li>
                  <a className="font-mons text-lg font-medium hover:bg-red-600 hover:text-milk-white rounded px-3 py-0.5 hover:shadow-xl" href="/">Beranda</a>
                </li>
                <li>
                  <a className="font-mons text-lg font-medium hover:bg-red-600 hover:text-milk-white rounded px-3 py-0.5 hover:shadow-xl" href="/">Produk</a>
                </li>
                <li>
                  <a className="font-mons text-lg font-medium hover:bg-red-600 hover:text-milk-white rounded px-3 py-0.5 hover:shadow-xl" href="/">Tentang</a>
                </li>
                <li>
                  <a className="font-mons text-lg font-medium hover:bg-red-600 hover:text-milk-white rounded px-3 py-0.5 hover:shadow-xl" href="/">Kontak</a>
                </li>

                <li>
                  <span className="ml-52 font-mons text-lg font-medium hover:bg-red-600 hover:text-milk-white rounded px-3 py-0.5 hover:shadow-xl"><a href="/">Masuk</a></span>
                </li>

                <li>
                  <a className="font-mons text-lg font-medium text-white bg-red-600 rounded px-4 py-0.5 hover:bg-red-800 hover:text-milk-white hover:shadow-xl" href="/">Daftar</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </>
  )
}

export default Navbar