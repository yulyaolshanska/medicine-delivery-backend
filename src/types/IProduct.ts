export interface IProduct extends Document {
  name: string;
  price: number;
  description: string;
  drugStoreId: string;
  picture: string;
  quantity: number;
}
