/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  UserPositions as PrismaUserPositions,
  User as PrismaUser,
} from "@prisma/client";

export class UserPositionsServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.UserPositionsCountArgs, "select">
  ): Promise<number> {
    return this.prisma.userPositions.count(args);
  }

  async userPositionsItems(
    args: Prisma.UserPositionsFindManyArgs
  ): Promise<PrismaUserPositions[]> {
    return this.prisma.userPositions.findMany(args);
  }
  async userPositions(
    args: Prisma.UserPositionsFindUniqueArgs
  ): Promise<PrismaUserPositions | null> {
    return this.prisma.userPositions.findUnique(args);
  }
  async createUserPositions(
    args: Prisma.UserPositionsCreateArgs
  ): Promise<PrismaUserPositions> {
    return this.prisma.userPositions.create(args);
  }
  async updateUserPositions(
    args: Prisma.UserPositionsUpdateArgs
  ): Promise<PrismaUserPositions> {
    return this.prisma.userPositions.update(args);
  }
  async deleteUserPositions(
    args: Prisma.UserPositionsDeleteArgs
  ): Promise<PrismaUserPositions> {
    return this.prisma.userPositions.delete(args);
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.userPositions
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
