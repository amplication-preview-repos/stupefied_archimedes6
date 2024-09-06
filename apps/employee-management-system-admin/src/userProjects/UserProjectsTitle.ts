import { UserProjects as TUserProjects } from "../api/userProjects/UserProjects";

export const USERPROJECTS_TITLE_FIELD = "id";

export const UserProjectsTitle = (record: TUserProjects): string => {
  return record.id?.toString() || String(record.id);
};
