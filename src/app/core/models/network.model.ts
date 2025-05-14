export interface NetworkItem {
  label: string;
  url: string;
}

export interface NetworkData {
  cggg: NetworkItem[];
  axe: NetworkItem[];
  france: NetworkItem[];
  international: NetworkItem[];
}

export interface NetworkFilter {
  value: NetworkSection;
  label: string;
}

export type NetworkSection = 'all' | 'cggg' | 'axe' | 'france' | 'international';