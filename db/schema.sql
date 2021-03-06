-- Sql Syntax for creating and using burger database and table
DROP TABLE IF EXISTS burgers_db;
create database burgers_db;

use burgers_db;

create table burgers (
    id integer not null auto_increment,
    burger_name varchar(200),
    devoured boolean DEFAULT false,
    primary key (id)
);