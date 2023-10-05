import { getContent } from "@/helpers/extract-content";

export default async function Home() {
  const allApiContent = await getContent();
  console.log(allApiContent);

  return <main>
    {JSON.stringify(allApiContent)}
  </main>;
}
