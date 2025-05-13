IF EXISTS (
  SELECT
    name
  FROM
    sys.databases
  WHERE
    name = 'mds_api_database'
) BEGIN ALTER DATABASE mds_api_database
SET
  SINGLE_USER WITH ROLLBACK IMMEDIATE;

DROP DATABASE mds_api_database;

END;

CREATE DATABASE mds_api_database;

-- ===================================
-- Drop all table in the right order to properly dismantle Foreign key reference
-- ===================================
DROP TABLE IF EXISTS h_has_specifications;

DROP TABLE IF EXISTS p_product_has_specification;

DROP TABLE IF EXISTS p_product_specification;

DROP TABLE IF EXISTS o_order_contains;

DROP TABLE IF EXISTS c_cart;

DROP TABLE IF EXISTS i_internal_message;

DROP TABLE IF EXISTS c_commercial_handling;

DROP TABLE IF EXISTS c_customer_review;

DROP TABLE IF EXISTS d_delivery;

DROP TABLE IF EXISTS o_order;

DROP TABLE IF EXISTS d_delivery_tour;

DROP TABLE IF EXISTS p_product;

DROP TABLE IF EXISTS p_product_type;

DROP TABLE IF EXISTS u_user;

DROP TABLE IF EXISTS i_image;

-- ===================================
-- Create all table with their property, type and foreign key
-- ===================================
CREATE TABLE u_user(
  u_id_user INT IDENTITY,
  u_role VARCHAR(30) NOT NULL,
  u_registered_at DATETIMEOFFSET NOT NULL,
  u_lastname VARCHAR(50) NOT NULL,
  u_firstname VARCHAR(50) NOT NULL,
  u_mail_adress VARCHAR(100) NOT NULL,
  u_hashed_password VARCHAR(60) NOT NULL,
  u_adress_country VARCHAR(75) NOT NULL,
  u_adress_region_code VARCHAR(20) NOT NULL,
  u_adress_city VARCHAR(75) NOT NULL,
  u_adress_location VARCHAR(75) NOT NULL,
  u_adress_precision VARCHAR(75),
  u_is_deleted BIT NOT NULL,
  PRIMARY KEY(u_id_user)
);

CREATE TABLE o_order(
  o_id_user_order INT IDENTITY,
  o_order_number VARCHAR(20) NOT NULL,
  o_status VARCHAR(30) NOT NULL,
  o_ordered_at DATETIMEOFFSET NOT NULL,
  o_discount MONEY NOT NULL,
  o_final_price MONEY NOT NULL,
  o_delivery_adress_country VARCHAR(75) NOT NULL,
  o_delivery_adress_region_code VARCHAR(20) NOT NULL,
  o_delivery_adress_city VARCHAR(75) NOT NULL,
  o_delivery_adress_location VARCHAR(75) NOT NULL,
  o_delivery_adress_precision VARCHAR(75),
  PRIMARY KEY(o_id_user_order)
);

CREATE TABLE i_internal_message(
  i_id_internal_message INT IDENTITY,
  i_send_at DATETIMEOFFSET NOT NULL,
  i_read_at DATETIMEOFFSET,
  i_message_content VARCHAR(5000) NOT NULL,
  i_id_user_receiver INT NOT NULL,
  i_id_user_sender INT NOT NULL,
  PRIMARY KEY(i_id_internal_message),
  FOREIGN KEY(i_id_user_receiver) REFERENCES u_user(u_id_user),
  FOREIGN KEY(i_id_user_sender) REFERENCES u_user(u_id_user)
);

CREATE TABLE p_product_type(
  p_id_product_type INT IDENTITY,
  p_type_name VARCHAR(50) NOT NULL,
  PRIMARY KEY(p_id_product_type)
);

CREATE TABLE p_product_specification(
  p_id_product_specification INT IDENTITY,
  p_specification_name VARCHAR(100) NOT NULL,
  p_is_specific_value BIT NOT NULL,
  p_possible_value VARCHAR(200),
  PRIMARY KEY(p_id_product_specification)
);

CREATE TABLE i_image(
  i_id_image INT IDENTITY,
  i_image VARBINARY(max) NOT NULL,
  PRIMARY KEY(i_id_image)
);

CREATE TABLE c_commercial_handling(
  c_id_commercial_handling INT IDENTITY,
  c_id_user_handler INT NOT NULL,
  c_id_user_handled INT NOT NULL,
  PRIMARY KEY(c_id_commercial_handling),
  FOREIGN KEY(c_id_user_handler) REFERENCES u_user(u_id_user),
  FOREIGN KEY(c_id_user_handled) REFERENCES u_user(u_id_user)
);

CREATE TABLE d_delivery_tour(
  d_id_delivery_tour INT IDENTITY,
  d_start_at DATETIMEOFFSET NOT NULL,
  d_end_at DATETIMEOFFSET NOT NULL,
  d_id_user INT NOT NULL,
  PRIMARY KEY(d_id_delivery_tour),
  FOREIGN KEY(d_id_user) REFERENCES u_user(u_id_user)
);

CREATE TABLE p_product(
  p_id_product INT IDENTITY,
  p_name VARCHAR(200) NOT NULL,
  p_description VARCHAR(8000) NOT NULL,
  p_price MONEY NOT NULL,
  p_registered_at DATETIMEOFFSET NOT NULL,
  p_is_available BIT NOT NULL,
  p_stock INT NOT NULL,
  p_disable_at DATETIMEOFFSET,
  p_id_product_type INT NOT NULL,
  p_id_user INT NOT NULL,
  PRIMARY KEY(p_id_product),
  FOREIGN KEY(p_id_product_type) REFERENCES p_product_type(p_id_product_type),
  FOREIGN KEY(p_id_user) REFERENCES u_user(u_id_user)
);

CREATE TABLE d_delivery(
  d_id_delivery INT IDENTITY,
  d_delivery_number VARCHAR(50) NOT NULL,
  d_status VARCHAR(30) NOT NULL,
  d_shipped_at DATETIMEOFFSET,
  d_delivered_at DATETIMEOFFSET,
  d_id_delivery_tour INT NOT NULL,
  PRIMARY KEY(d_id_delivery),
  FOREIGN KEY(d_id_delivery_tour) REFERENCES d_delivery_tour(d_id_delivery_tour)
);

CREATE TABLE c_customer_review(
  c_id_customer_review INT IDENTITY,
  c_review_content VARCHAR(5000) NOT NULL,
  c_verified BIT NOT NULL,
  c_rediged_at DATETIMEOFFSET NOT NULL,
  c_id_user INT NOT NULL,
  c_id_product INT NOT NULL,
  PRIMARY KEY(c_id_customer_review),
  FOREIGN KEY(c_id_user) REFERENCES u_user(u_id_user),
  FOREIGN KEY(c_id_product) REFERENCES p_product(p_id_product)
);

CREATE TABLE c_cart(
  c_id_cart INT IDENTITY,
  c_id_user INT,
  c_id_product INT,
  c_quantity SMALLINT NOT NULL,
  PRIMARY KEY(c_id_cart),
  FOREIGN KEY(c_id_user) REFERENCES u_user(u_id_user),
  FOREIGN KEY(c_id_product) REFERENCES p_product(p_id_product)
);

CREATE TABLE h_has_specifications(
  h_id_has_specifications INT IDENTITY,
  h_id_product_type INT,
  h_id_product_specification INT,
  PRIMARY KEY(h_id_has_specifications),
  FOREIGN KEY(h_id_product_type) REFERENCES p_product_type(p_id_product_type),
  FOREIGN KEY(h_id_product_specification) REFERENCES p_product_specification(p_id_product_specification)
);

CREATE TABLE p_product_has_specification(
  p_id_product_has_specification INT IDENTITY,
  p_id_product INT,
  p_id_product_specification INT,
  p_product_specification_value VARCHAR(200),
  PRIMARY KEY(p_id_product_has_specification),
  FOREIGN KEY(p_id_product) REFERENCES p_product(p_id_product),
  FOREIGN KEY(p_id_product_specification) REFERENCES p_product_specification(p_id_product_specification)
);

CREATE TABLE o_order_contains(
  o_id_order_contains INT IDENTITY,
  o_id_user INT,
  o_id_product INT,
  o_id_order INT,
  o_id_delivery INT,
  o_quantity VARCHAR(50),
  o_individual_price MONEY NOT NULL,
  PRIMARY KEY(o_id_order_contains),
  FOREIGN KEY(o_id_user) REFERENCES u_user(u_id_user),
  FOREIGN KEY(o_id_product) REFERENCES p_product(p_id_product),
  FOREIGN KEY(o_id_order) REFERENCES o_order(o_id_user_order),
  FOREIGN KEY(o_id_delivery) REFERENCES d_delivery(d_id_delivery)
);

-- ===================================
-- Create index on some table
-- ===================================
-- Create index on user mail because search on it to login is very recurrent
CREATE INDEX index_user_mail_adress ON u_user(u_mail_adress);

-- Used with something like that
-- SELECT * FROM u_user WITH (INDEX(user_mail_adresse)) WHERE u_mail_adress = 'mark795@papazzo.it';
;

-- Create index on product for product type because filter on it is current usage
CREATE INDEX index_product_type ON p_product(p_id_product_type);

-- Used with something like that
-- SELECT * FROM p_product WITH (INDEX(index_product_type)) WHERE p_id_product_type = 3;;
;

-- Create index on order number because customers would search order by number
CREATE INDEX index_order_number ON o_order(o_order_number);

-- Used with something like that
-- SELECT * FROM o_order WITH (INDEX(index_order_number)) WHERE o_order_number = '4E7129BB-E547-4823-8';
;

-- Create index on delivery number because delevery man or customers would search delivery by number
CREATE INDEX index_delivery_number ON d_delivery(d_delivery_number);

-- Used with something like that
-- SELECT * FROM d_delivery WITH (INDEX(index_delivery_number)) WHERE d_delivery_number = '6D1ED619-F934-46E7-9';
;

GO
;

-- ===================================
-- Create view
-- ===================================
CREATE VIEW commercial_supplier_info AS
SELECT
  UPPER(supplier.u_lastname) + ' ' + UPPER(supplier.u_firstname) AS supplier_name,
  UPPER(commercial.u_lastname) + ' ' + UPPER(commercial.u_firstname) AS commercial_name,
  supplier.u_mail_adress AS supplier_mail_adress
FROM
  c_commercial_handling ch
  JOIN u_user commercial ON ch.c_id_user_handler = commercial.u_id_user
  JOIN u_user supplier ON ch.c_id_user_handled = supplier.u_id_user;

GO
;
