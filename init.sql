-- Create database
CREATE DATABASE IF NOT EXISTS my_db;

-- Use the created database
USE my_db;

-- Create table for users
CREATE TABLE `users`(
    `user_id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `username` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL
);
CREATE TABLE `user_points`(
    `user_id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `total_points` INT NOT NULL
);
CREATE TABLE `player_points`(
    `player_id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `player_name` VARCHAR(255) NOT NULL,
    `player_points` VARCHAR(255) NOT NULL COMMENT 'the point scored by a single player',
    `match_id` INT NOT NULL
);
CREATE TABLE `team`(
    `user_id` INT NOT NULL,
    `match_id` INT NOT NULL,
    `players` JSON NOT NULL COMMENT 'Get a list of players, then using their ids, get the sum of points',
    `team_points` INT NOT NULL COMMENT 'the sum of points of all team members',
    PRIMARY KEY(`match_id`)
);

