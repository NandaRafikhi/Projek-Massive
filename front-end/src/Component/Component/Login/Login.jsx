import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="bg-white flex flex-col items-stretch">
      <div className="flex-col relative flex min-h-[600px] mt-0 w-full justify-center items-stretch max-md:max-w-full">
        <img
          src="../../public/assets/masuk-daftar/bg-login-regis.png"
          className="absolute h-full w-full object-cover object-center inset-0"
        />
        <div className="relative bg-black bg-opacity-60 flex w-full flex-col justify-center items-center px-16 py-12 max-md:max-w-full max-md:px-5">
          <div className="flex w-full max-w-[1095px] items-center justify-between gap-5 mt-3.5 mb-11 max-md:max-w-full max-md:flex-wrap max-md:mb-10">
            <div className="justify-center text-white text-left text-5xl font-mons font-bold grow shrink basis-auto my-auto max-md:max-w-full max-md:text-4xl">
              <span className="mb-5">Selamat datang</span>
              <br />
              <span className="pl-10">Visual Store</span>
            </div>
            <div className="bg-white bg-opacity-80 self-stretch flex grow basis-[0%] flex-col px-7 py-12 rounded-[40px] max-md:px-5">
              <div className="text-red-700 text-base self-stretch whitespace-nowrap mt-3.5">
                <span className=" text-black font-pop">Selamat Datang di </span>
                <span className="font-semibold text-red-700 font-pop">
                  Visual Store
                </span>
              </div>
              <div className="text-black text-2xl font-pop font-medium self-stretch mt-3">
                Masuk
              </div>
              <div className="text-black text-sm self-stretch font-pop whitespace-nowrap mt-3">
                Masukkan username atau email
              </div>
              <div>
                <input
                  type="text"
                  className="text-sm font-pop font-normal whitespace-nowrap border bg-white self-stretch mt-1 pl-4 w-96 pr-1 py-2 rounded-lg border-solid border-zinc-400 items-start max-md:pr-5"
                  placeholder="Username atau email"
                />
              </div>
              <div className="text-black font-pop text-sm self-stretch whitespace-nowrap mt-7">
                Masukkan kata sandi
              </div>
              <div>
                <input
                  type="password"
                  className="text-sm font-pop font-light border bg-white self-stretch mt-1 pl-4 w-96 pr-1 py-2 rounded-lg border-solid border-zinc-400 items-start max-md:pr-16"
                  placeholder="Kata sandi"
                />
              </div>
              <div className="bg-indigo-50 self-center flex gap-2 mt-5 pl-5 pr-2.5 py-2 rounded-lg items-start">
                <img
                  src="../../public/logo/Google.svg"
                  className="mt-1.5 mb-1 aspect-[0.94] object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-blue-500 font-pop text-xs grow whitespace-nowrap mt-1.5">
                  <a href="">Masuk dengan Google</a>
                </div>
              </div>
              <div className="self-stretch flex justify-between gap-5 mt-6 items-start">
                <div className="text-black font-pop text-sm whitespace-nowrap">
                  Belum ada akun?
                </div>
                <div className="text-black font-pop text-sm self-stretch whitespace-nowrap">
                  Lupa Password
                </div>
              </div>
              <div className="text-red-700 font-pop text-base self-stretch whitespace-nowrap mt-2.5">
                <Link to="/vstore/daftar">Daftar</Link>
              </div>
              <div className="text-white font-pop text-sm font-medium whitespace-nowrap shadow-lg bg-red-700 self-center justify-center items-stretch mt-5 py-3 rounded-xl max-md:px-5">
                <Link to="/" className="px-10">Masuk</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
