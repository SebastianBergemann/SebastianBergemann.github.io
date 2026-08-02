export interface SocialLink {
    name: string;
    icon: string;
    url: string;
    description: string;
}

export const socialLinks: SocialLink[] = [
    {
        name: "GitHub",
        icon: "fa-brands fa-github",
        url: "https://github.com/SebastianBergemann",
        description: "Open-source software and personal projects"
    },
    {
        name: "GitLab",
        icon: "fa-brands fa-gitlab",
        url: "https://git.fortiss.org/bergemann",
        description: "Research software at fortiss"
    },
    {
        name: "Google Scholar",
        icon: "ai ai-google-scholar",
        url: "https://scholar.google.com/citations?hl=en&user=6jcx-9AAAAAJ",
        description: "Publications and citations"
    },
    {
        name: "ORCID",
        icon: "ai ai-orcid",
        url: "https://orcid.org/0000-0002-8135-7487",
        description: "Researcher identifier"
    },
    {
        name: "LinkedIn",
        icon: "fa-brands fa-linkedin",
        url: "https://www.linkedin.com/in/sebastian-bergemann",
        description: "Professional profile"
    }
];