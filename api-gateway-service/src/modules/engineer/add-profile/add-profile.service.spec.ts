import { Test, TestingModule } from '@nestjs/testing';
import { AddProfileService } from './add-profile.service';

describe('AddProfileService', () => {
  let service: AddProfileService;
  let kafkaClient: any = {
    subscribeToResponseOf: jest.fn(),
    send: jest.fn()
  };

  beforeEach(async () => {
    service = new AddProfileService(kafkaClient);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
