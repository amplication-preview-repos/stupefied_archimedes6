import { JsonValue } from "type-fest";
import { UserPositions } from "../userPositions/UserPositions";
import { UserProjects } from "../userProjects/UserProjects";
import { Vacations } from "../vacations/Vacations";

export type User = {
  createdAt: Date;
  dateOfBirth: Date | null;
  email: string | null;
  employmentEndDate: Date | null;
  employmentStartDate: Date | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  status?: "Option1" | null;
  updatedAt: Date;
  userPositionsItems?: Array<UserPositions>;
  userProjectsItems?: Array<UserProjects>;
  username: string;
  vacationsItems?: Array<Vacations>;
};
