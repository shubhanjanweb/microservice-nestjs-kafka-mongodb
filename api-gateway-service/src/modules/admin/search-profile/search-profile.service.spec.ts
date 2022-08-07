import { Test, TestingModule } from '@nestjs/testing';
import { SearchProfileService } from './search-profile.service';

describe('SearchProfileService', () => {
  let service: SearchProfileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SearchProfileService],
    }).compile();

    service = module.get<SearchProfileService>(SearchProfileService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
