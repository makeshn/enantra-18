create table colleges(
`id` int(255) primary key auto_increment not null,
`name` varchar(255) primary key not null
);



create table years(
`id` int(255) primary key not null,
`name` varchar(500) not null
);

create table accomodationoptions(
`id` int(255) primary key not null,
`option` varchar(10) not null unique
);

create table users(
`id` int(255) primary key auto_increment not null,
`e_id` varchar(500) unique not null,
`name` varchar(500) not null,
`email` varchar(500) unique not null,
`number` bigint(10) unique not null,
`dob` date not null,
`college` varchar(255) not null,
`year` int(255) not null,
`accomodation` int(255) not null,
`referralcode` varchar(500) not null unique,
`blockflag` int(1) not null default 1,
Foreign key(year) references years(id),
Foreign Key(accomodation) references accomodationoptions(id)
);

create table tshirt(
`id` int(255) primary key auto_increment not null,
`size` varchar(500) not null unique

create table ebm(
`id` int(255) primary key auto_increment not null,
`e_id` varchar(500) unique not null,
`t_shirt` int(255)  not null,
Foreign Key(e_id) references users(e_id),
Foreign Key(t_shirt) references tshirt(id) 
);


