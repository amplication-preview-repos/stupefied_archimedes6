import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PaymentDetailsService } from "./paymentDetails.service";
import { PaymentDetailsControllerBase } from "./base/paymentDetails.controller.base";

@swagger.ApiTags("paymentDetails")
@common.Controller("paymentDetails")
export class PaymentDetailsController extends PaymentDetailsControllerBase {
  constructor(
    protected readonly service: PaymentDetailsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
