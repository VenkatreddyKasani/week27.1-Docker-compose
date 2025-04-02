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