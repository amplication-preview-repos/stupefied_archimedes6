import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserProjectsServiceBase } from "./base/userProjects.service.base";

@Injectable()
export class UserProjectsService extends UserProjectsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
