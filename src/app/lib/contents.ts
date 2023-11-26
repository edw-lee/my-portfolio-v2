import path from "path"
import fs from "fs";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { ExperienceDataType, ProjectDataType } from "../types/md.types";

const mdDirectory = path.join(process.cwd(), 'md');
const experienceDirectory = path.join(mdDirectory, 'experience');
const projectsDirectory = path.join(mdDirectory, 'projects');

export async function getData(fileName: string) {
    const fullPath = path.join(mdDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf-8');

    const matterResult = matter(fileContents);

    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);

    const contentHtml = processedContent.toString();

    return {
        contentHtml
    };
}

export async function getArrayOfData(directory: string) {
    const fileNames = fs.readdirSync(directory);

    const results: any[] = [];

    for (const fileName of fileNames) {
        const fullPath = path.join(directory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf-8');

        const matterResult = matter(fileContents);

        const processedContent = await remark()
            .use(html)
            .process(matterResult.content);

        const contentHtml = processedContent.toString();

        results.push({
            content: contentHtml,
            ...matterResult.data,
        });
    }

    return results;
}

export async function getSortedExperienceData() {
    const allExperienceData = await getArrayOfData(experienceDirectory);

    return <ExperienceDataType[]>allExperienceData.sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime());
}

export async function getSortedProjectsData() {
    const allProjectsData = await getArrayOfData(projectsDirectory);

    return <ProjectDataType[]>allProjectsData.sort((a, b) => a.sort - b.sort);
}