CREATE TABLE `User`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `phone` VARCHAR(255) NOT NULL,
    `birthday` VARCHAR(255) NOT NULL,
    `gender` VARCHAR(255) NOT NULL,
    `role` VARCHAR(255) NOT NULL
);
ALTER TABLE
    `User` ADD PRIMARY KEY `user_id_primary`(`id`);
CREATE TABLE `Booking`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `roomId` INT NOT NULL,
    `checkIn` DATETIME NOT NULL,
    `checkOut` DATETIME NOT NULL,
    `numberOfGuests` INT NOT NULL,
    `userId` INT NOT NULL
);
ALTER TABLE
    `Booking` ADD PRIMARY KEY `booking_id_primary`(`id`);
CREATE TABLE `Comment`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `roomId` INT NOT NULL,
    `userId` INT NOT NULL,
    `date` DATETIME NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `ratting` INT NOT NULL
);
ALTER TABLE
    `Comment` ADD PRIMARY KEY `comment_id_primary`(`id`);
CREATE TABLE `Room`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `numberOfGuests` INT NOT NULL,
    `bedroom` INT NOT NULL,
    `bed` INT NOT NULL,
    `bathroom` INT NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `washer` TINYINT(1) NOT NULL,
    `iron` TINYINT(1) NOT NULL,
    `television` TINYINT(1) NOT NULL,
    `airConditioner` TINYINT(1) NOT NULL,
    `wifi` TINYINT(1) NOT NULL,
    `kitchen` TINYINT(1) NOT NULL,
    `garage` TINYINT(1) NOT NULL,
    `pool` TINYINT(1) NOT NULL,
    `image` VARCHAR(255) NOT NULL,
    `price` INT NOT NULL,
    `locationId` INT NOT NULL
);
ALTER TABLE
    `Room` ADD PRIMARY KEY `room_id_primary`(`id`);
CREATE TABLE `Location`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `province` VARCHAR(255) NOT NULL,
    `country` VARCHAR(255) NOT NULL,
    `image` VARCHAR(255) NOT NULL
);
ALTER TABLE
    `Location` ADD PRIMARY KEY `location_id_primary`(`id`);
ALTER TABLE
    `Booking` ADD CONSTRAINT `booking_userid_foreign` FOREIGN KEY(`userId`) REFERENCES `User`(`id`);
ALTER TABLE
    `Comment` ADD CONSTRAINT `comment_userid_foreign` FOREIGN KEY(`userId`) REFERENCES `User`(`id`);
ALTER TABLE
    `Booking` ADD CONSTRAINT `booking_roomid_foreign` FOREIGN KEY(`roomId`) REFERENCES `Room`(`id`);
ALTER TABLE
    `Comment` ADD CONSTRAINT `comment_roomid_foreign` FOREIGN KEY(`roomId`) REFERENCES `Room`(`id`);
ALTER TABLE
    `Room` ADD CONSTRAINT `room_locationid_foreign` FOREIGN KEY(`locationId`) REFERENCES `Location`(`id`);