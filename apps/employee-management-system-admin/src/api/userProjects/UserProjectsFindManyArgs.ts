import { UserProjectsWhereInput } from "./UserProjectsWhereInput";
import { UserProjectsOrderByInput } from "./UserProjectsOrderByInput";

export type UserProjectsFindManyArgs = {
  where?: UserProjectsWhereInput;
  orderBy?: Array<UserProjectsOrderByInput>;
  skip?: number;
  take?: number;
};
