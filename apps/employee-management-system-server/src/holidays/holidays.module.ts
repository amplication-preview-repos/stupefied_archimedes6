import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { HolidaysModuleBase } from "./base/holidays.module.base";
import { HolidaysService } from "./holidays.service";
import { HolidaysController } from "./holidays.controller";
import { HolidaysResolver } from "./holidays.resolver";

@Module({
  imports: [HolidaysModuleBase, forwardRef(() => AuthModule)],
  controllers: [HolidaysController],
  providers: [HolidaysService, HolidaysResolver],
  exports: [HolidaysService],
})
export class HolidaysModule {}
