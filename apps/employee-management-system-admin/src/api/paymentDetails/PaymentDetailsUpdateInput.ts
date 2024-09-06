import { PaymentsWhereUniqueInput } from "../payments/PaymentsWhereUniqueInput";

export type PaymentDetailsUpdateInput = {
  amount?: number | null;
  exchangeRate?: number | null;
  payment?: PaymentsWhereUniqueInput | null;
};
