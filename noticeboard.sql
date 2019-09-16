CREATE TABLE `board` (
  `num` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(30) NOT NULL,
  `description` text,
  `author` varchar(15) not NULL,
  `created` datetime NOT NULL,
  'count' int(11) not null,
  PRIMARY KEY (`num`)
);

INSERT INTO `board` VALUES (1,'MySQL','MySQL is...','ch', now(), 0);
INSERT INTO `board` VALUES (2,'Oracle','Oracle is ...','lail', now(), 0);
