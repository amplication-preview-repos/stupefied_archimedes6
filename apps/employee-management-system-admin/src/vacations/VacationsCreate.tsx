import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const VacationsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="endDate" source="endDate" />
        <DateTimeInput label="startDate" source="startDate" />
        <TextInput label="type" source="typeField" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="workingDays" source="workingDays" />
      </SimpleForm>
    </Create>
  );
};
