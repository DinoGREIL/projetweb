-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: schemafinal
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `temps`
--

DROP TABLE IF EXISTS `temps`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `temps` (
  `idtemps` int NOT NULL AUTO_INCREMENT,
  `nomtemps` varchar(100) DEFAULT NULL,
  `ventviolent` int DEFAULT NULL,
  `chaud` int DEFAULT NULL,
  `froid` int DEFAULT NULL,
  `soleil` int DEFAULT NULL,
  `pluie` int DEFAULT NULL,
  PRIMARY KEY (`idtemps`),
  CONSTRAINT `chk_chaud2` CHECK ((`chaud` in (0,1))),
  CONSTRAINT `chk_froid2` CHECK ((`froid` in (0,1))),
  CONSTRAINT `chk_pluie2` CHECK ((`pluie` in (0,1))),
  CONSTRAINT `chk_soleil2` CHECK ((`soleil` in (0,1))),
  CONSTRAINT `chk_vent2` CHECK ((`ventviolent` in (0,1)))
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `temps`
--

LOCK TABLES `temps` WRITE;
/*!40000 ALTER TABLE `temps` DISABLE KEYS */;
INSERT INTO `temps` VALUES (1,'Chaud et ensoleillé',0,1,0,1,0),(2,'Chaud,ensoleillé et venteux',1,1,0,1,0),(3,'Pluvieux,chaud et venteux',1,1,0,0,1),(4,'Chaud et pluvieux',0,1,0,0,1),(5,'Chaud,couvert et venteux',1,1,0,0,0),(6,'Chaud et couvert',0,1,0,0,0),(7,'Froid,ensoleillé et venteux',1,0,1,1,0),(8,'Froid et ensoleillé',0,0,1,1,0),(9,'Froid,pluvieux et venteux',1,0,1,0,1),(10,'Froid et pluvieux',0,0,1,0,1),(11,'Froid,couvert et venteux',1,0,1,0,0),(12,'Froid et couvert',0,0,1,0,0),(13,'Tiède,ensoleillé et venteux',1,0,0,1,0),(14,'Tiède et ensoleillé',0,0,0,1,0),(15,'Tiède,pluvieux et venteux',1,0,0,0,1),(16,'Tiède et pluvieux',0,0,0,0,1),(17,'Tiède,couvert et venteux',1,0,0,0,0),(18,'Tiède et couvert',0,0,0,0,0);
/*!40000 ALTER TABLE `temps` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-03-30 21:45:18
