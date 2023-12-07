

import React, { useState } from 'react';

const pengguna = () => {
  const [profileData, setProfileData] = useState({
   
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Profile data updated:', profileData);
   
  };

  return (
    <div className="grid grid-cols-2  gap-4 max-w-3xl mx-auto mt-8 p-6  ">

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-600">
            Nama Pengguna
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={profileData.username}
            onChange={handleChange}
          />
            <div className="mt-1 p-2 w-full bg-soft-gray  rounded-md">WilliamM123</div>
        </div>
        <div className="mb-4">
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={profileData.email}
            onChange={handleChange}
            
          />
          <div className="mt-1 p-2 w-full bg-soft-gray  rounded-md">WilliamM123</div>
        </div>
        <div className="mb-4">
          <label htmlFor="alamat" className="block text-sm font-medium text-gray-600">
            Alamat
          </label>
          <input
            type="alamat"
            id="alamat"
            name="alamat"
            value={profileData.alamat}
            onChange={handleChange}
            
          />
          <div className="mt-1 p-2 w-full bg-soft-gray  rounded-md">Tanggerang</div>
        </div>
        
        
        <button
          type="submit"
          className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-white-600 focus:outline-none focus:ring focus:border-blue-300 ml-24"
        >
          Edit Data
        </button>


           
       
      </form>
      <form>
      <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-600">
            Nama Lengkap
          </label>
          <input
            type="text"
            id="name"
            name="user"
            value={profileData.user}
            onChange={handleChange}
            
          />
          <div className="mt-1 p-2 w-full bg-soft-gray  rounded-md">WilliamM Aja</div>
        </div>
        <div className="mb-4">
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-600">
            Nomor Telepon
          </label>
          <input
            type="text"
            id="nomor"
            name="nomortelepon"
            value={profileData.nomortelepon}
            onChange={handleChange}
            
          />
          <div className="mt-1 p-2 w-full bg-soft-gray  rounded-md">088-Nyambung kapan-kapan</div>
        </div>
        <div className="mb-4">
          <label htmlFor="alamat" className="block text-sm font-medium text-gray-600">
            Kode Pos
          </label>
          <input
            type="alamat"
            id="kode"
            name="kodepos"
            value={profileData.kodepos}
            onChange={handleChange}
            
          />
          <div className="mt-1 p-2 w-full bg-soft-gray  rounded-md">6969</div>
        </div>
      </form>
    </div>


  );
};

export default pengguna;
