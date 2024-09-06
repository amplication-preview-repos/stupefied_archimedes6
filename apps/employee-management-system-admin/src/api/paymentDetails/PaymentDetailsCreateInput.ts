import { PaymentsWhereUniqueInput } from "../payments/PaymentsWhereUniqueInput";

export type PaymentDetailsCreateInput = {
  amount?: number | null;
  exchangeRate?: number | null;
  payment?: PaymentsWhereUniqueInput | null;
};
