import matter from "gray-matter"
import { join } from "path";
import fs from "fs/promises";
import { IApiContent } from "@/interfaces/api-content.interface";

const apiDirectory = join(process.cwd(), 'api');

export async function getContent(): Promise<IApiContent[]> {
  // const realSlug = slug.replace(/\.md$/, '');
  const apiContent: IApiContent[] = [];
  const files = await fs.readdir(apiDirectory);
  for (const file of files) {
    const fullPath = join(apiDirectory, file);
    const fileContents = await fs.readFile(fullPath, 'utf8');
    const { data } = matter(fileContents);
    apiContent.push(data as IApiContent);
  }
  return apiContent;
}
