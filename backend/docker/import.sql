CREATE TABLE `product` (
  `sid` int NOT NULL,
  `name` varchar(200) DEFAULT NULL,
  `size` int DEFAULT NULL,
  `imageLink` varchar(200) DEFAULT NULL,
  `rating` int DEFAULT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
