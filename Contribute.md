## Manual Installation
To install the package manually, you can use the following steps:
- Install nodejs
-clone repository
-install  dependencies using npm install
-start the DB locally
    - docker run -e POSTGRES_PASSWORD -d -p 5432:5432 postgres
    -go to neon.tech and get yourself a new DB
-change the .env file and update your DB credentials
-npx prisma migrate
-npx prisma generate
-npm run build
-npm run start



## Docker installation
To install the package using Docker, you can use the following steps:
- Install Docker
-start postgress
     - docker run --name postgress_user_app -e POSTGRES_PASSWORD -d -p 5432:5432 postgres
-Build the image - " docker build --network=host -t user-project ."
-start the image - "docker run -p 3000:3000 user-project"

## Docker Compose installation steps
-Install docker,docker-compose
-Run "docker-compose-up"