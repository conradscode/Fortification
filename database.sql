CREATE TABLE `players` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(15) NOT NULL,
  `password` varchar(200) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

CREATE TABLE `resources` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `wood` int(11) DEFAULT 0,
  `copper` int(11) DEFAULT 0,
  `iron` int(11) DEFAULT 0,
  `gold` int(11) DEFAULT 0,
  `titanium` int(11) DEFAULT 0,
  `fish` int(11) DEFAULT 0,
  `copperForges` int(11) DEFAULT NULL,
  `ironForges` int(11) DEFAULT NULL,
  `goldForges` int(11) DEFAULT NULL,
  `titaniumForges` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `id` FOREIGN KEY (`id`) REFERENCES `players` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

CREATE TABLE `skills` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fishSkill` int(11) DEFAULT 1,
  `fishXp` int(11) DEFAULT 0,
  `fishMaxXp` int(11) DEFAULT 100,
  `woodSkill` int(11) DEFAULT 1,
  `woodXp` int(11) DEFAULT 0,
  `woodMaxXp` int(11) DEFAULT 100,
  `fightSkill` int(11) DEFAULT 1,
  `fightXp` int(11) DEFAULT 0,
  `fightMaxXp` int(11) DEFAULT 100,
  `thiefSkill` int(11) DEFAULT NULL,
  `thiefXp` int(11) DEFAULT NULL,
  `thiefMaxXp` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `skills_id` FOREIGN KEY (`id`) REFERENCES `players` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

CREATE TABLE `stats` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `health` int(11) DEFAULT 100,
  `maxHealth` int(11) DEFAULT 100,
  `money` int(11) DEFAULT 1000,
  `dateSaved` varchar(45) DEFAULT NULL,
  `profilePicture` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `stats_id` FOREIGN KEY (`id`) REFERENCES `players` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
