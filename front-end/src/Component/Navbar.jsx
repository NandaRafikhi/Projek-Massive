const Navbar = () => {
  return (
    <>
        <nav className="w-full bg-milk-white h-32 ">
          <div className="container mx-16">
            <img src="../../public/logo/logo.svg" alt="logo" />
            <div>
              <ul className="flex items-center justify-center space-x-10" >
                <li>
                  <a href="/">Beranda</a>
                </li>
                <li>
                  <a href="/">Produk</a>
                </li>
                <li>
                  <a href="/">Tentang</a>
                </li>
                <li>
                  <a href="/">Kontak</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </>
  )
}

export default Navbar