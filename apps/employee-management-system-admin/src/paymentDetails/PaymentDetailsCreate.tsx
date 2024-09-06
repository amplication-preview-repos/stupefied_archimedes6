import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PaymentsTitle } from "../payments/PaymentsTitle";

export const PaymentDetailsCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <NumberInput label="exchangeRate" source="exchangeRate" />
        <ReferenceInput
          source="payment.id"
          reference="Payments"
          label="Payment"
        >
          <SelectInput optionText={PaymentsTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
