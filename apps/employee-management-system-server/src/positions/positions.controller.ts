import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PositionsService } from "./positions.service";
import { PositionsControllerBase } from "./base/positions.controller.base";

@swagger.ApiTags("positions")
@common.Controller("positions")
export class PositionsController extends PositionsControllerBase {
  constructor(
    protected readonly service: PositionsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
