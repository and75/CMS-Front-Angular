export interface Resource {
  name: string;
  url: string;
  icon: string;
}

export interface TeamMember {
  id: string;
  slug: string;
  status: TeamMemberStatus;  
  img: string;
  alt: string;
  name: string;
  role: string;
  project: string;
  projectDesc: string;
  bio: string;
  book: string[];
  resources: Resource[];
  externalLink: string;
  createdAt: Date;
  updatedAt: Date;
}

export enum TeamMemberStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive'
}

export interface TeamMemberCreateInput {
  img: string;
  alt: string;
  name: string;
  role: string;
  project: string;
  projectDesc: string;
  bio: string;
  book: string[];
  resources: Resource[];
  status: TeamMemberStatus;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export interface TeamMemberUpdateInput extends Partial<TeamMemberCreateInput> {}

export interface TeamMemberFilters {
  role?: string;
  status?: TeamMemberStatus;
  search?: string;
}