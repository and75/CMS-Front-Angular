

import { environment } from '../../../environments/environment';
import { PageContent, PageType } from '../models/page.model';

export const mockPages: Record<PageType, PageContent> = {
  home: {
    title: 'home',
    content: 'Transdisciplinarity and Complexity Research',
    description: 'Excellence Chair funded by the AMIDEX Foundation of Aix-Marseille University',
    image: `${environment.routeMother}/assets/img/card-home.png`,
    imageWidth: 200,
    imageHeight: 200,
    imageType: 'png',
  },
  news: {
    title: 'Latest News',
    content: 'Stay updated with our latest news and announcements.',
    description: 'Browse through our collection of news articles.',
    image: `${environment.routeMother}/assets/img/card-news.png`,
    imageWidth: 200,
    imageHeight: 200,
    imageType: 'png',
  },
  events: {
    title: 'Events',
    content: 'Check out our upcoming events and activities.',
    description: 'Find and participate in our events.',
    image: `${environment.routeMother}/assets/img/card-events.png`,
    imageWidth: 200,
    imageHeight: 200,
    imageType: 'png',
  },
  bibliography: {
    title: 'Bibliography',
    content: 'Browse through our collection of references and citations.',
    description: 'Explore our academic resources.',
    image: `${environment.routeMother}/assets/img/card-bibliography.png`,
    imageWidth: 200,
    imageHeight: 200,
    imageType: 'png',
  },
  network: {
    title: 'Our Network',
    content: 'Connect with our global network of partners and collaborators.',
    description: 'Discover the diverse range of organizations and institutions we work with.',
    image: `${environment.routeMother}/assets/img/card-network.png`,
    imageWidth: 200,
    imageHeight: 200,
    imageType: 'png',
  },
  resources: {
    title: 'Resources',
    content: 'Access our collection of valuable resources and materials',
    description: 'Discover the diverse range of organizations and institutions we work with.',
    image: `${environment.routeMother}/assets/img/card-resources.png`,
    imageWidth: 200,
    imageHeight: 200,
    imageType: 'png',
  },
  contact: {
    title: 'Contact Us',
    content: 'Get in touch with us for any inquiries.',
    description: 'Find our contact information and reach out to us.',
    image: `${environment.routeMother}/assets/img/card-contact.png`,
    imageWidth: 200,
    imageHeight: 200,
    imageType: 'png',
  },
  team: {
    title: 'Research Team',
    content: 'Meet our dedicated team of researchers and collaborators.',
    description: 'Learn more about the individuals driving our research and initiatives.',
    image: `${environment.routeMother}/assets/img/card-team.png`,
    imageWidth: 200,
    imageHeight: 200,
    imageType: 'png',
  }
};


