-- inside postgres, right click the table -> Scripts -> CREATE script
-- to create these tables in heroku run "cat database.sql | heroku pg:psql -a the-binge-watch"

CREATE TABLE favourite_movies
(
    user_id integer NOT NULL,
    id bigint NOT NULL,
    sort_order smallint NOT NULL,
    CONSTRAINT favourite_movies_pkey1 PRIMARY KEY (user_id, id)
);

CREATE TABLE users
(
    id SERIAL NOT NULL,
    username text COLLATE pg_catalog."default" NOT NULL,
    password text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT users_pkey PRIMARY KEY (id),
    CONSTRAINT users_username_key UNIQUE (username)
);
