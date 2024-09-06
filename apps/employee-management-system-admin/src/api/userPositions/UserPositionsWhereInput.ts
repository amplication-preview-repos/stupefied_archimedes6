import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserPositionsWhereInput = {
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};
