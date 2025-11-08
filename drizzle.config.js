// drizzle.config.js (ESM)
import dotenv from "dotenv";
dotenv.config();

console.log("✅ drizzle.config.js loaded");

export default {
  schema: "./src/db/schema.js",
  out: "./src/db/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
};
