import dotenv from "dotenv";
dotenv.config();

const config = {
  db: {
    local: process.env.DB_LOCAL_URI,
    atlas: process.env.DB_PROD_URI,
  },
};

export default config;
