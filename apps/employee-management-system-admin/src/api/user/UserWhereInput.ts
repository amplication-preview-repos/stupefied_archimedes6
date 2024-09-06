import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserPositionsListRelationFilter } from "../userPositions/UserPositionsListRelationFilter";
import { UserProjectsListRelationFilter } from "../userProjects/UserProjectsListRelationFilter";
import { VacationsListRelationFilter } from "../vacations/VacationsListRelationFilter";

export type UserWhereInput = {
  dateOfBirth?: DateTimeNullableFilter;
  email?: StringNullableFilter;
  employmentEndDate?: DateTimeNullableFilter;
  employmentStartDate?: DateTimeNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  status?: "Option1";
  userPositionsItems?: UserPositionsListRelationFilter;
  userProjectsItems?: UserProjectsListRelationFilter;
  username?: StringFilter;
  vacationsItems?: VacationsListRelationFilter;
};
