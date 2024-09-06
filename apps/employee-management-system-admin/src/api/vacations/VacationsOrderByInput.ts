import { SortOrder } from "../../util/SortOrder";

export type VacationsOrderByInput = {
  createdAt?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  startDate?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  workingDays?: SortOrder;
};
