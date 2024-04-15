export interface ICardBook {
  imageBook: string;
  title: string;
  description: string;
  price: string;
  id: number;
  navigateDetails(id: number): void;
}