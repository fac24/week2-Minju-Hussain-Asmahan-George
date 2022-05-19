BEGIN;

DROP TABLE IF EXISTS pets, pet_type CASCADE;

CREATE TABLE pet_type (
    id SERIAL PRIMARY KEY,
    pet_kind VARCHAR(255)
);


CREATE TABLE pets (
    id SERIAL PRIMARY KEY,
    pet_name VARCHAR(255) NOT NULL,
    type_id INTEGER REFERENCES pet_type(id),
    birth_date DATE
);

INSERT INTO pet_type (pet_kind) VALUES 
    ('cat'),
    ('dog'),
    ('bird'),
    ('rabbit');


INSERT INTO pets (pet_name, type_id, birth_date) VALUES 
    ('Pumpkin',1,'2018-05-20'),
    ('Dug',2,'2015-02-19'),
    ('Bread',3,'2022-01-10'),
    ('Robin',4,'2000-09-14');



COMMIT;