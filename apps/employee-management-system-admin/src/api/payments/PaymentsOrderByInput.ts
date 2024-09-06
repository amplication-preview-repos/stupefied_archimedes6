import { SortOrder } from "../../util/SortOrder";

export type PaymentsOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
