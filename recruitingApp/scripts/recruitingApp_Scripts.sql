/*Replace the  'localDb' with the name of the database your choice.*/

CREATE DATABASE localDb;
USE localDb;

/*Creation of Tables.*/
CREATE TABLE `users` (
  `id` INT NOT NULL auto_increment,
  `actualname` VARCHAR(45) NOT NULL,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `role` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `jobs` (
  `id` INT NOT NULL auto_increment,
  `companyname` VARCHAR(45) NOT NULL,
  `jobname` VARCHAR(45) NOT NULL,
  `description` VARCHAR(45) ,
  `salary` INT NOT NULL,
  `type` VARCHAR(45),
  PRIMARY KEY (`id`));
  
CREATE TABLE `requirements` (
  `id` INT NOT NULL auto_increment,
  `jobid` INT,
  `applid` INT,
  `qualification` VARCHAR(45), 
  `posses` boolean,
  `skill` VARCHAR(45),
  `scale` INT,
  PRIMARY KEY (`id`));
  
CREATE TABLE `applicants` (
  `id` INT NOT NULL auto_increment,
  `fullname` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `contact` VARCHAR(45) NOT NULL,
  `salary` INT,
  `jobid` INT,
  PRIMARY KEY (`id`));                   
