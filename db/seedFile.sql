CREATE TABLE portfolio_projects(
    project_id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    tag VARCHAR(150),
    mimage TEXT,
    intro VARCHAR(500)
);

CREATE TABLE portfolio_images(
    image_id SERIAL PRIMARY KEY,
    project INT,
    image TEXT,
    foreign key (project) references portfolio_projects (project_id)
);

CREATE TABLE portfolio_details(
    detail_id SERIAL PRIMARY KEY,
    project INT,
    detail varchar(500),
    foreign key (project) references portfolio_projects (project_id)
);

CREATE TABLE portfolio_project_technologies(
    tech_id SERIAL PRIMARY KEY,
    technology TEXT
);

CREATE TABLE portfolio_technologies(
    proj_tech_id SERIAL PRIMARY KEY,
    project INT,
    tech INT,
    foreign key (project) references portfolio_projects (project_id),
    foreign key (tech) references portfolio_project_technologies (tech_id)
);