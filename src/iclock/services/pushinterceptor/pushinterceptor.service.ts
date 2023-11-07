import { Injectable } from "@nestjs/common";

@Injectable()
export class PushinterceptorService {
  ok(): string {
    return "OK";
  }
}
