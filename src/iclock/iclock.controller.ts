import { Controller, Get, Query } from "@nestjs/common";
import { PushinterceptorService } from "./services/pushinterceptor/pushinterceptor.service";

@Controller("iclock")
export class IclockController {
  constructor(private readonly pushInterceptor: PushinterceptorService) {}

  @Get()
  getDefault(): string {
    return this.pushInterceptor.ok();
  }
  @Get("cdata")
  getCdata(
    @Query("SN") serialNumber: string,
    @Query("options") options: string,
  ): string {
    console.log(serialNumber, options);
    return this.pushInterceptor.ok();
  }
}
