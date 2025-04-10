-- MySQL dump 10.13  Distrib 8.0.13, for Win64 (x86_64)
--
-- Host: localhost    Database: projeto_api
-- ------------------------------------------------------
-- Server version	8.0.13

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `usuarios` (
  `id_usuarios` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `idade` int(11) NOT NULL,
  `cpf` varchar(255) NOT NULL,
  PRIMARY KEY (`id_usuarios`),
  UNIQUE KEY `cpf` (`cpf`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Candelar',23,'54097-5315'),(4,'Kamryn',71,'76399'),(5,'Merle',64,'21178-0787'),(6,'Benton',49,'76988'),(7,'Myrtis',66,'26524'),(9,'Janae',41,'94263'),(10,'Tressie',18,'85081-3885'),(11,'Delphia',33,'06723'),(12,'Jermaine',26,'50350-3221'),(13,'Flavio',51,'88745-6545'),(14,'Haskell',31,'37733'),(15,'Wade',72,'36925-9455'),(16,'Sonia',58,'41421-9150'),(17,'Cole',74,'84917'),(18,'Dejuan',37,'81803'),(19,'Saige',72,'56296'),(20,'Alanna',47,'65283-7230'),(21,'Angie',16,'10589'),(22,'Elinore',23,'03153'),(23,'Eulah',54,'61019-9523'),(24,'Dejon',44,'58184'),(25,'Eusebio',74,'31729'),(26,'Akeem',66,'23415'),(27,'Heber',22,'11574'),(28,'Vesta',71,'85200'),(29,'Sean',58,'68264-5779'),(30,'Lacey',21,'53349'),(31,'Orlando',38,'25448'),(32,'Enid',28,'33675-7340'),(33,'Mariela',65,'35987-6436'),(34,'Maegan',63,'75961-2495'),(35,'Gabriella',21,'73446'),(36,'Darlene',67,'88097-0833'),(37,'Erwin',45,'24170'),(38,'Kane',65,'61023'),(39,'Allen',71,'62943-7875'),(40,'Dan',34,'99133-7956'),(41,'Desiree',31,'78889-4154'),(42,'Clemens',70,'40087-0950'),(43,'Axel',48,'87135'),(44,'Kellen',62,'62556'),(45,'Katrine',30,'44879'),(46,'Mariane',37,'54249-1549'),(47,'Jackeline',80,'38800'),(48,'Camron',57,'32507'),(49,'Magnolia',33,'78183'),(50,'Louie',68,'88490-4481'),(51,'Cayla',80,'44791'),(52,'Evie',47,'61514'),(53,'Brown',61,'96797-4835'),(54,'Dorris',23,'34464'),(55,'Novella',46,'30912-5463'),(56,'Lilla',19,'79872-0217'),(57,'Hester',79,'51197'),(58,'Caterina',48,'67523-2865'),(59,'Jaeden',39,'84824'),(60,'Maegan',40,'18178-8491'),(61,'Brock',58,'38244-2255'),(62,'Russell',59,'84582'),(63,'Helena',77,'89042'),(64,'Adell',37,'15484'),(65,'Geovany',38,'98234-6672'),(66,'Daisha',55,'55670'),(67,'Wilton',75,'76628-6225'),(68,'Zelma',70,'70635'),(69,'Kevin',51,'31654'),(70,'Aylin',59,'01618'),(71,'Judah',58,'20082'),(72,'Terrance',56,'89506-3910'),(73,'Flossie',22,'67226-3981'),(74,'Giovanni',75,'04697-0277'),(75,'Lon',18,'94415-9219'),(76,'Aryanna',35,'24549-1429'),(77,'Kiarra',15,'93676'),(78,'Adalberto',18,'62496'),(90,'oliver',12,'33333333333333'),(444,'ghghgh',12,'1221132'),(888,'oooooooo',333333,'1212121212'),(10000,'Oniver',89,'000000099'),(299999,'Tulio',33,'1212212132434343'),(9000000,'ghgg',34,'12232323');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-04-10 18:57:20
