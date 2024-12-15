export default async function QuestionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  return (
    <main>
      <h1>My Question: {slug}</h1>
    </main>
  );
}
