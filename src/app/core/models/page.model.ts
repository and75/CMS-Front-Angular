export interface PageContent {
  title: string;
  content: string;
  description: string;
  image:string;
  imageWidth:number;
  imageHeight:number;
  imageType:string;
  featuredArticles?: any[];
  featuredEvents?: any[];
  recentPublications?: any[];
  sections?: {
    title: string;
    content: string;
  }[];
  address?: string;
  email?: string;
  phone?: string;
}

export type PageType = 'home' | 'news' | 'events' | 'bibliography' | 'network' | 'contact' | 'team' | 'resources' ;