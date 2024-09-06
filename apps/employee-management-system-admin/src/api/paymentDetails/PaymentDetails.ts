import { Payments } from "../payments/Payments";

export type PaymentDetails = {
  amount: number | null;
  createdAt: Date;
  exchangeRate: number | null;
  id: string;
  payment?: Payments | null;
  updatedAt: Date;
};
