import { User } from "../user/User";

export type UserProjects = {
  createdAt: Date;
  endDate: Date | null;
  id: string;
  startDate: Date | null;
  updatedAt: Date;
  user?: User | null;
};
