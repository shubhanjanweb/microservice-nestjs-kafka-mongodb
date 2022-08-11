import { UpdateProfileController } from './update-profile.controller';

describe('UpdateProfileController', () => {
  let controller: UpdateProfileController;
  let service: any;

  beforeEach(async () => {
    service = {
      findAll: jest.fn()
    }
    controller = new UpdateProfileController(service);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
