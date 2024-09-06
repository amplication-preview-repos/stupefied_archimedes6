import { HolidaysWhereInput } from "./HolidaysWhereInput";
import { HolidaysOrderByInput } from "./HolidaysOrderByInput";

export type HolidaysFindManyArgs = {
  where?: HolidaysWhereInput;
  orderBy?: Array<HolidaysOrderByInput>;
  skip?: number;
  take?: number;
};
