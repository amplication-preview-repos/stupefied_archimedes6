import { VacationsWhereInput } from "./VacationsWhereInput";
import { VacationsOrderByInput } from "./VacationsOrderByInput";

export type VacationsFindManyArgs = {
  where?: VacationsWhereInput;
  orderBy?: Array<VacationsOrderByInput>;
  skip?: number;
  take?: number;
};
