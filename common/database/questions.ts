import { createConnection } from "./mongodb";

export interface Question {
  question: string;
  answer: string;
}

export const insertOneQuestion = async (question: Question) => {
  const conn = await createConnection();
  conn.insertOne(question);
};

export const findQuestions = async (params: Partial<Question>) => {
  const conn = await createConnection();
  const find = await conn.find(params);
  return find.toArray();
};

// export const findById = async (id: number) => {
//   const conn = await getQuestionsConnection();
//   return conn.findOne({ _id: id });
// };
