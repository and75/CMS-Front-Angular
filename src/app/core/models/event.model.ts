export interface EventData {
    id: string;
    slug: string;
    img: string;
    alt: string;
    title: string;
    date_start: Date;
    date_end: Date;
    category: string;
    location: string;
    bref_description: string;
    description: string;
    speakers: string;
    link: string;
    link_zoom: string;
    link_video_conference_alt: string;
    video: string;
    createdAt: Date;
    updatedAt: Date;
    programme: string;
    status: 'draft' | 'published';
  }
  