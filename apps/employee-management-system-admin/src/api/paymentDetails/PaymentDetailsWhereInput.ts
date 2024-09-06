import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PaymentsWhereUniqueInput } from "../payments/PaymentsWhereUniqueInput";

export type PaymentDetailsWhereInput = {
  amount?: FloatNullableFilter;
  exchangeRate?: FloatNullableFilter;
  id?: StringFilter;
  payment?: PaymentsWhereUniqueInput;
};
