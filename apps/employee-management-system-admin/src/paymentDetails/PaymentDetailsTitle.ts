import { PaymentDetails as TPaymentDetails } from "../api/paymentDetails/PaymentDetails";

export const PAYMENTDETAILS_TITLE_FIELD = "id";

export const PaymentDetailsTitle = (record: TPaymentDetails): string => {
  return record.id?.toString() || String(record.id);
};
