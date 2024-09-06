import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PositionsModuleBase } from "./base/positions.module.base";
import { PositionsService } from "./positions.service";
import { PositionsController } from "./positions.controller";
import { PositionsResolver } from "./positions.resolver";

@Module({
  imports: [PositionsModuleBase, forwardRef(() => AuthModule)],
  controllers: [PositionsController],
  providers: [PositionsService, PositionsResolver],
  exports: [PositionsService],
})
export class PositionsModule {}
