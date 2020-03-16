BEGIN;

CREATE OR REPLACE FUNCTION trigger_set_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TABLE IF EXISTS groups,users
group_users,group_messages,messages
;



create table groups (
	id SERIAL PRIMARY KEY,
	name VARCHAR(50),
	description VARCHAR(50),
	course INT,
	participants INT,
	created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE TRIGGER set_timestamp
BEFORE UPDATE ON groups
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();
insert into groups  (name,description,course,participants) values ('Learnow','A group for learnow crew',12312,2);

create table users (
	id SERIAL PRIMARY KEY,
	user_name VARCHAR(30),
	total_groups INT
);
insert into users (user_id,user_name,total_groups) values ('Najwan',1);
insert into users (user_id,user_name,total_groups) values ('Aysam',1);

create table group_users (
	group_id INTEGER FOREIGN KEY REFERENCES groups(id),
	user_id INTEGER FOREIGN KEY REFERENCES users(id)
);
insert into group_users (user_id,group_id) values (1,1);
insert into group_users (user_id,group_id) values (1,2);



create table messages (
	id SERIAL PRIMARY KEY,
user_id INTEGER  FOREIGN KEY REFERENCES users(id),
message VARCHAR(255),
created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE TRIGGER set_timestamp
BEFORE UPDATE ON messages
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();


insert into messages (user_id,message) values (1,'Whats my name?');
insert into messages (user_id,message) values (2,'Say my name!');

create table group_messages (
	id INTEGER FOREIGN KEY  REFERENCES groups(id),
	message INTEGER FOREIGN KEY REFERENCES messages(id)
);

COMMIT;