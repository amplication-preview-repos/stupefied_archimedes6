import { Positions as TPositions } from "../api/positions/Positions";

export const POSITIONS_TITLE_FIELD = "name";

export const PositionsTitle = (record: TPositions): string => {
  return record.name?.toString() || String(record.id);
};
