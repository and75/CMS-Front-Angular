import { ResourcesData } from '../models/resources.model';
import { ContentStatus } from '../models/post.model';

export const MockDataResources: ResourcesData = {
    videos: [
        {
            id: '1',
            author: {
                id: '1',
                name: 'John Doe',
                email: 'john@example.com'
            },
            label: "Introduction to Complex Systems",
            excerpt: "An overview of complex systems and their characteristics.",
            url: "https://example.com/resource1",
            year: 2024,
            category: "videos",
            youtubeUrl: "https://www.youtube.com/watch?v=example1",
            publishedAt: new Date("2025-01-01"),
            createdAt: new Date("2025-01-01"),
            updatedAt: new Date("2025-01-01"),
            status: ContentStatus.PUBLISHED
        },
        {
            id: '2',
            author: {
                id: '1',
                name: 'John Doe',
                email: 'john@example.com'
            },
            label: "Network Science Lecture Series",
            excerpt: "A series of lectures on network science and its applications.",
            url: "https://example.com/resource2",
            year: 2023,
            category: "videos",
            youtubeUrl: "https://www.youtube.com/watch?v=example2",
            publishedAt: new Date("2025-01-01"),
            createdAt: new Date("2025-01-01"),
            updatedAt: new Date("2025-01-01"),
            status: ContentStatus.PUBLISHED
        }
    ],
    documents: [
        {
            id: '3',
            author: {
                id: '1',
                name: 'John Doe',
                email: 'john@example.com'
            },
            label: "Research Methodology Guide",
            excerpt: "A comprehensive guide on research methodologies.",
            url: "https://example.com/resource3",
            year: 2024,
            category: "documents",
            publishedAt: new Date("2025-01-01"),
            createdAt: new Date("2025-01-01"),
            updatedAt: new Date("2025-01-01"),
            status: ContentStatus.PUBLISHED
        },
        {
            id: '4',
            author: {
                id: '2',
                name: 'Jane Smith',
                email: 'jane@example.com'
            },
            label: "Data Analysis Handbook",
            excerpt: "A detailed handbook on data analysis techniques.",
            url: "https://example.com/resource4",
            year: 2023,
            category: "documents",
            publishedAt: new Date("2025-01-01"),
            createdAt: new Date("2025-01-01"),
            updatedAt: new Date("2025-01-01"),
            status: ContentStatus.PUBLISHED
        }
    ],
    presentations: [
        {
            id: '5',
            author: {
                id: '3',
                name: 'Alice Johnson',
                email: 'alice@example.com'
            },
            label: "Complex Networks Analysis",
            excerpt: "An analysis of complex networks and their properties.",
            url: "https://example.com/resource5",
            year: 2024,
            category: "presentations",
            publishedAt: new Date("2025-01-01"),
            createdAt: new Date("2025-01-01"),
            updatedAt: new Date("2025-01-01"),
            status: ContentStatus.PUBLISHED
        },
        {
            id: '6',
            author: {
                id: '4',
                name: 'Bob Brown',
                email: 'bob@example.com'
            },
            label: "Systems Thinking Workshop",
            excerpt: "A workshop on systems thinking and its applications.",
            url: "https://example.com/resource6",
            year: 2023,
            category: "presentations",
            publishedAt: new Date("2025-01-01"),
            createdAt: new Date("2025-01-01"),
            updatedAt: new Date("2025-01-01"),
            status: ContentStatus.PUBLISHED
        }
    ],
    datasets: [
        {
            id: '7',
            author: {
                id: '5',
                name: 'Charlie Davis',
                email: 'charlie@example.com'
            },
            label: "Social Network Dataset",
            excerpt: "A dataset of social network interactions.",
            url: "https://example.com/resource7",
            year: 2024,
            category: "datasets",
            publishedAt: new Date("2025-01-01"),
            createdAt: new Date("2025-01-01"),
            updatedAt: new Date("2025-01-01"),
            status: ContentStatus.PUBLISHED
        },
        {
            id: '8',
            author: {
                id: '6',
                name: 'Diana Evans',
                email: 'diana@example.com'
            },
            label: "Complex Systems Simulation Data",
            excerpt: "Simulation data for complex systems research.",
            url: "https://example.com/resource8",
            year: 2023,
            category: "datasets",
            publishedAt: new Date("2025-01-01"),
            createdAt: new Date("2025-01-01"),
            updatedAt: new Date("2025-01-01"),
            status: ContentStatus.PUBLISHED
        }
    ]
};