import { PaymentDetails } from "../paymentDetails/PaymentDetails";

export type Payments = {
  amount: number | null;
  createdAt: Date;
  date: Date | null;
  description: string | null;
  id: string;
  paymentDetailsItems?: Array<PaymentDetails>;
  updatedAt: Date;
};
