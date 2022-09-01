export interface GlobalData {
  quantity: number;
  slug: string;
  image: string;
  name: string;
  tag: string;
  price: string | number;
  desc: string;
  _id: string | number;
  countInStock: number;
  delivery: number;
}

export interface SystemError {
  message: { response: { data: { message: any } }; message: string };
  response: any;
}
