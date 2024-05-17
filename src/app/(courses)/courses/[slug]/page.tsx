export default async function CourseDetails({
  params,
}: {
  params: { slug: String };
}) {
  const { slug } = params;
  return (
    <div className="text-red-600 flex flex-1 items-center justify-center text-3xl font-bold">
      <h1>This is the {slug} blog detail page</h1>
    </div>
  );
}
