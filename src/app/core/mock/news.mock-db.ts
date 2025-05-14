  
  import { Post, ContentStatus } from '../models/post.model';
import { TeamMember } from '../models/team.model';

  export const mockPosts: Post[] = Array.from({ length: 50 }, (_, i) => ({
    id: `${i + 1}`,
    title: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. ${i + 1}`,
    slug: `news-article-${i + 1}`,
    content: `This is the content for news article ${i + 1}.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    excerpt: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
    status: i % 3 === 0 ? ContentStatus.PUBLISHED : ContentStatus.DRAFT,
    publishedAt: i % 3 === 0 ? new Date() : undefined,
    image: {
      id: '1',
      url: `https://picsum.photos/id/${i + 1}/800/600`,
      alt: `Image for news article ${i + 1}`
    },
    author: {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com'
    },
    authorId: '1',
    categories: [
      { id: '1', name: 'Technology', slug: 'technology' },
      { id: '2', name: 'Science', slug: 'science' }
    ],
    tags: [
      { id: '1', name: `tag${i}`, slug: `tag-${i}` },
      { id: '2', name: `tag${i + 1}`, slug: `tag-${i + 1}` }
    ],
    source: [
      {
        label:'Source', 
        url:"https://example.com ${i + 1}"
      }
    ],
    vimeo:"https://vimeo.com/123456789",
    youtube:"https://youtube.com/123456789",
    createdAt: new Date(),
    updatedAt: new Date()
  }));