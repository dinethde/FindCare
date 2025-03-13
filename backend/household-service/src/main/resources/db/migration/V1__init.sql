CREATE TABLE household (
household_id SERIAL PRIMARY KEY,
auth0_identifier VARCHAR(255),
householdacc_id INT,
preferred_language VARCHAR(50)
);

CREATE TABLE household_address (
household_id INT NOT NULL PRIMARY KEY,
address      VARCHAR(255),
city         VARCHAR(100),
postalcode   VARCHAR(20),
FOREIGN KEY (household_id) REFERENCES household (household_id)
);

CREATE TABLE household_contact (
contact_id   SERIAL PRIMARY KEY,
household_id INT NOT NULL,
email        VARCHAR(255),
FOREIGN KEY (household_id) REFERENCES household (household_id)
);

CREATE TABLE household_phone (
phone_id     SERIAL PRIMARY KEY,
contact_id   INT NOT NULL,
phone_number VARCHAR(50) NOT NULL,
CONSTRAINT unique_contact_phone UNIQUE (contact_id, phone_number),
FOREIGN KEY (contact_id) REFERENCES household_contact(contact_id)
);
