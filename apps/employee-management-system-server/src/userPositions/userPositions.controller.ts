import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UserPositionsService } from "./userPositions.service";
import { UserPositionsControllerBase } from "./base/userPositions.controller.base";

@swagger.ApiTags("userPositions")
@common.Controller("userPositions")
export class UserPositionsController extends UserPositionsControllerBase {
  constructor(
    protected readonly service: UserPositionsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
