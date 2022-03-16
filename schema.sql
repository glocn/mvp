DROP DATABASE IF EXISTS boba;
CREATE DATABASE boba;
USE boba;

DROP TABLE IF EXISTS pairing;
CREATE TABLE pairing (
  id int NOT NULL AUTO_INCREMENT,
  about text NOT NULL,
  PRIMARY KEY (ID)
);

INSERT INTO pairing (about) values ('Honey Green Tea with Aloe');
INSERT INTO pairing (about) values ('Jasmine Green Tea with Rainbow Jelly');
INSERT INTO pairing (about) values ('Black Tea with Lychee Jelly');
INSERT INTO pairing (about) values ('Peach Green Tea with Lychee Jelly');
INSERT INTO pairing (about) values ('Wintermelon Tea with Small Tapioca');
INSERT INTO pairing (about) values ('Mango slush with Mango Sago');
INSERT INTO pairing (about) values ('Lychee Black Tea with Boba');
INSERT INTO pairing (about) values ('Mango Green Tea with Lychee Jelly');
INSERT INTO pairing (about) values ('Strawberry Green Tea with Boba');
INSERT INTO pairing (about) values ('Pineapple Black Tea with Basil Seeds');
INSERT INTO pairing (about) values ('Honeydew Green Tea with Coconut Jelly');
INSERT INTO pairing (about) values ('Pineapple Green Tea with Boba');
INSERT INTO pairing (about) values ('Taro Milk Tea with Oatmilk and Almond Jelly');
INSERT INTO pairing (about) values ('Passionfuit Black Tea with Boba');
INSERT INTO pairing (about) values ('Watermelon Green Tea with Rainbow Jelly');
INSERT INTO pairing (about) values ('Almond Milk Tea with Almond milk and Coconut Jelly');
INSERT INTO pairing (about) values ('Coffee Milk Tea with Almond Milk and Pudding');
INSERT INTO pairing (about) values ('Jasmine Green Milk Tea with Oatmilk and Boba');
INSERT INTO pairing (about) values ('Regular Black Milk Tea with Oatmilk and Small Tapioca');
INSERT INTO pairing (about) values ('Grapefuit Green Tea with Lychee Jelly');
