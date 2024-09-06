import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { VacationsModuleBase } from "./base/vacations.module.base";
import { VacationsService } from "./vacations.service";
import { VacationsController } from "./vacations.controller";
import { VacationsResolver } from "./vacations.resolver";

@Module({
  imports: [VacationsModuleBase, forwardRef(() => AuthModule)],
  controllers: [VacationsController],
  providers: [VacationsService, VacationsResolver],
  exports: [VacationsService],
})
export class VacationsModule {}
