import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PaymentDetailsResolverBase } from "./base/paymentDetails.resolver.base";
import { PaymentDetails } from "./base/PaymentDetails";
import { PaymentDetailsService } from "./paymentDetails.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PaymentDetails)
export class PaymentDetailsResolver extends PaymentDetailsResolverBase {
  constructor(
    protected readonly service: PaymentDetailsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
