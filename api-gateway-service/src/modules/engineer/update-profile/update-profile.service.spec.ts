import { Test, TestingModule } from '@nestjs/testing';
import { UpdateProfileService } from './update-profile.service';

describe('UpdateProfileService', () => {
  let service: UpdateProfileService;
  let kafkaClient: any = {
    subscribeToResponseOf: jest.fn(),
    send: jest.fn()
  };

  beforeEach(async () => {
    service = new UpdateProfileService(kafkaClient);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
