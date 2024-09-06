import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PaymentsTitle } from "../payments/PaymentsTitle";

export const PaymentDetailsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
