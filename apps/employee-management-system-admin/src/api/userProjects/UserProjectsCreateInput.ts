import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserProjectsCreateInput = {
  endDate?: Date | null;
  startDate?: Date | null;
  user?: UserWhereUniqueInput | null;
};
