CREATE TABLE `guvi_class`.`profile_status` (
  `id` INT AUTO_INCREMENT,
  `active` TEXT,
  `user_id` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));


CREATE TABLE `guvi_class`.`user_profile` (
  `id` INT AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));


CREATE TABLE `guvi_class`.`friends` (
  `user_id` INT NOT NULL,
  `friend_id` INT NOT NULL
  );

CREATE TABLE `guvi_class`.`comments` (
  `id` INT AUTO_INCREMENT,
  `user_id` VARCHAR(45) NOT NULL,
  `comment` TEXT NOT NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `guvi_class`.`user_login_details` (
  `id` INT AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `password` TEXT NOT NULL,
  `key` TEXT NOT NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `guvi_class`.`posts` (
  `id` INT AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `post` TEXT NOT NULL,
  PRIMARY KEY (`id`));

-------Insertions----------------------------------------------------------
insert into profile_status(`active`, `user_id`) values
('Active', 1),
('Active', 2),
('InActive', 3),
('Active', 4),
('InActive', 5);

insert into user_profile(`name`, `email`) values
('Yesh', 'Yesh@yahoo.com'),
('Ysh', 'Yesh@gmail.com'),
('Aesh', 'Yesh@gmail.com'),
('Mesh', 'Yesh@yahoo.com'),
('Lesh', 'Yesh@gmail.com');

insert into comments(`user_id`, `comment`) values
('5', 'GOod'),
('3', 'Avg'),
('3', 'Excellent'),
('3', 'Test'),
('2', 'Super');

insert into user_login_details(`user_id`, `password`, `key`) values
('5', 'Sachin', 'ksjbbkasj'),
('3', 'Yeshw', 'bkasj'),
('4', 'TEst123', 'kbbkasj'),
('1', 'Postbox123', 'sjbbkasj'),
('2', 'Dummy123', 'jbbkasj');

insert into posts(`user_id`, `post`) values
('5', 'Sachin e Six Posts'),
('3', 'Normal Posts'),
('4', 'Dummy Posts'),
('1', 'Test Posts'),
('5', 'Bomb Blast Posts');

insert into friends(`user_id`, `friend_id`) values
(1, 2),
(3, 2),
(4, 2),
(5, 2),
(1, 3),
(1, 5),
(4, 5),
(1, 4);

---------------Queries------------------------------------------------------------------

select * from friends as fr where fr.user_id in (select id from user_profile);

select * from posts where user_id = 5;	

select * from user_profile where `email` like '%gmail%';

select comment from comments where user_id = 3 limit 5;

select ul.user_id, ul.password, ul.key,up.name, up.email, ps.active, name from user_login_details ul join user_profile up on ul.user_id = up.id join profile_status ps on up.id = ps.user_id;