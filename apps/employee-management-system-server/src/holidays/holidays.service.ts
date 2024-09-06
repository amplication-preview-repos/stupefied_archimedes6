import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HolidaysServiceBase } from "./base/holidays.service.base";

@Injectable()
export class HolidaysService extends HolidaysServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
