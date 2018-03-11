export interface Hotel {
  id: number;
  name: string;
  address: string;
  phone: string;
  images: string[];
  description: string;
  weather: {
    air: number;
    water: number;
  };
  twitter: {
    followers: number;
    following: number;
  };
}
