import { Module } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { PositionsModule } from "./positions/positions.module";
import { ProjectsModule } from "./projects/projects.module";
import { RolesModule } from "./roles/roles.module";
import { UserPositionsModule } from "./userPositions/userPositions.module";
import { UserProjectsModule } from "./userProjects/userProjects.module";
import { VacationsModule } from "./vacations/vacations.module";
import { PaymentDetailsModule } from "./paymentDetails/paymentDetails.module";
import { PaymentsModule } from "./payments/payments.module";
import { HolidaysModule } from "./holidays/holidays.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    UserModule,
    PositionsModule,
    ProjectsModule,
    RolesModule,
    UserPositionsModule,
    UserProjectsModule,
    VacationsModule,
    PaymentDetailsModule,
    PaymentsModule,
    HolidaysModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
