import { Test, TestingModule } from "@nestjs/testing";
import { PushinterceptorService } from "./pushinterceptor.service";

describe("PushinterceptorService", () => {
  let service: PushinterceptorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PushinterceptorService],
    }).compile();

    service = module.get<PushinterceptorService>(PushinterceptorService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
