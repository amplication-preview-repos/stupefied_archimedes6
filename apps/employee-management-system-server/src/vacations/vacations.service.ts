import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VacationsServiceBase } from "./base/vacations.service.base";

@Injectable()
export class VacationsService extends VacationsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
