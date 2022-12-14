import { Test, TestingModule } from '@nestjs/testing';
import { SearchProfileService } from './search-profile.service';

describe('SearchProfileService', () => {
  let service: SearchProfileService;
  let kafkaClient: any = {
    subscribeToResponseOf: jest.fn(),
    send: jest.fn()
  };

  beforeEach(async () => {
    service = new SearchProfileService(kafkaClient);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
