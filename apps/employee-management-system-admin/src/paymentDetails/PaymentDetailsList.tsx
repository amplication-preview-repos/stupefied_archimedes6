import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { PAYMENTS_TITLE_FIELD } from "../payments/PaymentsTitle";

export const PaymentDetailsList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Payment DetailsItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
