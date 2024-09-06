import { Vacations as TVacations } from "../api/vacations/Vacations";

export const VACATIONS_TITLE_FIELD = "typeField";

export const VacationsTitle = (record: TVacations): string => {
  return record.typeField?.toString() || String(record.id);
};
