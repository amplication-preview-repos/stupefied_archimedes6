import { PaymentDetailsUpdateManyWithoutPaymentsItemsInput } from "./PaymentDetailsUpdateManyWithoutPaymentsItemsInput";

export type PaymentsUpdateInput = {
  amount?: number | null;
  date?: Date | null;
  description?: string | null;
  paymentDetailsItems?: PaymentDetailsUpdateManyWithoutPaymentsItemsInput;
};
