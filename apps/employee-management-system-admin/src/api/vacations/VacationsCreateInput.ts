import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type VacationsCreateInput = {
  endDate?: Date | null;
  startDate?: Date | null;
  typeField?: string | null;
  user?: UserWhereUniqueInput | null;
  workingDays?: number | null;
};
