-- to create these tables in heroku run "cat ./api/db/database.sql | heroku pg:psql -a the-binge-watch"

create table users(
    id serial primary key,
    username text unique not null,
    password text not null
);

create table favourite_movies(
    user_id integer references users on delete cascade,
    id bigint not null,
    sort_order smallint not null,
	  primary key (user_id, id)
);