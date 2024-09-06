import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { VacationsService } from "./vacations.service";
import { VacationsControllerBase } from "./base/vacations.controller.base";

@swagger.ApiTags("vacations")
@common.Controller("vacations")
export class VacationsController extends VacationsControllerBase {
  constructor(
    protected readonly service: VacationsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
