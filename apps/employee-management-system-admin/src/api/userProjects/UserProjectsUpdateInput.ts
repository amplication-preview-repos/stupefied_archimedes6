import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserProjectsUpdateInput = {
  endDate?: Date | null;
  startDate?: Date | null;
  user?: UserWhereUniqueInput | null;
};
