import { Test, TestingModule } from "@nestjs/testing";
import { IclockController } from "./iclock.controller";

describe("IclockController", () => {
  let controller: IclockController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IclockController],
    }).compile();

    controller = module.get<IclockController>(IclockController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
