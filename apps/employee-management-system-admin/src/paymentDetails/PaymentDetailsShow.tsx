import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { PAYMENTS_TITLE_FIELD } from "../payments/PaymentsTitle";

export const PaymentDetailsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="amount" source="amount" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="exchangeRate" source="exchangeRate" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Payment"
          source="payments.id"
          reference="Payments"
        >
          <TextField source={PAYMENTS_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
