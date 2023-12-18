-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 18, 2023 at 05:00 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sablon`
--

-- --------------------------------------------------------

--
-- Table structure for table `barangs`
--

CREATE TABLE `barangs` (
  `ID_barang` int(11) NOT NULL,
  `nama_barang` varchar(255) NOT NULL,
  `Stok` int(11) NOT NULL,
  `Jenis_Bahan` text NOT NULL,
  `Warna` varchar(255) NOT NULL,
  `Ukuran` varchar(255) NOT NULL,
  `Harga` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `barangs`
--

INSERT INTO `barangs` (`ID_barang`, `nama_barang`, `Stok`, `Jenis_Bahan`, `Warna`, `Ukuran`, `Harga`) VALUES
(1, 'as', 221, 'asajj', 'asas', 'xl', 10000),
(2, 'sdfq', 20, '30 catton', 'merah', 'XL', 35000);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `ID_User` int(11) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `Username` varchar(255) NOT NULL,
  `Katasandi` varchar(255) NOT NULL,
  `No_telp` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`ID_User`, `Email`, `Username`, `Katasandi`, `No_telp`, `createdAt`, `updatedAt`) VALUES
(1, 'test@example.com', 'testuser', 'password123', 123456789, '2023-12-11 14:51:16', '2023-12-11 14:51:16'),
(2, 'test@example.com', 'testuser', 'password123', 123456789, '2023-12-12 07:50:25', '2023-12-12 07:50:25'),
(3, 'test1@example.com', 'testuser1', 'password1234', 12345678, '2023-12-12 07:50:52', '2023-12-12 07:50:52');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `barangs`
--
ALTER TABLE `barangs`
  ADD PRIMARY KEY (`ID_barang`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`ID_User`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `barangs`
--
ALTER TABLE `barangs`
  MODIFY `ID_barang` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `ID_User` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
