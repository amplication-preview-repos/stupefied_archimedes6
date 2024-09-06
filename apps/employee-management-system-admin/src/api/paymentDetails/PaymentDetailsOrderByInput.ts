import { SortOrder } from "../../util/SortOrder";

export type PaymentDetailsOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  exchangeRate?: SortOrder;
  id?: SortOrder;
  paymentId?: SortOrder;
  updatedAt?: SortOrder;
};
