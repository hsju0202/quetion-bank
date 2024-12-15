import { findQuestions, insertOneQuestion } from "@/common/database/questions";
import { redirect } from "next/navigation";

export default async function QuestionsPage() {
  const questions = await findQuestions({});

  const createQuestion = async (formData: any) => {
    "use server";
    const question = formData.get("question");
    const answer = formData.get("answer");

    insertOneQuestion({ question, answer });

    redirect("/questions");
  };

  return (
    <main>
      <h1>문제 출제</h1>
      <form action={createQuestion}>
        <p>
          <label>문제: </label>
          <input type="text" name="question" />
        </p>
        <p>
          <label>답: </label>
          <input type="text" name="answer" />
        </p>
        <p>
          <button type="submit">출제</button>
        </p>
      </form>
      <ol>
        {questions.map((question, index) => (
          <li key={index}>
            <p>문제: {question.question}</p>
            <p>답: {question.answer}</p>
          </li>
        ))}
      </ol>
    </main>
  );
}
