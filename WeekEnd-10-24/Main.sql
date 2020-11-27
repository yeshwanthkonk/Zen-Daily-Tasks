create database guvi_class;
show databases;
use guvi_class;

show tables;

select user_id, count(distinct user_id) from friends group by user_id;

select id, count(user_id) from posts group by id;

insert into profile_status(`active`, `user_id`) values
('Active', 1),
('Active', 2),
('InActive', 3),
('Active', 4),
('InActive', 5);

insert into friends(`user_id`, `friend_id`) values
(1, 2),
(3, 2);

select ul.user_id, ul.password, ul.key,up.name, up.email, ps.active, name from user_login_details ul join user_profile up on ul.user_id = up.id join profile_status ps on up.id = ps.user_id;



-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
-- -----------------------------------------------------
-- Schema guvi_class
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema guvi_class
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `guvi_class` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `mydb` ;

