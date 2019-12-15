-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Dec 15, 2019 at 01:25 AM
-- Server version: 5.7.26
-- PHP Version: 7.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_bradley_p_hosting`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_home`
--

DROP TABLE IF EXISTS `tbl_home`;
CREATE TABLE IF NOT EXISTS `tbl_home` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Program` varchar(25) NOT NULL,
  `Name` varchar(20) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_home`
--

INSERT INTO `tbl_home` (`ID`, `Program`, `Name`) VALUES
(1, 'photoshop.png', 'Photoshop'),
(2, 'illustrator.png', 'Illustrator'),
(3, 'Premiere.png', 'Premiere Pro'),
(4, 'AfterEffects.png', 'After Effects'),
(5, 'indesign.png', 'InDesign'),
(6, 'invision.svg', 'InVision'),
(7, 'html5.svg', 'HTML5'),
(8, 'CSS3.svg', 'CSS3');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_info`
--

DROP TABLE IF EXISTS `tbl_info`;
CREATE TABLE IF NOT EXISTS `tbl_info` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(25) NOT NULL,
  `Program` varchar(50) NOT NULL,
  `College` varchar(30) NOT NULL,
  `Location` varchar(40) NOT NULL,
  `Service` varchar(40) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_info`
--

INSERT INTO `tbl_info` (`ID`, `Name`, `Program`, `College`, `Location`, `Service`) VALUES
(1, 'Patrick Bradley', 'Interactive Media Design', 'Fanshawe College', 'London, Ontario', 'Web Design '),
(2, '', '', '', '', 'User Experience'),
(3, '', '', '', '', 'User Interface'),
(4, '', '', '', '', 'Photography'),
(5, '', '', '', '', 'Video Editing'),
(6, '', '', '', '', 'Prototyping'),
(7, '', '', '', '', 'Sound Production'),
(8, '', '', '', '', 'Photo Retouching');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_projects`
--

DROP TABLE IF EXISTS `tbl_projects`;
CREATE TABLE IF NOT EXISTS `tbl_projects` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(50) NOT NULL,
  `Image` varchar(30) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_projects`
--

INSERT INTO `tbl_projects` (`ID`, `Name`, `Image`) VALUES
(1, 'The Evolution of Nintendo', 'nintendocover.png'),
(2, 'The Year of Arial', 'arialcover.png'),
(3, 'Bombinoes', 'bombinoescover.png'),
(4, 'Apple Watch Redesign', 'applewatchcover.png'),
(5, 'Ask A Tool Maker', 'toolmakercover.png'),
(6, 'Champion x Merlot ', 'winecover.png'),
(7, 'Music Mixer', 'musiccover.png'),
(8, 'Organs On Demand', 'organscover.png');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_project_specific`
--

DROP TABLE IF EXISTS `tbl_project_specific`;
CREATE TABLE IF NOT EXISTS `tbl_project_specific` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `projID` int(20) NOT NULL,
  `lightIMG` varchar(30) NOT NULL,
  `Para` varchar(500) NOT NULL,
  `Icon1` varchar(40) NOT NULL,
  `Icon2` varchar(40) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_project_specific`
--

INSERT INTO `tbl_project_specific` (`ID`, `projID`, `lightIMG`, `Para`, `Icon1`, `Icon2`) VALUES
(1, 1, 'nintendofull.png', 'The Evolution of Nintendo Consoles is an assignment where I was required to design a one-page interactive poster.\r\n\r\nThe poster features 7 self made videogame controller icons and details many interesting facts about the history and evolution of Nintendo consoles and the controllers.', 'photoshop.png', 'illustrator.png'),
(2, 2, 'arialfull.png', 'The Year of Arial is a poster designed for a school project in which we were to create an eye catching poster using typefaces while only using given information.', 'photoshop.png', 'illustrator.png'),
(3, 3, 'bombinoesfull.png', 'This school project’s guidelines were to create a simplistic mobile app.\r\n\r\nWith simplicity in mind, I co-contributed to the design of a clean, one- page app for a fake pizza company, “Bombinoes.”\r\n\r\nThe app emphasizes icons, the use of photo’s of the pizza’s as well as a button to add the pizza to the user’s cart in the bottom right of the photo.', 'photoshop.png', ''),
(4, 4, 'applewatchfull.png', 'This assignment required me to redesign an apple watch. Given the apple watch with blank assets, I designed a mixer-style watch which features the levels aspect of a mixer.', 'photoshop.png', 'illustrator.png'),
(5, 5, 'toolmakerfull.png', 'Ask A Tool Maker is a freelance website design a friend and I were asked to design and build.\r\n\r\nGiven the creative freedom to design the site however we wanted, we choose to stick to a clean, professional look where the user can access photos at the start of the page and can learn more about the company with a simple scroll down.\r\n\r\nThis project is still in progress and currently a mobile version is our top priority.', 'photoshop.png', 'invision.svg'),
(6, 6, 'winefull.png', 'This assignment guidelines required me to use the Champion brand, take a photo of a wine bottle and apply a brand new design to the bottle as well and a magazine article advertising the wine.', 'photoshop.png', 'illustrator.png'),
(7, 7, 'musicfull.png', 'For this assignment I co-desgined a one page desktop version of a “music mixer” where the user is able to interact with the instruments, listen to the sounds and drag the instruments into the music score to create a song.', 'invision.svg', 'illustrator.png'),
(8, 8, 'video/OrgansOnDemand.mp4', 'Organs On Demand is a assignment in which I was to create a video or poster which simplified the new medical science of “Regeneration and experimental orthotopic transplantation of bioengineered organs.”', 'Premiere.png', '');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
