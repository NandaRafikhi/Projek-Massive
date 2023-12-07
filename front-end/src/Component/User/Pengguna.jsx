import React, { useState } from "react";
import {Link} from "react-router-dom"

const Pengguna = () => {
  const [profileData, setProfileData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile data updated:", profileData);
  };

  return (
    <div className="h-[600px]">
      <div className="flex items-center ml-[360px] mt-10">
        <img src="../../public/assets/profile/profile-user.png" alt="" />
        <div>
          <h2 className="font-mons text-lg font-semibold">WilliaM123</h2>
          <p className="font-mons">Tangerang, Banten</p>
        </div>
      </div>
      <div className="grid grid-cols-2  gap-4 max-w-3xl mx-auto mt-8 px-auto h-80 ">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-600"
            >
              Nama Pengguna
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={profileData.username}
              onChange={handleChange}
              placeholder="William123"
              className="bg-[#ECDDCB] border-2 placeholder-black border-black border-solid rounded-md py-2 mt-2 w-11/12 flex justify-center text-center"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={profileData.email}
              onChange={handleChange}
              placeholder="William123@gmail.com"
              className="bg-[#ECDDCB] border-2 placeholder-black border-black border-solid rounded-md py-2 mt-2 w-11/12 flex justify-center text-center"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="alamat"
              className="block text-sm font-medium text-gray-600"
            >
              Alamat
            </label>
            <input
              type="text"
              id="alamat"
              name="alamat"
              value={profileData.alamat}
              onChange={handleChange}
              placeholder="Jl. Wiliam"
              className="bg-[#ECDDCB] border-2 placeholder-black border-black border-solid rounded-md py-2 mt-2 w-11/12 flex justify-center text-center"
            />
          </div>
        </form>
        <form>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-600"
            >
              Nama Lengkap
            </label>
            <input
              type="text"
              id="name"
              name="user"
              value={profileData.user}
              onChange={handleChange}
              placeholder="William123"
              className="bg-[#ECDDCB] border-2 placeholder-black border-black border-solid rounded-md py-2 mt-2 w-11/12 flex justify-center text-center"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-600"
            >
              Nomor Telepon
            </label>
            <input
              type="number"
              id="nomor"
              name="nomortelepon"
              value={profileData.nomortelepon}
              onChange={handleChange}
              placeholder="William123"
              className="bg-[#ECDDCB] border-2 placeholder-black border-black border-solid rounded-md py-2 mt-2 w-11/12 flex justify-center text-center"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="alamat"
              className="block text-sm font-medium text-gray-600"
            >
              Kode Pos
            </label>
            <input
              type="alamat"
              id="kode"
              name="kodepos"
              value={profileData.kodepos}
              onChange={handleChange}
              placeholder="William123"
              className="bg-[#ECDDCB] border-2 placeholder-black border-black border-solid rounded-md py-2 mt-2 w-11/12 flex justify-center text-center"
            />
          </div>
        </form>
      </div>
      <div className="flex justify-center mr-6 mb-10">
        <Link to="/vstore/edit">
        <button
          type="submit"
          className="bg-red-700 text-white py-2 px-4 rounded-md hover:bg-white-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Ubah Data
        </button> </Link>
      </div>
    </div>
  );
};

export default Pengguna;
