import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UserProjectsService } from "./userProjects.service";
import { UserProjectsControllerBase } from "./base/userProjects.controller.base";

@swagger.ApiTags("userProjects")
@common.Controller("userProjects")
export class UserProjectsController extends UserProjectsControllerBase {
  constructor(
    protected readonly service: UserProjectsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
