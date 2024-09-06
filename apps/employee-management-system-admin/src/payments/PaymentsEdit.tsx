import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { PaymentDetailsTitle } from "../paymentDetails/PaymentDetailsTitle";

export const PaymentsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <DateTimeInput label="date" source="date" />
        <TextInput label="description" multiline source="description" />
        <ReferenceArrayInput
          source="paymentDetailsItems"
          reference="PaymentDetails"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PaymentDetailsTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
