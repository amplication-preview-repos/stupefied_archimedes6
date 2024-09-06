import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
  PasswordInput,
  SelectArrayInput,
  SelectInput,
  ReferenceArrayInput,
} from "react-admin";

import { UserPositionsTitle } from "../userPositions/UserPositionsTitle";
import { UserProjectsTitle } from "../userProjects/UserProjectsTitle";
import { VacationsTitle } from "../vacations/VacationsTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="dateOfBirth" source="dateOfBirth" />
        <TextInput label="Email" source="email" type="email" />
        <DateTimeInput label="employmentEndDate" source="employmentEndDate" />
        <DateTimeInput
          label="employmentStartDate"
          source="employmentStartDate"
        />
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Last Name" source="lastName" />
        <PasswordInput label="Password" source="password" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceArrayInput
          source="userPositionsItems"
          reference="UserPositions"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserPositionsTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="userProjectsItems"
          reference="UserProjects"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserProjectsTitle} />
        </ReferenceArrayInput>
        <TextInput label="Username" source="username" />
        <ReferenceArrayInput
          source="vacationsItems"
          reference="Vacations"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={VacationsTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
