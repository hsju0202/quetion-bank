import { MongoClient } from "mongodb";

const URI = process.env.DB_URI!;
const DB = process.env.DB;
const QUESTIONS = process.env.DB_COLLECTION!;

const client = new MongoClient(URI);

export const createConnection = async () => {
  const connection = client.db(DB);
  return connection.collection(QUESTIONS);
};
