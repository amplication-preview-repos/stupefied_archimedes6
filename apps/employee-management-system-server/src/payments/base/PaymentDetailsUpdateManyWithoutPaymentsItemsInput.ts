/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { PaymentDetailsWhereUniqueInput } from "../../paymentDetails/base/PaymentDetailsWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class PaymentDetailsUpdateManyWithoutPaymentsItemsInput {
  @Field(() => [PaymentDetailsWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PaymentDetailsWhereUniqueInput],
  })
  connect?: Array<PaymentDetailsWhereUniqueInput>;

  @Field(() => [PaymentDetailsWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PaymentDetailsWhereUniqueInput],
  })
  disconnect?: Array<PaymentDetailsWhereUniqueInput>;

  @Field(() => [PaymentDetailsWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PaymentDetailsWhereUniqueInput],
  })
  set?: Array<PaymentDetailsWhereUniqueInput>;
}

export { PaymentDetailsUpdateManyWithoutPaymentsItemsInput as PaymentDetailsUpdateManyWithoutPaymentsItemsInput };
