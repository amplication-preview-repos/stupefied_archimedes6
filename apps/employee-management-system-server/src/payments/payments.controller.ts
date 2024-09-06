import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PaymentsService } from "./payments.service";
import { PaymentsControllerBase } from "./base/payments.controller.base";

@swagger.ApiTags("payments")
@common.Controller("payments")
export class PaymentsController extends PaymentsControllerBase {
  constructor(
    protected readonly service: PaymentsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
