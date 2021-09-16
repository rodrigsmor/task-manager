CREATE TABLE task (
	id BIGINT AUTO_INCREMENT,
	title varchar(60) NOT NULL,
	description varchar(255),
	status varchar(10) NOT NULL,
	photo BLOB,

	PRIMARY KEY(id)
);