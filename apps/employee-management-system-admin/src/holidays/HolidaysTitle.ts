import { Holidays as THolidays } from "../api/holidays/Holidays";

export const HOLIDAYS_TITLE_FIELD = "name";

export const HolidaysTitle = (record: THolidays): string => {
  return record.name?.toString() || String(record.id);
};
