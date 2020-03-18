BEGIN;

CREATE OR REPLACE FUNCTION trigger_set_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TABLE IF EXISTS groups,users,
group_users,group_messages,messages
;



create table groups (
	id SERIAL PRIMARY KEY,
	name UNIQUE VARCHAR(50),
	description VARCHAR(200),
	course INT,
	participants INT,
	updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
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
insert into users (user_name,total_groups) values ('Najwan',1);
insert into users (user_name,total_groups) values ('Aysam',1);

create table group_users (
	group_id INTEGER ,
	user_id INTEGER ,
FOREIGN KEY (group_id) REFERENCES groups(id),
FOREIGN KEY (user_id) REFERENCES users(id),
UNIQUE(group_id,user_id)
);
insert into group_users (group_id,user_id) values (1,1);
insert into group_users (group_id,user_id) values (1,2);



create table messages (
	id SERIAL PRIMARY KEY,
user_id INTEGER  ,
message VARCHAR(255),
updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
FOREIGN KEY (user_id) REFERENCES users(id)
);
CREATE TRIGGER set_timestamp
BEFORE UPDATE ON messages
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();


insert into messages (user_id,message) values (1,'Whats my name?');
insert into messages (user_id,message) values (2,'Say my name!');

create table group_messages (
	group_id INTEGER ,
	message_id INTEGER ,
	FOREIGN KEY  (group_id) REFERENCES groups(id),
	FOREIGN KEY (message_id) REFERENCES messages(id)
);

COMMIT;