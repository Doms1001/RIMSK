import { pgTable, text } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  fullname: text("fullname").primaryKey(),
  emailaddress: text("emailaddress").notNull(),
  gender: text("gender").notNull(),
});
