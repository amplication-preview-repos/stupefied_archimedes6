import { User } from "../user/User";

export type Vacations = {
  createdAt: Date;
  endDate: Date | null;
  id: string;
  startDate: Date | null;
  typeField: string | null;
  updatedAt: Date;
  user?: User | null;
  workingDays: number | null;
};
