import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { IclockController } from "./iclock/iclock.controller";
import { PushinterceptorService } from "./iclock/services/pushinterceptor/pushinterceptor.service";
import { IclockModule } from "./iclock/iclock.module";
import { AttendanceModule } from "./attendance/attendance.module";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    IclockModule,
    AttendanceModule,
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "root",
      database: "test",
      entities: [],
      synchronize: true,
    }),
  ],
  controllers: [AppController, IclockController],
  providers: [AppService, PushinterceptorService],
})
export class AppModule {}
