-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 25, 2023 at 07:13 AM
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
-- Database: `product_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `sku` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `price` int(100) NOT NULL,
  `productType` varchar(100) NOT NULL,
  `size` varchar(100) DEFAULT NULL,
  `weight` varchar(100) DEFAULT NULL,
  `height` varchar(100) DEFAULT NULL,
  `width` varchar(100) DEFAULT NULL,
  `length` varchar(100) DEFAULT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`sku`, `name`, `price`, `productType`, `size`, `weight`, `height`, `width`, `length`, `id`) VALUES
('JVC200123', 'Acme DISC', 1, 'DVD', '700 MB', NULL, NULL, NULL, NULL, 1),
('TR120555', 'Chair', 40, 'Furniture', NULL, NULL, '24', '45', '15', 2),
('TR120555', 'Chair', 40, 'Furniture', NULL, NULL, '24', '45', '15', 3),
('TR120555', 'Chair', 40, 'Furniture', NULL, NULL, '24', '45', '15', 4),
('TR120555', 'Chair', 40, 'Furniture', NULL, NULL, '24', '45', '15', 5),
('GGWP007', 'War and Peace', 20, 'Book', NULL, '2KG', NULL, NULL, NULL, 6),
('GGWP007', 'War and Peace', 20, 'Book', NULL, '2KG', NULL, NULL, NULL, 7),
('GGWP007', 'War and Peace', 20, 'Book', NULL, '2KG', NULL, NULL, NULL, 8),
('GGWP007', 'War and Peace', 20, 'Book', NULL, '2KG', NULL, NULL, NULL, 9),
('TESTTZASD1234', 'Enock', 30, 'Book', NULL, '3KG', NULL, NULL, NULL, 10),
('GGWP007', 'War and Peace', 20, 'Book', NULL, '2KG', NULL, NULL, NULL, 11),
('TESTTZASD1234', 'Learn', 50, 'DVD', '700', NULL, NULL, NULL, NULL, 12);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
