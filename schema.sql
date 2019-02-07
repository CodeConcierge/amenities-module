DROP DATABASE IF EXISTS h4b_amenities;

CREATE DATABASE h4b_amenities;

USE h4b_amenities;

CREATE TABLE amenities (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(30) NOT NULL,
  appeal int NOT NULL,
  img_url varchar(500) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE amen_join_home (
  id int NOT NULL AUTO_INCREMENT,
  amen_id int NOT NULL,
  home_id int NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE common_amenities (
  amen_id int NOT NULL,
  PRIMARY KEY (amen_id)
);


/*  Execute this file from the command line by typing:
 *    mysql -u <USER> -p < schema.sql
*/


-- amenities
INSERT INTO amenities (name,appeal,img_url) VALUES ('Wifi',9,'https://drive.google.com/open?id=19rhp7TXQ9lmv30yc1DWVnf4xugPQf-du');
INSERT INTO amenities (name,appeal,img_url) VALUES ('Breakfast',3,'https://drive.google.com/open?id=1K5DVI6aXhoh-393-kS7QdmP5nY0IzkkQ');
INSERT INTO amenities (name,appeal,img_url) VALUES ('Washer',5,'https://drive.google.com/open?id=1CV6LvqqwOmXOBSLi4aA-Yp0fax4SJ-b4');
INSERT INTO amenities (name,appeal,img_url) VALUES ('Dryer',5,'https://drive.google.com/open?id=1xA9bmhnxVqsgPx4Jpfl0yWuKv9pMiza-');
INSERT INTO amenities (name,appeal,img_url) VALUES ('Pet Friendly',8,'https://drive.google.com/open?id=1QHatk1ZNAq4wP3O1NU_ACFEp1u7BL5-d');
INSERT INTO amenities (name,appeal,img_url) VALUES ('Fireplace',7,'https://drive.google.com/open?id=1RE47OTiFyzQZj1pyq71r5OCqp8Df7kma');
INSERT INTO amenities (name,appeal,img_url) VALUES ('Free Parking',7,'https://drive.google.com/open?id=18Y567vq9G4XFyqN0DAmLNCG66IHlaAtM');
INSERT INTO amenities (name,appeal,img_url) VALUES ('Kitchen',6,'https://drive.google.com/open?id=13hDQnd1fgbkaKYsGsTgVAgdSAEKJleeZ');
INSERT INTO amenities (name,appeal,img_url) VALUES ('Cable TV',5,'https://drive.google.com/open?id=1MoAOcQYNK40iHc9amzjDfktn6H7EaDuc');
INSERT INTO amenities (name,appeal,img_url) VALUES ('Air Conditioning',4,'https://drive.google.com/open?id=1dlZSPCtf5CDQPpy2w4nrRhYZr2-L3qi9');

-- join table
INSERT INTO amen_join_home (amen_id,home_id) VALUES (9,100);
INSERT INTO amen_join_home (amen_id,home_id) VALUES (5,100);
INSERT INTO amen_join_home (amen_id,home_id) VALUES (6,100);
INSERT INTO amen_join_home (amen_id,home_id) VALUES (2,100);
INSERT INTO amen_join_home (amen_id,home_id) VALUES (5,100);
INSERT INTO amen_join_home (amen_id,home_id) VALUES (0,100);
INSERT INTO amen_join_home (amen_id,home_id) VALUES (6,100);
INSERT INTO amen_join_home (amen_id,home_id) VALUES (7,100);
INSERT INTO amen_join_home (amen_id,home_id) VALUES (7,101);
INSERT INTO amen_join_home (amen_id,home_id) VALUES (9,101);
INSERT INTO amen_join_home (amen_id,home_id) VALUES (9,101);
INSERT INTO amen_join_home (amen_id,home_id) VALUES (6,101);
INSERT INTO amen_join_home (amen_id,home_id) VALUES (5,101);
INSERT INTO amen_join_home (amen_id,home_id) VALUES (2,101);
INSERT INTO amen_join_home (amen_id,home_id) VALUES (9,101);
INSERT INTO amen_join_home (amen_id,home_id) VALUES (8,101);
INSERT INTO amen_join_home (amen_id,home_id) VALUES (9,102);
INSERT INTO amen_join_home (amen_id,home_id) VALUES (1,102);
INSERT INTO amen_join_home (amen_id,home_id) VALUES (4,102);
INSERT INTO amen_join_home (amen_id,home_id) VALUES (8,102);
INSERT INTO amen_join_home (amen_id,home_id) VALUES (4,102);
INSERT INTO amen_join_home (amen_id,home_id) VALUES (9,102);
INSERT INTO amen_join_home (amen_id,home_id) VALUES (7,102);
INSERT INTO amen_join_home (amen_id,home_id) VALUES (5,102);
INSERT INTO amen_join_home (amen_id,home_id) VALUES (0,103);
INSERT INTO amen_join_home (amen_id,home_id) VALUES (7,103);
INSERT INTO amen_join_home (amen_id,home_id) VALUES (9,103);
INSERT INTO amen_join_home (amen_id,home_id) VALUES (5,103);
INSERT INTO amen_join_home (amen_id,home_id) VALUES (1,103);
INSERT INTO amen_join_home (amen_id,home_id) VALUES (1,103);
INSERT INTO amen_join_home (amen_id,home_id) VALUES (8,103);
INSERT INTO amen_join_home (amen_id,home_id) VALUES (1,103);
INSERT INTO amen_join_home (amen_id,home_id) VALUES (6,104);
INSERT INTO amen_join_home (amen_id,home_id) VALUES (2,104);
INSERT INTO amen_join_home (amen_id,home_id) VALUES (0,104);
INSERT INTO amen_join_home (amen_id,home_id) VALUES (0,104);
INSERT INTO amen_join_home (amen_id,home_id) VALUES (7,104);
INSERT INTO amen_join_home (amen_id,home_id) VALUES (1,104);
INSERT INTO amen_join_home (amen_id,home_id) VALUES (4,104);
INSERT INTO amen_join_home (amen_id,home_id) VALUES (6,104);
INSERT INTO amen_join_home (amen_id,home_id) VALUES (1,105);
INSERT INTO amen_join_home (amen_id,home_id) VALUES (8,105);

-- common_amenities

INSERT INTO common_amenities (amen_id) VALUES (1);
INSERT INTO common_amenities (amen_id) VALUES (7);
INSERT INTO common_amenities (amen_id) VALUES (8);
INSERT INTO common_amenities (amen_id) VALUES (9);
INSERT INTO common_amenities (amen_id) VALUES (10);