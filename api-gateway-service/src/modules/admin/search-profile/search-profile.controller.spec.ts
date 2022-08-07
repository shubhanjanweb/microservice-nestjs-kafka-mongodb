import { Test, TestingModule } from '@nestjs/testing';
import { SearchProfileController } from './search-profile.controller';
import { SearchProfileService } from './search-profile.service';

describe('SearchProfileController', () => {
  let controller: SearchProfileController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SearchProfileController],
      providers: [SearchProfileService],
    }).compile();

    controller = module.get<SearchProfileController>(SearchProfileController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
