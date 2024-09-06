import { InputJsonValue } from "../../types";
import { UserPositionsCreateNestedManyWithoutUsersInput } from "./UserPositionsCreateNestedManyWithoutUsersInput";
import { UserProjectsCreateNestedManyWithoutUsersInput } from "./UserProjectsCreateNestedManyWithoutUsersInput";
import { VacationsCreateNestedManyWithoutUsersInput } from "./VacationsCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  dateOfBirth?: Date | null;
  email?: string | null;
  employmentEndDate?: Date | null;
  employmentStartDate?: Date | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  status?: "Option1" | null;
  userPositionsItems?: UserPositionsCreateNestedManyWithoutUsersInput;
  userProjectsItems?: UserProjectsCreateNestedManyWithoutUsersInput;
  username: string;
  vacationsItems?: VacationsCreateNestedManyWithoutUsersInput;
};
