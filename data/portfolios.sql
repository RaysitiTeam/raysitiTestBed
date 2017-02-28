-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Feb 28, 2017 at 03:19 AM
-- Server version: 10.1.16-MariaDB
-- PHP Version: 7.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `raysiti_cms`
--

-- --------------------------------------------------------

--
-- Table structure for table `portfolios`
--

CREATE TABLE `portfolios` (
  `id` int(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `category` varchar(100) NOT NULL,
  `client` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `created` varchar(100) NOT NULL,
  `files` text NOT NULL,
  `video` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `portfolios`
--

INSERT INTO `portfolios` (`id`, `name`, `category`, `client`, `description`, `created`, `files`, `video`) VALUES
(1, 'Nannu Project', 'Logo', 'Nannu', 'When Mr. Naveen Noronha of Nannu''s Food Products came to us asking for a logo design, we felt that his requirement was very unique and the product idea would definitely click - he wanted to introduce Chicken Pickels to Bangaloreans.', '2017-02-24', 'img/demo-1/logos/nannus_customerLogo_1200X800.png;img/demo-1/logos/nannus_customerLogo_1200X800_2.png;img/demo-1/logos/nannus_customerLogo_1200X800_3.png', 'N/A'),
(2, 'Bimba', 'Logo', 'Bimba', 'Pickle is a compulsory accompaniment with most of the daily Indian,\r\n                        especially South Indian dishes. When the same tantalizing aromas and flavors of the hot Indian spices\r\n                        are accompanied by the natural juices of marinated and treated chicken, it''s heaven.', '2017-02-01', 'img/demo-1/logos/nannus_customerLogo_1200X800_1.png;\r\nimg/demo-1/logos/nannus_customerLogo_1200X800_2.png;\r\nimg/demo-1/logos/nannus_customerLogo_1200X800_3.png', 'N/A'),
(14, 'VCSPharma', 'Website', 'N/A', 'N/A', '2017-02-25', 'N/A', 'N/A'),
(17, 'Pramod', 'Website', 'Raysiti', 'This is a test', '2017-02-25', 'img/src/image1.jpg', 'http://www.youtube.com'),
(18, 'VCS Pharmaceuticals', 'Website', 'VCS Pharma', 'VCS Pharmaceuticals is hosted on www.vcspharmaceuticals.org', '2017-02-25', 'img/portfolio/vcs/vcspharmaceuticals.jpg', 'https://www.youtube.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `portfolios`
--
ALTER TABLE `portfolios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `portfolios`
--
ALTER TABLE `portfolios`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
