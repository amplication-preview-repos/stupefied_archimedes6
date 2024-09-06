import { PaymentDetailsCreateNestedManyWithoutPaymentsItemsInput } from "./PaymentDetailsCreateNestedManyWithoutPaymentsItemsInput";

export type PaymentsCreateInput = {
  amount?: number | null;
  date?: Date | null;
  description?: string | null;
  paymentDetailsItems?: PaymentDetailsCreateNestedManyWithoutPaymentsItemsInput;
};
