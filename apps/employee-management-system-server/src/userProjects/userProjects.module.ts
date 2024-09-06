import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UserProjectsModuleBase } from "./base/userProjects.module.base";
import { UserProjectsService } from "./userProjects.service";
import { UserProjectsController } from "./userProjects.controller";
import { UserProjectsResolver } from "./userProjects.resolver";

@Module({
  imports: [UserProjectsModuleBase, forwardRef(() => AuthModule)],
  controllers: [UserProjectsController],
  providers: [UserProjectsService, UserProjectsResolver],
  exports: [UserProjectsService],
})
export class UserProjectsModule {}
