import { User } from "../user/User";

export type UserPositions = {
  createdAt: Date;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
