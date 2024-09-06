import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UserPositionsModuleBase } from "./base/userPositions.module.base";
import { UserPositionsService } from "./userPositions.service";
import { UserPositionsController } from "./userPositions.controller";
import { UserPositionsResolver } from "./userPositions.resolver";

@Module({
  imports: [UserPositionsModuleBase, forwardRef(() => AuthModule)],
  controllers: [UserPositionsController],
  providers: [UserPositionsService, UserPositionsResolver],
  exports: [UserPositionsService],
})
export class UserPositionsModule {}
