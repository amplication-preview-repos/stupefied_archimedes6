import { UserPositionsWhereInput } from "./UserPositionsWhereInput";
import { UserPositionsOrderByInput } from "./UserPositionsOrderByInput";

export type UserPositionsFindManyArgs = {
  where?: UserPositionsWhereInput;
  orderBy?: Array<UserPositionsOrderByInput>;
  skip?: number;
  take?: number;
};
