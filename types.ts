
export enum Category {
  HOME = 'HOME',
  CATALOG = 'CATALOG',
  POSTER = 'POSTER',
  LONG_IMAGE = 'LONG_IMAGE',
  ILLUSTRATION = 'ILLUSTRATION',
  PACKAGE = 'PACKAGE',
  MATERIAL = 'MATERIAL'
}

export interface ImageItem {
  url: string;
  detailImages?: string[]; // 详情页的多张细节图
  title: string;
  desc: string;
}

export interface PortfolioItem {
  id: string;
  category: Category;
  title: string;
  enTitle: string;
  date: string;
  images: ImageItem[];
  description?: string;
}

export interface TabConfig {
  id: Category;
  label: string;
  enLabel: string;
  color: string;
  textColor: string;
  activeColor: string;
}
