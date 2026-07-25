export interface Project {
  id: string;
  number: string;
  name: string;
  category: 'Client' | 'Personal';
  col1Image1: string;
  col1Image2: string;
  col2Image: string;
  description?: string;
  tags?: string[];
  liveUrl?: string;
}

export interface ServiceItem {
  number: string;
  name: string;
  description: string;
}
