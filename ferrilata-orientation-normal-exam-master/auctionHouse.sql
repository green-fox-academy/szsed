CREATE DATABASE auction;
USE auction;

CREATE TABLE itemDetails(
item_ID INT AUTO_INCREMENT NOT NULL,
title VARCHAR (20) NOT NULL,
expiryDate DATETIME,
highestBid INT NOT NULL DEFAULT 0,
highestBidderName VARCHAR(20) NOT NULL DEFAULT "No one (yet)",
PRIMARY KEY (item_ID));