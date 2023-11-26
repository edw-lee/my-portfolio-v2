export type ContentDataType = {
    contentHtml: string;
}

export type ExperienceDataType = {
    title: string;
    company: string;
    skills: string[];
    startDate: string;
    endDate: string;
    isCurrent?: boolean;
    content: string;
    link?: string;
}

export type ProjectDataType = {
    title: string;
    skills: string[];
    content: string;
    imageUrl: string;
    height: string;
    link?: string;
    source?: string;
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
}