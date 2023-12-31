export interface TransactionTypes {
  amount: number;
  metadata: {
    name?: string;
    type: string;
    email: string;
    quantity: number;
    country: string;
    product_name?: string;
  };
  payment_reference: string;
  status: string;
  type: string;
  date: string;
}

export interface Items {
  id: number;
  type: string;
}
