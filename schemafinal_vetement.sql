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
-- Table structure for table `vetement`
--

DROP TABLE IF EXISTS `vetement`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vetement` (
  `idvetement` int NOT NULL AUTO_INCREMENT,
  `nomvetement` varchar(100) DEFAULT NULL,
  `pourchaud` int DEFAULT NULL,
  `pourfroid` int DEFAULT NULL,
  `pourpluie` int DEFAULT NULL,
  `pourvent` int DEFAULT NULL,
  `poursoleil` int DEFAULT NULL,
  `style` int DEFAULT NULL,
  `categorie` varchar(100) DEFAULT NULL,
  `proprietaire` int DEFAULT NULL,
  PRIMARY KEY (`idvetement`),
  KEY `ce_vete` (`style`),
  KEY `ce_proprietaire` (`proprietaire`),
  CONSTRAINT `ce_proprietaire` FOREIGN KEY (`proprietaire`) REFERENCES `utilisateur` (`idutilisateur`),
  CONSTRAINT `ce_vete` FOREIGN KEY (`style`) REFERENCES `style` (`idstyle`),
  CONSTRAINT `chk_categorie` CHECK ((`categorie` in (_utf8mb4'haut',_utf8mb4'bas',_utf8mb4'chaussures',_utf8mb4'accessoire'))),
  CONSTRAINT `chk_chaud` CHECK ((`pourchaud` in (0,1))),
  CONSTRAINT `chk_froid` CHECK ((`pourfroid` in (0,1))),
  CONSTRAINT `chk_pluie` CHECK ((`pourpluie` in (0,1))),
  CONSTRAINT `chk_soleil` CHECK ((`poursoleil` in (0,1))),
  CONSTRAINT `chk_vent` CHECK ((`pourvent` in (0,1)))
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vetement`
--

LOCK TABLES `vetement` WRITE;
/*!40000 ALTER TABLE `vetement` DISABLE KEYS */;
INSERT INTO `vetement` VALUES (1,'t-shirt bleu',1,0,0,0,1,1,'haut',90),(2,'short',1,0,0,0,1,1,'bas',90),(3,'pantalon déchiré',0,0,1,1,0,1,'bas',90),(4,'tongs',1,0,0,0,1,1,'chaussures',90),(5,'t-shirt rouge',1,0,0,0,1,1,'haut',90),(6,'casquette',1,0,0,0,1,1,'accessoire',90),(7,'rien',1,0,0,0,1,1,'accessoire',90),(8,'t-shirt rouge',1,0,0,0,1,1,'haut',113),(9,'pantalon à rayures',0,1,1,1,0,1,'bas',113),(10,'imperméable gris',0,1,1,1,0,2,'haut',113),(11,'parapluie rouge',0,1,1,0,0,2,'accessoire',113),(12,'bottes grises',0,0,1,1,0,1,'chaussures',113),(13,'tennis',1,0,0,1,1,1,'chaussures',90),(14,'jean',0,1,1,1,0,1,'bas',113),(15,'chapeau noir',1,0,0,0,1,1,'accessoire',113),(16,'chapeau melon',0,0,0,0,0,2,'accessoire',113),(22,'Haut de forme',0,0,0,0,0,4,'accessoire',90);
/*!40000 ALTER TABLE `vetement` ENABLE KEYS */;
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
