import Footer from "../../Component/Footer"
import Navbar from "../../Component/Navbar"

import { useEffect } from "react"
import { Link } from "react-router-dom"


const Masuk = () => {

  useEffect(() => {
    const passwordToggle = document.querySelector('.js-password-toggle')

      passwordToggle.addEventListener('change', function() {
        const password = document.querySelector('.js-password'),
          passwordLabel = document.querySelector('.js-password-label')

        if (password.type === 'password') {
          password.type = 'text'
          passwordLabel.innerHTML = 'hide'
        } else {
          password.type = 'password'
          passwordLabel.innerHTML = 'show'
        }

        password.focus()
      })

    }, [])

  return (
    <div>
        <Navbar/>
        <section style={{backgroundImage:"linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(../../../public/assets/masuk/bg-login-regis.png)",backgroundRepeat:"no-repeat", backgroundSize:"cover"}} className=" h-screen bg-slate-800/60 backdrop-brightness-90">
          <div className="flex flex-row justify-center items-center xl:mx-20 h-full">
            {/* Welcome */}
            <div className="flex flex-col justify-center items-center min-w-max">
              <span className=" text-milk-white font-[M PLUS 1p] text-6xl font-bold">Selamat Datang</span>
              <span className=" text-milk-white font-[M PLUS 1p] text-6xl font-bold">Visual Store</span>
            </div>
            {/* Card */}
            <div className="w-full flex justify-end container items-center h-full">
              <div style={{background:"rgba(255, 255, 255, 0.75)"}} className="border rounded-3xl p-7 w-5/12">
                <div className="flex justify-start">
                  <h2 className=" font-pop">Selamat Datang di <span className=" text-red-600 font-pop">Visual Store</span></h2>
                </div>
                  <h1 className=" text-2xl font-pop font-medium mb-2 my-7">Masuk</h1>
                  <form action="">
                    {/* email */}
                    <div className="grid mb-3">
                      <label className=" font-pop text-xs" for="username">
                      Masukkan username atau email
                      </label>
                      <input className="appearance-none border-2 rounded w-full py-3 px-3 leading-tight border-gray-300 bg-gray-100 focus:outline-none focus:border-indigo-700 focus:bg-white text-gray-700 pr-16 font-pop" id="username" type="text" autocomplete="off" autofocus placeholder="Username atau email" />
                    </div>
                    {/* password */}
                    <div className=" mb-4">
                      <label className=" font-pop text-xs" for="password">
                      Masukkan password
                      </label>
                      <div className="relative w-full">
                        <div className="absolute inset-y-0 right-0 flex items-center px-2">
                          <input className="hidden js-password-toggle" id="toggle" type="checkbox" />
                          <label className=" cursor-pointer js-password-label" for="toggle"></label>
                        </div>
                        <input className="appearance-none border-2 rounded w-full py-3 px-3 leading-tight border-gray-300 bg-gray-100 focus:outline-none focus:border-indigo-700 focus:bg-white text-gray-700  font-pop js-password" id="password" type="password" autocomplete="off" placeholder="password"
                        />
                      </div>
                    </div>
                    {/* end of form */}
                    <a href="#" className=" flex justify-center items-center mb-4">
                    <div className=" w-8/12 col-span-5 flex py-3 px-2 gap-1 items-center bg-gray-100 hover:bg-white text-xs text-[#4285F4] rounded-md justify-center">
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"/><path fill="#FF3D00" d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"/><path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"/><path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"/></svg>
                        <span className=" font-pop">Masuk dengan Google</span>
                    </div>
                    </a>
                    <div className="flex justify-between mb-10 font-pop">
                      <div className=" flex flex-col">
                        <span className="text-left text-xs">Belum ada akun?</span>
                        <Link className="text-left text-xs text-red-600" to="/vstore/daftar">daftar</Link>
                      </div>
                      <div className="text-right text-xs">
                          <a href="#">Lupa Password</a>
                      </div>
                    </div>
                    <Link to="../">
                      <button className="p-3 bg-red-600 rounded-md w-full text-white font-pop">
                          <span>Masuk</span>
                      </button>
                    </Link>
                </form>
              </div>
            </div>
          </div>
        </section>
        <Footer/>
    </div>
  )
}

export default Masuk
