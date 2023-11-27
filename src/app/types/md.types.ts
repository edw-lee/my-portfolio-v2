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

type ResponsiveSize = {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
}

export type ProjectDataType = {
    title: string;
    skills: string[];
    content: string;
    imageUrl: string;
    link?: string;
    source?: string;
    size?: ResponsiveSize;
    height?: ResponsiveSize;
}