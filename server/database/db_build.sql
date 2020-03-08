BEGIN;

DROP TABLE IF EXISTS users,
roles,
user-roles,
jobs,
;


create table city (
	id SERIAL PRIMARY KEY,
	name VARCHAR(50)
);
insert into city (id, name) values (1, 'Haifa');
insert into city (id, name) values (2, 'Nazareth');
insert into city (id, name) values (3, 'Akko');
insert into city (id, name) values (4, 'Tel-Aviv');
insert into city (id, name) values (5, 'Majdal-Shams');
insert into city (id, name) values (6, 'Um-el-Fahim');
insert into city (id, name) values (7, 'Hertsiliya');
insert into city (id, name) values (8, 'Ceserea');
insert into city (id, name) values (9, 'Kfar-Saba');
insert into city (id, name) values (10, 'Petah-Tikva');


create table hostel (
	id SERIAL PRIMARY KEY,
	name VARCHAR(50),
	capacity INT,
	contact_info VARCHAR(50),
	city_id INT
);
insert into hostel (id, name, capacity, contact_info, city_id) values (1, 'Hostel by The water', 25, '(801) 4464931', 1);
insert into hostel (id, name, capacity, contact_info, city_id) values (2, 'Susans Terrace Hostel', 55, '(192) 8523352', 2);
insert into hostel (id, name, capacity, contact_info, city_id) values (3, 'Dotties Hostel', 61,  '(290) 1979005', 3);
insert into hostel (id, name, capacity, contact_info, city_id) values (4, 'Stone Corner Hostel', 48, '(506) 3577146', 4);
insert into hostel (id, name, capacity, contact_info, city_id) values (5, 'Blackbird Hostel', 42,  '(683) 2673437', 5);
insert into hostel (id, name, capacity, contact_info, city_id) values (6, 'Lilian hostel', 73, '(286) 3496910', 6);
insert into hostel (id, name, capacity, contact_info, city_id) values (7, 'Park Hostel', 15, '(887) 2473533', 7);
insert into hostel (id, name, capacity, contact_info, city_id) values (8, 'Kings Hostel', 21,  '(525) 7953280', 8);
insert into hostel (id, name, capacity, contact_info, city_id) values (9, 'Molans Hostel', 47, '(142) 1849630', 9);
insert into hostel (id, name, capacity, contact_info, city_id) values (10, 'Alley Hostel', 54, '(478) 8858944', 10);

create table guest (
	id INT,
	name VARCHAR(50),
	hostel_id INT,
	phoneNumber VARCHAR(50)
);
insert into guest (id, name, hostel_id, phoneNumber) values (1, 'Greta', 1, '+55 520 621 2109');
insert into guest (id, name, hostel_id, phoneNumber) values (2, 'Aubrey', 2, '+34 436 716 7198');
insert into guest (id, name, hostel_id, phoneNumber) values (3, 'Koo', 3, '+92 294 999 4048');
insert into guest (id, name, hostel_id, phoneNumber) values (4, 'Shana', 4, '+55 643 709 5512');
insert into guest (id, name, hostel_id, phoneNumber) values (5, 'Ravi', 5, '+62 726 561 4817');
insert into guest (id, name, hostel_id, phoneNumber) values (6, 'Malina', 6, '+351 915 290 4422');
insert into guest (id, name, hostel_id, phoneNumber) values (7, 'Jada', 7, '+237 479 410 6959');
insert into guest (id, name, hostel_id, phoneNumber) values (8, 'Ron', 8, '+381 215 963 4095');
insert into guest (id, name, hostel_id, phoneNumber) values (9, 'Arabela', 9, '+7 168 440 9870');
insert into guest (id, name, hostel_id, phoneNumber) values (10, 'Renie', 10, '+86 584 206 8357');

create table reservation (
	id INT,
	city_id INT,
	hostel_id INT,
	Day1 BOOLEAN,
	Day2 BOOLEAN,
	Day3 BOOLEAN,
	Day4 BOOLEAN,
	Day5 BOOLEAN,
	Day6  BOOLEAN,
	Day7  BOOLEAN,
	Day8 BOOLEAN,
	Day9 BOOLEAN,
	Day10 BOOLEAN,
	Day11 BOOLEAN,
	Day12 BOOLEAN,
	Day13 BOOLEAN,
	Day14 BOOLEAN,
	Day15 BOOLEAN,
	Day16 BOOLEAN,
	Day17 BOOLEAN,
	Day18 BOOLEAN,
	Day19 BOOLEAN,
	Day20 BOOLEAN,
	Day21 BOOLEAN,
	Day22 BOOLEAN,
	Day23 BOOLEAN,
	Day24 BOOLEAN,
	Day25 BOOLEAN,
	Day26 BOOLEAN,
	Day27 BOOLEAN,
	Day28 BOOLEAN,
	Day29 BOOLEAN,
	Day30 BOOLEAN,
	Day31 BOOLEAN 
);


insert into reservation (id, city_id, hostel_id, Day1, Day2, Day3, Day4, Day5, Day6 , Day7 , Day8, Day9, Day10, Day11, Day12, Day13, Day14, Day15, Day16, Day17, Day18, Day19, Day20, Day21, Day22, Day23, Day24, Day25, Day26, Day27, Day28, Day29, Day30, Day31) values (1, 1, 1, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE);
insert into reservation (id, city_id, hostel_id, Day1, Day2, Day3, Day4, Day5, Day6 , Day7 , Day8, Day9, Day10, Day11, Day12, Day13, Day14, Day15, Day16, Day17, Day18, Day19, Day20, Day21, Day22, Day23, Day24, Day25, Day26, Day27, Day28, Day29, Day30, Day31) values (2, 2, 2, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE);
insert into reservation (id, city_id, hostel_id, Day1, Day2, Day3, Day4, Day5, Day6 , Day7 , Day8, Day9, Day10, Day11, Day12, Day13, Day14, Day15, Day16, Day17, Day18, Day19, Day20, Day21, Day22, Day23, Day24, Day25, Day26, Day27, Day28, Day29, Day30, Day31) values (3, 3, 3, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE);
insert into reservation (id, city_id, hostel_id, Day1, Day2, Day3, Day4, Day5, Day6 , Day7 , Day8, Day9, Day10, Day11, Day12, Day13, Day14, Day15, Day16, Day17, Day18, Day19, Day20, Day21, Day22, Day23, Day24, Day25, Day26, Day27, Day28, Day29, Day30, Day31) values (4, 4, 4, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE);
insert into reservation (id, city_id, hostel_id, Day1, Day2, Day3, Day4, Day5, Day6 , Day7 , Day8, Day9, Day10, Day11, Day12, Day13, Day14, Day15, Day16, Day17, Day18, Day19, Day20, Day21, Day22, Day23, Day24, Day25, Day26, Day27, Day28, Day29, Day30, Day31) values (5, 5, 5, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE);
insert into reservation (id, city_id, hostel_id, Day1, Day2, Day3, Day4, Day5, Day6 , Day7 , Day8, Day9, Day10, Day11, Day12, Day13, Day14, Day15, Day16, Day17, Day18, Day19, Day20, Day21, Day22, Day23, Day24, Day25, Day26, Day27, Day28, Day29, Day30, Day31) values (6, 6, 6, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE);
insert into reservation (id, city_id, hostel_id, Day1, Day2, Day3, Day4, Day5, Day6 , Day7 , Day8, Day9, Day10, Day11, Day12, Day13, Day14, Day15, Day16, Day17, Day18, Day19, Day20, Day21, Day22, Day23, Day24, Day25, Day26, Day27, Day28, Day29, Day30, Day31) values (7, 7, 7, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE);
insert into reservation (id, city_id, hostel_id, Day1, Day2, Day3, Day4, Day5, Day6 , Day7 , Day8, Day9, Day10, Day11, Day12, Day13, Day14, Day15, Day16, Day17, Day18, Day19, Day20, Day21, Day22, Day23, Day24, Day25, Day26, Day27, Day28, Day29, Day30, Day31) values (8, 8, 8, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE);
insert into reservation (id, city_id, hostel_id, Day1, Day2, Day3, Day4, Day5, Day6 , Day7 , Day8, Day9, Day10, Day11, Day12, Day13, Day14, Day15, Day16, Day17, Day18, Day19, Day20, Day21, Day22, Day23, Day24, Day25, Day26, Day27, Day28, Day29, Day30, Day31) values (9, 9, 9, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE);
insert into reservation (id, city_id, hostel_id, Day1, Day2, Day3, Day4, Day5, Day6 , Day7 , Day8, Day9, Day10, Day11, Day12, Day13, Day14, Day15, Day16, Day17, Day18, Day19, Day20, Day21, Day22, Day23, Day24, Day25, Day26, Day27, Day28, Day29, Day30, Day31) values (10, 10, 10, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE);


COMMIT;