import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { HolidaysService } from "./holidays.service";
import { HolidaysControllerBase } from "./base/holidays.controller.base";

@swagger.ApiTags("holidays")
@common.Controller("holidays")
export class HolidaysController extends HolidaysControllerBase {
  constructor(
    protected readonly service: HolidaysService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
