import { InputJsonValue } from "../../types";
import { UserPositionsUpdateManyWithoutUsersInput } from "./UserPositionsUpdateManyWithoutUsersInput";
import { UserProjectsUpdateManyWithoutUsersInput } from "./UserProjectsUpdateManyWithoutUsersInput";
import { VacationsUpdateManyWithoutUsersInput } from "./VacationsUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  dateOfBirth?: Date | null;
  email?: string | null;
  employmentEndDate?: Date | null;
  employmentStartDate?: Date | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  status?: "Option1" | null;
  userPositionsItems?: UserPositionsUpdateManyWithoutUsersInput;
  userProjectsItems?: UserProjectsUpdateManyWithoutUsersInput;
  username?: string;
  vacationsItems?: VacationsUpdateManyWithoutUsersInput;
};
