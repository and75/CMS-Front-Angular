enum ContentStatus {
  DRAFT = 'DRAFT',
  PUBLISHED = 'PUBLISHED'
}
interface User {
  id: string;
  name: string;
  email: string;
}
export interface ResourceItem {
  id: string;
  label: string;
  excerpt: string;
  url: string;
  year: number;
  category: string;
  author: User;
  youtubeUrl?: string;
  status: ContentStatus;
  publishedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface ResourcesData {
  videos: ResourceItem[];
  documents: ResourceItem[];
  presentations: ResourceItem[];
  datasets: ResourceItem[];
}