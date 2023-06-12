export interface IGalleryItem {
  id: string;
  user: {
    name: string;
  };
  urls: {
    small: string;
    full: string;
  };
  description: string | null;
  alt_description: string;
}
