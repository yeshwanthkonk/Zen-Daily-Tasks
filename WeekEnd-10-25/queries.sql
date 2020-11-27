select u.name, count(cud.id) as "No_Questions" from users u join codekata_user_data cud on u.id=cud.user_id join codekata c on
c.id=cud.codekata_id group by u.id;

select u.name, count(dcd.id) as "No_Drives Attended" from users u join drive_user_data dcd on u.id=
dcd.user_id join company_drives cd on cd.id=dcd.drive_id group by u.id;

select * from users where is_mentor=1;

select mentor_id, count(distinct user_id) as Count_students
from mentors
group by mentor_id;

use mydb;


-- -----------------------------------------------------
-- Table `mydb`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`codekata`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`codekata` (
  `id` INT NOT NULL,
  `question_no` INT NOT NULL,
  `question_type` VARCHAR(45) NOT NULL,
  `description` TEXT NOT NULL,
  `question_user_link` INT NOT NULL,
  `Max_marks` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`topics`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`topics` (
  `id` INT NOT NULL,
  `topic_name` VARCHAR(45) NOT NULL,
  `description` TEXT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`attendance`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`attendance` (
  `id` INT NOT NULL,
  `user_id` INT NOT NULL,
  `on_date` TIMESTAMP NOT NULL,
  `topic_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `atten_user_idx` (`user_id` ASC) VISIBLE,
  INDEX `atten_topic_idx` (`topic_id` ASC) VISIBLE,
  CONSTRAINT `atten_user`
    FOREIGN KEY (`user_id`)
    REFERENCES `mydb`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `atten_topic`
    FOREIGN KEY (`topic_id`)
    REFERENCES `mydb`.`topics` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`tasks`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`tasks` (
  `id` INT NOT NULL,
  `task_name` TEXT NOT NULL,
  `topic_id` INT NOT NULL,
  `status` VARCHAR(45) NOT NULL,
  `due_date` TIMESTAMP NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `tasks_topic_idx` (`topic_id` ASC) VISIBLE,
  CONSTRAINT `tasks_topic`
    FOREIGN KEY (`topic_id`)
    REFERENCES `mydb`.`topics` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`company_drives`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`company_drives` (
  `id` INT NOT NULL,
  `comany_name` VARCHAR(45) NOT NULL,
  `drive_date` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`courses`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`courses` (
  `id` INT NOT NULL,
  `course_name` VARCHAR(45) NOT NULL,
  `domain` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`mentors`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`mentors` (
  `id` INT NOT NULL,
  `user_id` INT NOT NULL,
  `courser_id` INT NOT NULL,
  `status` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `mentor_user_idx` (`user_id` ASC) VISIBLE,
  INDEX `mentor_course_idx` (`courser_id` ASC) VISIBLE,
  CONSTRAINT `mentor_user`
    FOREIGN KEY (`user_id`)
    REFERENCES `mydb`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `mentor_course`
    FOREIGN KEY (`courser_id`)
    REFERENCES `mydb`.`courses` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`student_activated_courses`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`student_activated_courses` (
  `id` INT NOT NULL,
  `user_id` INT NOT NULL,
  `course_id` INT NOT NULL,
  `status` VARCHAR(45) NOT NULL,
  `is_active` TINYINT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `status_course_user_idx` (`user_id` ASC) VISIBLE,
  INDEX `status_course_idx` (`course_id` ASC) VISIBLE,
  CONSTRAINT `status_course_user`
    FOREIGN KEY (`user_id`)
    REFERENCES `mydb`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `status_course`
    FOREIGN KEY (`course_id`)
    REFERENCES `mydb`.`courses` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`codekata_user_data`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`codekata_user_data` (
  `id` INT NOT NULL,
  `user_id` INT NOT NULL,
  `codekata_id` INT NOT NULL,
  `marks` INT NOT NULL,
  `status` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `question_user_idx` (`user_id` ASC) VISIBLE,
  INDEX `question_codekata_idx` (`codekata_id` ASC) VISIBLE,
  CONSTRAINT `question_user`
    FOREIGN KEY (`user_id`)
    REFERENCES `mydb`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `question_codekata`
    FOREIGN KEY (`codekata_id`)
    REFERENCES `mydb`.`codekata` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`drive_user_data`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`drive_user_data` (
  `id` INT NOT NULL,
  `drive_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  `drive_status` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `drive_user_idx` (`user_id` ASC) VISIBLE,
  INDEX `drive_company_link_idx` (`drive_id` ASC) VISIBLE,
  CONSTRAINT `drive_user`
    FOREIGN KEY (`user_id`)
    REFERENCES `mydb`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `drive_company_link`
    FOREIGN KEY (`drive_id`)
    REFERENCES `mydb`.`company_drives` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

USE `guvi_class` ;

-- -----------------------------------------------------
-- Table `guvi_class`.`comments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `guvi_class`.`comments` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `user_id` INT(11) NOT NULL,
  `comment` TEXT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `guvi_class`.`friends`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `guvi_class`.`friends` (
  `user_id` INT(11) NOT NULL,
  `friend_id` INT(11) NOT NULL)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `guvi_class`.`posts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `guvi_class`.`posts` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `user_id` INT(11) NOT NULL,
  `post` TEXT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `guvi_class`.`profile_status`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `guvi_class`.`profile_status` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `active` TEXT NULL DEFAULT NULL,
  `user_id` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `guvi_class`.`user_login_details`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `guvi_class`.`user_login_details` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `user_id` INT(11) NOT NULL,
  `password` TEXT NOT NULL,
  `key` TEXT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `guvi_class`.`user_profile`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `guvi_class`.`user_profile` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;