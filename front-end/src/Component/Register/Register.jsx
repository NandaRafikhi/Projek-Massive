import React from "react";
import { Link } from "react-router-dom";

function Register() {
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
                Daftar
              </div>
              <div className="text-black text-sm self-stretch font-pop whitespace-nowrap mt-3">
                Masukkan username atau email
              </div>
              <div>
                <input
                  type="text"
                  className="text-sm font-pop font-normal whitespace-nowrap border bg-white self-stretch mt-1 pl-4 pr-52 py-2 rounded-lg border-solid border-zinc-400 items-start max-md:pr-5"
                  placeholder="Username atau email"
                />
              </div>
              <div className="self-stretch flex justify-between gap-3 mt-7 items-start">
                <div className="flex grow basis-[0%] flex-col items-stretch">
                  <div className="text-black font-pop text-sm">Username</div>
                  <div>
                    <input
                      type="text"
                      className="text-sm font-pop font-normal border bg-white items-stretch mt-1 py-2 mr-1 pl-4 rounded-lg border-solid border-zinc-400"
                      placeholder="Username"
                    />
                  </div>
                </div>
                <div className="self-stretch flex grow basis-[0%] flex-col items-stretch">
                  <div className="text-black font-pop text-sm">
                    Nomor telepon
                  </div>
                  <div>
                    <input
                      type="text"
                      className=" text-sm font-pop font-normal border bg-white items-stretch mt-1 pl-4 py-2 rounded-lg border-solid border-zinc-400 max-md:pr-5"
                      placeholder="+62801234567"
                    />
                  </div>
                </div>
              </div>
              <div className="text-black font-pop text-sm self-stretch whitespace-nowrap mt-7">
                Masukkan kata sandi
              </div>
              <div>
                <input
                  type="password"
                  className="text-sm font-pop font-light border bg-white self-stretch w-[396.8px] mt-1 pl-4 pr-1 py-2 rounded-lg border-solid border-zinc-400 items-start max-md:pr-52"
                  placeholder="Kata sandi                       "
                />
              </div>
              <div className="flex items-stretch gap-1 mr-2.5 mt-2.5 self-end">
                <div className="text-black font-pop text-sm whitespace-nowrap">
                  Sudah ada akun ?
                </div>
                <div className="text-red-700 font-pop text-sm whitespace-nowrap">
                  <Link to="/vstore/masuk">Masuk</Link>
                </div>
              </div>
              <div className="text-white text-sm font-pop font-medium whitespace-nowrap shadow-lg bg-red-700 justify-center items-stretch mt-5 pl-12 pr-14 py-3 rounded-xl self-end max-md:px-5">
                <Link to="/vstore/masuk">Daftar</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
