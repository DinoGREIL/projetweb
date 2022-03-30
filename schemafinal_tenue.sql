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
-- Table structure for table `tenue`
--

DROP TABLE IF EXISTS `tenue`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tenue` (
  `idtenue` int NOT NULL AUTO_INCREMENT,
  `nomtenue` varchar(100) DEFAULT NULL,
  `proprietaire` int DEFAULT NULL,
  `haut` int DEFAULT NULL,
  `bas` int DEFAULT NULL,
  `chaussures` int DEFAULT NULL,
  `accessoire` int DEFAULT NULL,
  `style` int DEFAULT NULL,
  `temps` int DEFAULT NULL,
  PRIMARY KEY (`idtenue`),
  KEY `ce1_tenue` (`proprietaire`),
  KEY `ce2_tenue` (`haut`),
  KEY `ce3_tenue` (`bas`),
  KEY `ce4_tenue` (`chaussures`),
  KEY `ce5_tenue` (`accessoire`),
  KEY `ce6_tenue` (`style`),
  KEY `ce7_tenue` (`temps`),
  CONSTRAINT `ce1_tenue` FOREIGN KEY (`proprietaire`) REFERENCES `utilisateur` (`idutilisateur`),
  CONSTRAINT `ce2_tenue` FOREIGN KEY (`haut`) REFERENCES `vetement` (`idvetement`),
  CONSTRAINT `ce3_tenue` FOREIGN KEY (`bas`) REFERENCES `vetement` (`idvetement`),
  CONSTRAINT `ce4_tenue` FOREIGN KEY (`chaussures`) REFERENCES `vetement` (`idvetement`),
  CONSTRAINT `ce5_tenue` FOREIGN KEY (`accessoire`) REFERENCES `vetement` (`idvetement`),
  CONSTRAINT `ce6_tenue` FOREIGN KEY (`style`) REFERENCES `style` (`idstyle`),
  CONSTRAINT `ce7_tenue` FOREIGN KEY (`temps`) REFERENCES `temps` (`idtemps`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tenue`
--

LOCK TABLES `tenue` WRITE;
/*!40000 ALTER TABLE `tenue` DISABLE KEYS */;
INSERT INTO `tenue` VALUES (1,'Détendu Homme au soleil',90,1,2,4,6,1,1),(7,' Vacances sous le soleil',90,1,3,13,7,1,6);
/*!40000 ALTER TABLE `tenue` ENABLE KEYS */;
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
