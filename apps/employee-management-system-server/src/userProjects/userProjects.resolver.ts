import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { UserProjectsResolverBase } from "./base/userProjects.resolver.base";
import { UserProjects } from "./base/UserProjects";
import { UserProjectsService } from "./userProjects.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => UserProjects)
export class UserProjectsResolver extends UserProjectsResolverBase {
  constructor(
    protected readonly service: UserProjectsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
