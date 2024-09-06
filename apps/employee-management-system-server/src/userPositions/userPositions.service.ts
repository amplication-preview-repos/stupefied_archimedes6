import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserPositionsServiceBase } from "./base/userPositions.service.base";

@Injectable()
export class UserPositionsService extends UserPositionsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
