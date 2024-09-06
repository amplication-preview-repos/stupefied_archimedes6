import { Roles as TRoles } from "../api/roles/Roles";

export const ROLES_TITLE_FIELD = "name";

export const RolesTitle = (record: TRoles): string => {
  return record.name?.toString() || String(record.id);
};
