import { UserPositions as TUserPositions } from "../api/userPositions/UserPositions";

export const USERPOSITIONS_TITLE_FIELD = "id";

export const UserPositionsTitle = (record: TUserPositions): string => {
  return record.id?.toString() || String(record.id);
};
