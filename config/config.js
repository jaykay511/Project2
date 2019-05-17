require("dotenv").config();
module.exports={
    "development": {
      "username": "root",
      "password": process.env.DATABASE_PASSWORD,
      "database": "project2",
      "host": "127.0.0.1",
      "dialect": "mysql"
    },
    "test": {
      "username": "root",
      "password": null,
      "database": "database_test",
      "host": "127.0.0.1",
      "dialect": "mysql"
    },
    "production": {
      "username": "root",
      "password": process.env.JAWS_DATABASE_PASSWORD,
      "use_env_variable": "JAWSDB_URL",
      "database": "r48w73ggi8b8i85s",
      "host": "xq7t6tasopo9xxbs.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
      "dialect": "mysql"
    }
  };
  
  