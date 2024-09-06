import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PaymentDetailsModuleBase } from "./base/paymentDetails.module.base";
import { PaymentDetailsService } from "./paymentDetails.service";
import { PaymentDetailsController } from "./paymentDetails.controller";
import { PaymentDetailsResolver } from "./paymentDetails.resolver";

@Module({
  imports: [PaymentDetailsModuleBase, forwardRef(() => AuthModule)],
  controllers: [PaymentDetailsController],
  providers: [PaymentDetailsService, PaymentDetailsResolver],
  exports: [PaymentDetailsService],
})
export class PaymentDetailsModule {}
