import postgres from "postgres";

const username: string = process.env.PG_USER_NAME as string;
const dbName: string = process.env.PG_DATABASE_NAME as string;
const password: string = process.env.PG_USER_PASS as string;
const port: number = parseInt(process.env.PG_PORT as string) || 5432;
const host: string = (process.env.PG_HOST as string) || "localhost";

const connectionOptions: postgres.Options<{}> = {
  host: host,
  port: port,
  database: dbName,
  username: username,
  password: password,
};

const sql = postgres(connectionOptions);

export default sql;
