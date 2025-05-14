export interface BibliographyItem {
  reference: string;
  url: string;
  year: number;
  category: string;
}

export interface BibliographyData {
  books: BibliographyItem[];
  articles: BibliographyItem[];
  conferences: BibliographyItem[];
  theses: BibliographyItem[];
}