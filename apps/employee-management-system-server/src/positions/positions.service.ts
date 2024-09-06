import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PositionsServiceBase } from "./base/positions.service.base";

@Injectable()
export class PositionsService extends PositionsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
