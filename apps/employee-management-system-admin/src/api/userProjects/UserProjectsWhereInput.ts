import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserProjectsWhereInput = {
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  startDate?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
