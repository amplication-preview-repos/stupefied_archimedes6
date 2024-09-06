import { PositionsWhereInput } from "./PositionsWhereInput";
import { PositionsOrderByInput } from "./PositionsOrderByInput";

export type PositionsFindManyArgs = {
  where?: PositionsWhereInput;
  orderBy?: Array<PositionsOrderByInput>;
  skip?: number;
  take?: number;
};
